// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
var command1 = "initialize";
type Data = {};
const fs = require("fs");
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.query.key != "43223xrsadsa2") {
    res.status(400).json({ status: "Not Authorised" });
  }
  if (req.body === "") {
    console.log(command1);
    res.status(200).json({
      pendingCommands: {
        command1: command1,
      },
    });
    return;
  } else {
    console.log(req.body);
    fs.writeFileSync(`./json/players.json`, JSON.stringify(req.body));
    res.status(200).json({ status: "ok" });
    command1 = "waiting...";
  }
}
