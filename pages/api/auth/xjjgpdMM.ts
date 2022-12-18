import cryptoRandomString from "crypto-random-string";
import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";
import User from "../../../model/User";
import dbConnect from "../../../utils/dbConnect";
var publicGeneratedToken = cryptoRandomString({ length: 100, type: 'url-safe' })
var generatedToken = cryptoRandomString({ length: 100, type: 'url-safe' })
interface ResponseData {
  error?: string;
  msg?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
    console.log("Getting new Payment..")
    if (req.body.type === "validation.webhook") {
        console.log("Validation Passed..")
        return res.status(200).json(req.body.id);
    }
    if (req.body.type === "payment.completed") {
        req.body.subject.products.forEach(async (product: any) => {
            if (product.name === "TPanel") {
                var testtoken = await User.findOne({ connection_token: generatedToken });
                var testpublic_token = await User.findOne({ public_token: publicGeneratedToken });
                while (testtoken || testpublic_token) {
                    generatedToken = await cryptoRandomString({ length: 100, type: 'url-safe' })
                    publicGeneratedToken = await cryptoRandomString({ length: 100, type: 'url-safe' })
                    testpublic_token = await User.findOne({ public_token: publicGeneratedToken });
                    testtoken = await User.findOne({ connection_token: generatedToken });
                }
                await dbConnect();
                const client = await clientPromise;
                const newUser = new User({
                    name: req.body.subject.first_name + " " + req.body.subject.last_name,
                    email: req.body.subject.email,
                    username: req.body.subject.username.username,
                    hashedPassword: null,
                    isAdmin: true,
                    createdAt: new Date(),
                    connection_token: generatedToken,
                    public_token: publicGeneratedToken,
                    role: "superuser",
                    accoutType: "premium",
                });
                await newUser
                .save()
                .then(() => {
                  // send a success response to the client
                  res.status(200).json({ msg: "Successfuly created new User: " + newUser });
              
                  // log a message to the console
                  console.log("User Created");
              
                  // close the database client
                  client.close();
                })
                .catch((err: string) => {
                  // log an error message to the console
                  console.log("Error on '/api/register'" + err);
              
                  // send an error response to the client
                  res.status(400).json({ msg: "Error..." });
              
                  // close the database client
                  client.close();
                });
            }
        });
    }
    return res.status(200).json({ msg: "Response for Tebex" })
}