import { act, render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import renderer from 'react-test-renderer';
import * as React from 'react'
import Home from '../';

describe('Home component', () => {

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

  const mockTransactions = [
    {
      "id": "1234",
      "date": "2022-06-22",
      "description": "Foo",
      "category": "income",
      "amount": {
        "value": 510.55,
        "currency_iso": "GBP"
      }
    },
    {
      "id": "5678",
      "date": "2022-06-24",
      "description": "Bar",
      "category": "shopping",
      "amount": {
        "value": -20.25,
        "currency_iso": "EUR"
      }
    },
  ]

  beforeEach(() => {
    window.fetch = jest.fn()
      .mockResolvedValueOnce({
        json: () => new Promise((resolve) => {
          resolve({
            accounts: mockAccounts,
          })
        }),
      })
      .mockResolvedValueOnce({
        json: () => new Promise((resolve) => {
          resolve({
            transactions: mockTransactions,
          })
        }),
      })
  })

  test('should render and match the snapshot', () => {
    const output = renderer.create(<Home/>)

    expect(output).toMatchSnapshot();
  });

  test('should fetch accounts and transactions on page load', async () => {
    await act(async () => {
      render(<Home />)
    })

    expect(window.fetch).toHaveBeenNthCalledWith(1, 'http://run.mocky.io/v3/727c3256-0e79-4087-84cf-b7d23fca1cad')
    expect(window.fetch).toHaveBeenNthCalledWith(2, 'http://run.mocky.io/v3/378f2c5c-3b96-4de4-ba6e-8efd0c1d1a87')
    expect(window.fetch).toHaveBeenCalledTimes(2)
  });
});
