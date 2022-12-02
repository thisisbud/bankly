import * as React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import Accounts from '../';

const renderer = ShallowRenderer.createRenderer()

describe('Account component', () => {

  const mockAccounts = [
    {
      account_id: '1234',
      balance: {
        amount: {
          currency: 'GBP',
          value: 27800.10
        }
      }
    },
    {
      account_id: '5678',
      balance: {
        amount: {
          currency: 'EUR',
          value: 2000.50
        }
      }
    }
  ]

  test('should render and match the snapshot', () => {
    renderer.render(<Accounts accounts={mockAccounts}/>)
    const output = renderer.getRenderOutput()

    expect(output).toMatchSnapshot();
  });
});
