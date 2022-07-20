import express, {json} from "express";
import cors from "cors";
import chalk from "chalk";
import "express-async-errors";
import dotenv from "dotenv";
import router from "./src/routes/index.js"
dotenv.config();

const app = express();

app.use(cors());
app.use(json());
app.use(router);

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(chalk.green(`Server is up in port ${port}`));
});