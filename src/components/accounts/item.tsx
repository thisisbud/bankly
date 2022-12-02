import * as React from 'react'

import type { Account } from '../../types'

type Props = {
  account: Account,
}

export default function AccountItem(props: Props): React.ReactElement {
  const { account } = props

  return (
    <div id={account.account_id} className='account'>
      <div id={`total-${account.account_id}`} className='total'>
        Total {account.balance.amount.currency}
      </div>
      <h3 aria-labelledby={`total-${account.account_id}`}><strong>{account.balance.amount.value}</strong></h3>
    </div>
  )
}
