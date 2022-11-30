import * as React from 'react'

type Props = {
  account: any,
}

export default function AccountItem(props: Props): React.ReactElement {
  const { account } = props

  return (
    <div className='account'>
      <div className='currency'>
        {account.balance.amount.currency}
      </div>
      <h3><strong>{account.balance.amount.value}</strong></h3>
    </div>
  )
}
