import * as React from 'react'
import Constrictor from '../../components/constrictor'
import Tabs from '../../components/tabs'
import Tab from '../../components/tabs/tab'
import Transactions from '../../components/transactions'
import { useFetch } from '../../hooks/use-fetch'


export default function Account(): React.ReactElement {
  const [activeTab, setActiveTab] = React.useState('income')
  const { busy, data: { transactions } } = useFetch<{ transactions: any }>(
    'https://run.mocky.io/v3/1050f5b8-aef1-4f7a-a1cd-9ddcd36c9006'
  )

  function onTabChange(e: React.MouseEvent<HTMLButtonElement>) {
    const { value } = e.currentTarget
    setActiveTab(value)
  }

  return (
    <Constrictor>
      {busy ? 'Loading...' : (
        <>
          <Tabs activeTab={activeTab} onChange={onTabChange}>
            <Tab value='income'>Income</Tab>
            <Tab value='expenses'>Exenses</Tab>
          </Tabs>
          <Transactions transactions={transactions} />
        </>
      )}
    </Constrictor>
  )
}
