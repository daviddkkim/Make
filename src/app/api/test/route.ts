import type { NextApiRequest, NextApiResponse } from "next";


export async function GET(req: NextApiRequest, res: NextApiResponse) {
    console.log(req.headers)
    const token = req.headers.authorization;
   console.log(token);
    return Response.json({ token })
  }