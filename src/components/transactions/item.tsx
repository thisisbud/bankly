import * as React from 'react'
import Avatar from '../avatar'

type Props = {
  transaction: any
}

export default function TransactionItem (props: Props): React.ReactElement {
  const { transaction } = props

  const currencyValue = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  }).format(transaction.amount.value);

  const dateValue = new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(transaction.date))

  return (
    <tr>
      <td>
        <div className='transaction-detail'>
          <Avatar/>
          <div className='transaction-description'>
            {transaction.description}
            <div>{dateValue}</div>
          </div>
        </div>
      </td>
      <td>
        <div className='transaction-category'>{transaction.category}</div>
      </td>
      <td className='transaction-amount'>
        <div className='amount'>{currencyValue}</div>
      </td>
    </tr>
  )
}
