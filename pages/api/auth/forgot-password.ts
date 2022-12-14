import emailHelper from '../../../lib/email-helper'
import { v4 as uuidv4 } from 'uuid'
import type { NextApiRequest, NextApiResponse } from 'next'
import User from "../../../model/User";
import clientPromise from '../../../lib/mongodb';
import dbConnect from '../../../utils/dbConnect';
export default async function handler(  req: NextApiRequest,
    res: NextApiResponse) {
    if (req.method !== "POST") {
        return res
            .status(404)
            .json({ error: "Bad Request" });
    }
  const { email } = req.body
  await dbConnect();
  const client = await clientPromise;
  const user = await User.findOne({ email: email });
  console.log("User found: ", user)
  if (user) {
    const expires = new Date()
    const token = uuidv4()
    expires.setHours(expires.getHours() + 1);
    try {
      await User.updateOne({ email: email }, { $set: { pwd_reset_token: token, token_reset_expires: expires.toISOString() }, $currentDate: { lastModified: true } })
      await emailHelper.sendEmail({ to: email, token })
      console.log("email sent")
      res.status(200).json("Email sent")
      client.close()
    } catch (err) {
      console.error('unexpected error', err)
      res.status(500).json("Unexpected error")
      client.close()
    }
  } else {
    res.status(200).json("Email sent")
    client.close()
  }
}
