import * as React from 'react'
import Accounts from '../../components/accounts'
import Constrictor from '../../components/constrictor'
import Tabs from '../../components/tabs'
import Tab from '../../components/tabs/tab'
import Transactions from '../../components/transactions'
import { useFetchAccounts, useFetchTransactions } from './hooks'


export default function Home(): React.ReactElement {
  const [activeTab, setActiveTab] = React.useState('expenses')
  const { busy: busyFetchingAccounts, data: { accounts } } = useFetchAccounts()
  const { busy: busyFetchingTransactions, data: { transactions } } = useFetchTransactions()

  function onTabChange(e: React.MouseEvent<HTMLButtonElement>) {
    const { value } = e.currentTarget

    setActiveTab(value)
  }

  return (
    <>
      {(busyFetchingAccounts || busyFetchingTransactions) ? 'Loading...' : (
        <>
          <h1>Your accounts</h1>
          <Accounts accounts={accounts} />
          <h1>Transaction history</h1>
          <Tabs activeTab={activeTab} onChange={onTabChange}>
            <Tab value='expenses'>Expenses</Tab>
            <Tab value='income'>Income</Tab>
          </Tabs>
          <Transactions transactions={transactions} />
        </>
      )}
    </>
  )
}
