import * as React from 'react'

import type { Account, Transaction } from '../../types'

/**
 * Use a hook to retrieve the accounts.
 *
 * @returns The accounts
 */
export function useFetchAccounts(): {
  data: {
    accounts?: Account[],
  },
  busy: boolean,
  error?: Error,
} {
  const [state, setState] = React.useState({
    busy: true,
    data: {},
  })

  React.useEffect(() => {
    fetch('http://run.mocky.io/v3/727c3256-0e79-4087-84cf-b7d23fca1cad')
      .then(async (res) => {
        return await res.json()
      })
      .then((data) => {
        setState({
          busy: false,
          data: data,
        })
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return state
}

/**
 * Use a hook to retrieve the transactions.
 *
 * @returns The transactions
 */
export function useFetchTransactions(): {
  data: {
    transactions?: Transaction[],
  },
  busy: boolean,
  error?: Error,
} {
  const [state, setState] = React.useState({
    busy: true,
    data: {},
  })

  React.useEffect(() => {
    fetch('http://run.mocky.io/v3/378f2c5c-3b96-4de4-ba6e-8efd0c1d1a87')
      .then(async (res) => {
        return await res.json()
      })
      .then((data) => {
        setState({
          busy: false,
          data: data,
        })
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return state
}
