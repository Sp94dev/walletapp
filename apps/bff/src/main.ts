import { Hono } from "https://deno.land/x/hono@v3.10.1/mod.ts";
import stocks from "./features/stocks/stocks.ts";

const app = new Hono();

app.route("/stocks", stocks);

Deno.serve({ port: 3000 }, app.fetch);
