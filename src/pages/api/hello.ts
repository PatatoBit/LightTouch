import nextConnect from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";
import middleware from "../../middlewares/middleware";

const handler = nextConnect();
handler.use(middleware);

handler.get(async (req: NextApiRequest, res: NextApiResponse) => {
	return res.status(200).json({ name: "John Doe" });
});

export default handler;
