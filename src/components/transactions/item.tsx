import * as React from 'react'
import Merchant from './merchant'

import type { Transaction } from '../../types'

type Props = {
  transaction: Transaction
}

export default function TransactionItem (props: Props): React.ReactElement {
  const { transaction } = props

  return (
    <tr>
      <td>
        <div className='transaction-detail'>
          <Merchant/>
          <div className='transaction-description'>
            {transaction.description}
            <div className='transaction-category'>{transaction.category}</div>
          </div>
        </div>
      </td>
      <td>
        <div>{transaction.date}</div>
      </td>
      <td className='transaction-amount'>
        <div className='amount'>{transaction.amount.value}</div>
      </td>
    </tr>
  )
}
