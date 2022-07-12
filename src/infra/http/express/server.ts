import express, { Request, Response, NextFunction } from "express";
import homeRouter from "./routes";
import userRoutes from "./routes/userRoutes";

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log("passou aqui");
  next();
});

app.use("/", homeRouter);

app.use("/users", userRoutes);

app.listen(port, () => {
  console.log("servidor rodando");
});
