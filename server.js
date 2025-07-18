import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";
//configure env
dotenv.config();

//databse config
connectDB();

//rest object
const app = express();

//middelwares
// app.use(cors());
app.use(cors({
  origin: "https://online-art-gallery.vercel.app",
  credentials: true,
}));
app.use(express.json());
app.use(morgan("dev"));


//routes
app.use("/api/v1/auth", authRoutes);

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.NODE_ENV || "development"} mode on port ${PORT}`.bgCyan
      .white
  );
});
