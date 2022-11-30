import * as React from 'react'
import styled from 'styled-components'
import TransactionItem from './item'

import type { Transaction } from '../../types'

type Props = {
  transactions: Transaction[]
}

const StyledRoot = styled.div`
  background-color: #1E1E27;
  border-radius: 8px;

  * + & {
    margin-top: 24px;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0px;
    min-width: 100%;
  }

  tr {
    vertical-align: top;
  }

  td {
    padding: 12px;
  }

  th {
    color: #88869F;
    border-bottom: 1px solid #323241;
    padding: 12px;
    text-align: left;
    font-weight: 400;
  }

  .transaction-detail {
    display: flex;
  }

  .transaction-description {
    margin-left: 12px;
  }
`

export default function Transactions(props: Props): React.ReactElement {
  const { transactions } = props

  return (
    <StyledRoot>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        {transactions.map(function (transaction) {
          return <TransactionItem transaction={transaction} />
        })}
      </table>
    </StyledRoot>
  )
}
