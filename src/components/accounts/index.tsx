import * as React from 'react'
import styled from 'styled-components'
import AccountItem from './item'

import type { Account } from '../../types'

type Props = {
  accounts: Account[]
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

  .currency {
    color: #88869F;
    margin-bottom: 8px;
  }

`

export default function Accounts(props: Props): React.ReactElement {
  const { accounts } = props

  return (
    <StyledRoot>
      {accounts.map(function (account) {
        return <AccountItem account={account} />
      })}
    </StyledRoot>
  )
}
