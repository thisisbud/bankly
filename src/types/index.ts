export type Transaction = {
  id: string;
  date: string;
  description: string;
  category: string;
  amount: {
    value: number;
    currency_iso: string;
  };
}

export type Account = {
  id: string;
  balance: Balance;
}

interface Balance {
  amount: number;
  currency_iso: string;
}
