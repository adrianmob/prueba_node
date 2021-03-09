import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import transRoutes from "./routes/transferencia.routes";
import cors from "cors";

const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.json("welcome");
});

app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/holder", userRoutes);
app.use("/api/transferencia", transRoutes);

export default app;
