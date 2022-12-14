import cryptoRandomString from "crypto-random-string";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../utils/dbConnect";
import User from "../../../model/User";
import bcrypt from "bcrypt";
import clientPromise from "../../../lib/mongodb";
const saltRounds = parseInt(process.env.SALT_ROUNDS, 10)
var generatedToken = cryptoRandomString({ length: 20, type: 'url-safe' })
var publicGeneratedToken = cryptoRandomString({ length: 20, type: 'url-safe' })
interface ResponseData {
  error?: string;
  msg?: string;
}

const validateEmail = (email: string): boolean => {
  const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return regEx.test(email);
};

const validateForm = async (
  username: string,
  email: string,
  password: string
) => {
  if (username.length < 3) {
    return { error: "Username must have 3 or more characters" };
  }
  if (!validateEmail(email)) {
    return { error: "Email is invalid" };
  }
await dbConnect();
const client = await clientPromise;
const emailUser = await User.findOne({ email: email });
const userNameuser = await User.findOne({ username: username });
const token = await User.findOne({ connection_token: generatedToken });
const public_token = await User.findOne({ public_token: publicGeneratedToken });
  while (token || public_token) {
    generatedToken = await cryptoRandomString({ length: 20, type: 'url-safe' })
    publicGeneratedToken = await cryptoRandomString({ length: 20, type: 'url-safe' })
  }
  if (emailUser) {
    return { error: "Email already exists" };
  }
  if (userNameuser) {
    return { error: "Username already exists" };
  }
  if (password.length < 5) {
    return { error: "Password must have 5 or more characters" };
  }
  client.close();
  return null;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== "POST") {
    return res
      .status(200)
      .json({ error: "This API call only accepts POST methods" });
  }
  // get and validate body variables
  const { username, email, password } = req.body;
  const errorMessage = await validateForm(username, email, password);
    if (errorMessage) {
      console.log(errorMessage.error);
    return res.status(400).json(errorMessage as ResponseData);
  }
  // hash password
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const now = new Date();
  // create new User on MongoDB
  await dbConnect();
  const client = await clientPromise;
  const newUser = await new User({
    username: username,
    email,
    hashedPassword,
    isAdmin: false,
    createdAt: now,
    connection_token: generatedToken,
    public_token: publicGeneratedToken,
    role: "Superuser",
  });
  await newUser
    .save()
    .then(() =>
      res.status(200).json({ msg: "Successfuly created new User: " + newUser }),
      console.log("User Created")
    )
    .catch ((err: string) =>
    console.log("Error on '/api/register'" + err)
  );
    client.close();
    return res.status(200).json({ msg: "Response for Tebex" });
}