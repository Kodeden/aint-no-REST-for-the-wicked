import createServer from "./src/utils/server.js";
import 'dotenv/config';
import { userRouter } from "./src/routes/userRoutes.js";
import { commentRouter } from "./src/routes/commentRoutes.js";

const app = createServer();
const port = 3000;

app.listen(port, () => console.log(`App running on Port: ${port}!`));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(userRouter);
