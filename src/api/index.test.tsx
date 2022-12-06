import { accounts } from "./data/accounts";
import { transactions } from "./data/transactions";

describe("/api/", () => {
  test("/accounts", async () => {
    const response = await fetch("/api/accounts");

    expect(await response.json()).toEqual(accounts);
  });

  test("/transactions", async () => {
    const response = await fetch("/api/transactions");

    expect(await response.json()).toEqual(transactions);
  });
});
