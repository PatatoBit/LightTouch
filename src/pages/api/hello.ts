import nextConnect from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = nextConnect();

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {});

export default handler;
