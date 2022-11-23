import * as React from 'react'
import styled from 'styled-components'
import TransactionItem from './item'

type Props = {
  transactions: any[]
}

const StyledTransactions = styled.table`
  border-collapse: collapse;
  border-spacing: 0px;
  min-width: 100%;

  td {
    padding: 8px 0;
  }

  .transaction-detail {
    display: flex;
  }

  .transaction-description {
    margin-left: 12px;
  }

  .transaction-amount {
    text-align: right;
  }
`

export default function Transactions(props: Props): React.ReactElement {
  const { transactions } = props

  return (
    <StyledTransactions>
      {transactions.map(function (transaction) {
        return <TransactionItem key={transaction.id} transaction={transaction} />
      })}
    </StyledTransactions>
  )
}
