import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '../../lib/mongodb'
import dbConnect from '../../utils/dbConnect'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    await dbConnect()
    const client = await clientPromise
    const db = client.db('tpanel')
    const collection = db.collection('servers')
}

