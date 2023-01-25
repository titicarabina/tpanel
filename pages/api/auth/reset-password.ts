import bcrypt from 'bcrypt'
import type { NextApiRequest, NextApiResponse } from 'next'
const saltRounds = parseInt(process.env.SALT_ROUNDS, 10)
import User from "../../../model/User";
import clientPromise from "../../../lib/mongodb";
import dbConnect from '../../../utils/dbConnect';

export default async function handler(  req: NextApiRequest,
    res: NextApiResponse) {
  if (req.method !== "POST") {
      return res
        .status(404)
        .json({ error: "Bad Request" });
    }
  const { password, token } = req.body
  if (password && token) {
    await dbConnect();
    const client = await clientPromise;
    try {
      const user = await User.findOne({ pwd_reset_token: token });
      const now = new Date()
      if (!!user && new Date(user.token_reset_expires) > now) {
        const hash = await bcrypt.hash(password, saltRounds)
        await User.updateOne({ email: user.email }, { $set: { hashedPassword: hash, token_reset_expires: null, pwd_reset_token: null }, $currentDate: { lastModified: true } })
        console.log("password updated")
        res.status(200).json("Password updated")
        client.close()
      } else {
        console.log("No user or Token expired")
        res.status(404).json("No user or Token expired")
        client.close()
      }
    } catch (err) {
      console.error('Unexpected error on password reset', err)
      res.status(500).json("Unexpected error on password reset")
      client.close()
    }
    client.close()
  } else {
    console.log("No password or Token valid")
    res.status(404).json("No password or Token valid")
  }
}
