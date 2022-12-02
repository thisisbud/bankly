import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import ShallowRenderer from 'react-test-renderer/shallow'
import { render, screen } from "@testing-library/react";
import AccountItem from '../item';

import type { ReactTestRendererJSON } from 'react-test-renderer';
import type { Account } from '../../../types';

const renderer = ShallowRenderer.createRenderer()

describe('Account item component', () => {

  const mockAccount: Account = {
    account_id: '1234',
    balance: {
      amount: {
        currency: 'EUR',
        value: 2000.50
      }
    }
  }

  test('should render and match the snapshot', () => {
    renderer.render(<AccountItem account={mockAccount}/>)
    const output = TestRenderer.create(<AccountItem account={mockAccount}/>).toJSON()

    expect(output).toMatchSnapshot();
  });

  test('should render as an list item', function () {
    const testRenderer = TestRenderer.create(
      <AccountItem account={mockAccount}/>,
    )
    const output = testRenderer.toJSON() as ReactTestRendererJSON

    expect(output.type).toBe('li')
  })

  test('should render balance correctly', function () {
    render(<AccountItem account={mockAccount}/>)

    expect(screen.getByLabelText(/Total EUR/)).toHaveTextContent('€2,000.50')
  })
});
