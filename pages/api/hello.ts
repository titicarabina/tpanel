// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
type Data = {

}
const fs = require('fs');
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.body)
const data = fs.readFileSync('./json/players.json',
{encoding:'utf8', flag:'r'});
    res.status(200).json(data)
}