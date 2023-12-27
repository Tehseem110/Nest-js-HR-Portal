// src/app/api/user/person-Details/routes.ts
import { NextApiRequest, NextApiResponse } from 'next';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.headers)
   console.log(req.body)
    // const { name, fathername, image } = req.body;
    // console.log(name, fathername, image);

    // Perform any necessary operations with the data
    // For example, you could save this data to a database

    // res.status(200).json({ message: 'Person details API route reached successfully' });

}
