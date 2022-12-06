import type { Account } from "../../../types";
import "./index.css";

type Props = {
  account: Account;
};

export const AccountItem = ({ account }: Props) => {
  return (
    <div className="account">
      <div className="total">Total {account.balance.amount.currency}</div>
      <h3>
        <strong>{account.balance.amount.value}</strong>
      </h3>
    </div>
  );
};
