import { Router, Request, Response } from "express";

const homeRouter = Router();

homeRouter.get("/", (request: Request, response: Response) => {
  response.json({
    message: "escopo inicial",
  });
});

export default homeRouter;
