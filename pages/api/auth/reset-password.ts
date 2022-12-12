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
  await dbConnect();
  const client = await clientPromise;
  const db = client.db();
  if (password && token) {
    try {
      const user = await User.findOne({ reset_token: token });
      console.log(user)
      const now = new Date()
      console.log(!!user)
      console.log(new Date(user.reset_expires))
      console.log(new Date(user.reset_expires) > now)
      if (!!user && new Date(user.reset_expires) > now) {
        const hash = await bcrypt.hash(password, saltRounds)
        await db.collection("users").updateOne({ email: user.email }, { $set: { hashedPassword: hash, reset_expires: null, reset_token: null }, $currentDate: { lastModified: true } })
        console.log("password updated")
        res.status(200).json("Password updated")
      } else {
        console.log("Token expired")
        res.status(404).json("Token expired")
      }
    } catch (err) {
      console.error('Unexpected error on password reset', err)
      res.status(500).json("Unexpected error on password reset")
    }
  } else {
    console.log("Token expired")
    res.status(404).json("Token expired")
  }
}
