import * as Tabs from "@radix-ui/react-tabs";
import { transactions } from "../../api/data/transactions";
import "./index.css";
import { Transaction } from "./item";

const Expenses = () => {
  return (
    <Tabs.Content className="TabsContent" value="expenses">
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <Transaction transaction={transaction} key={transaction.id} />
          ))}
        </tbody>
      </table>
    </Tabs.Content>
  );
};

const Income = () => {
  return (
    <Tabs.Content className="TabsContent" value="income">
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <Transaction transaction={transaction} key={transaction.id} />
          ))}
        </tbody>
      </table>
    </Tabs.Content>
  );
};

export const TransactionHistory = () => {
  return (
    <>
      <h1 className="align-left">Transaction History</h1>
      <Tabs.Root defaultValue="expenses" className="flow">
        <Tabs.List className="tabs__list" aria-label="Filter your transactions">
          <Tabs.Trigger className="TabsTrigger" value="expenses">
            Expenses
          </Tabs.Trigger>
          <Tabs.Trigger className="TabsTrigger" value="income">
            Income
          </Tabs.Trigger>
        </Tabs.List>
        <Expenses />
        <Income />
      </Tabs.Root>
    </>
  );
};
