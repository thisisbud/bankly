import * as React from 'react'
import styled from 'styled-components'
import AccountItem from './item'

import type { Account } from '../../types'

type Props = {
  accounts: Account[],
  id?: string,
}

const StyledRoot = styled.div`
  display: flex;
  margin-bottom: 48px;

  .account {
    background: #14141A;
    padding: 24px;
    min-width: 252px;

    + .account {
      margin-left: 24px;
    }
  }

  .total {
    color: #88869F;
    margin-bottom: 8px;
  }
`

export default function Accounts(props: Props): React.ReactElement {
  const { id, accounts } = props

  return (
    <StyledRoot id={id}>
      {accounts.map(function (account, index) {
        return <AccountItem key={index} account={account} />
      })}
    </StyledRoot>
  )
}
