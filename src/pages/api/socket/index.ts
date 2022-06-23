import type { Request, Response } from "next";
import nextConnect from "next-connect";
import middleware from "../../../middlewares/middleware";

const handler = nextConnect();
handler.use(middleware);

handler.get(async (req: Request, res: Response) => {
	return res.status(200).json({ test: "test" });
});

export default handler;
