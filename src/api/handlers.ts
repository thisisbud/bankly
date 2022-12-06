import { rest } from "msw";
import { accounts } from "./data/accounts";
import { transactions } from "./data/transactions";

const duration = process.env.NODE_ENV === "test" ? 0 : 2000;

export const handlers = [
  rest.get("/api/accounts", (req, res, ctx) =>
    res(ctx.delay(duration), ctx.status(200), ctx.json(accounts))
  ),
  rest.get("/api/transactions", (req, res, ctx) =>
    res(ctx.delay(duration), ctx.status(200), ctx.json(transactions))
  ),
];
