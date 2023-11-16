import { Hono, Context } from "hono";

const app = new Hono();

app.get("/", (c: Context) => c.json("list of stocks"));

export default app;
