import cryptoRandomString from "crypto-random-string";
import type { NextApiRequest, NextApiResponse } from "next";
import User from "../../../model/User";
var publicGeneratedToken = cryptoRandomString({ length: 20, type: 'url-safe' })
var generatedToken = cryptoRandomString({ length: 20, type: 'url-safe' })
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
                const testtoken = await User.findOne({ connection_token: generatedToken });
                const testpublic_token = await User.findOne({ public_token: publicGeneratedToken });
                while (testtoken || testpublic_token) {
                    generatedToken = await cryptoRandomString({ length: 20, type: 'url-safe' })
                    publicGeneratedToken = await cryptoRandomString({ length: 20, type: 'url-safe' })
                  }
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
                });
                newUser
                    .save()
                    .then(() =>
                        res.status(200).json({ msg: "Successfuly created new User: " + newUser }),
                        console.log("User Created")
                    )
                    .catch((err: string) =>
                        console.log("Error on '/api/register'" + err)
                    );
            }
        });
    }
    return res.status(200).json({ msg: "Response for Tebex" })
}