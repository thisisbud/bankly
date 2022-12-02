import * as React from 'react'
import TestRenderer from 'react-test-renderer'
import ShallowRenderer from 'react-test-renderer/shallow'
import Tabs from '../';
import Tab from '../tab';

import type { ReactTestRendererJSON } from 'react-test-renderer';

const renderer = ShallowRenderer.createRenderer()

describe('Account component', () => {
  test('should render and match the snapshot', () => {
    const mockOnChange = jest.fn()

    renderer.render(
      <Tabs activeTab='foo' onChange={mockOnChange}>
        <Tab value='foo'>Foo</Tab>
        <Tab value='bar'>Bar</Tab>
      </Tabs>
    )
    const output = renderer.getRenderOutput()

    expect(output).toMatchSnapshot();
  });

  test('should render as an unordered list', function () {
    const mockOnChange = jest.fn()

    const testRenderer = TestRenderer.create(
      <Tabs activeTab='foo' onChange={mockOnChange}>
        <Tab value='foo'>Foo</Tab>
        <Tab value='bar'>Bar</Tab>
      </Tabs>,
    )
    const output = testRenderer.toJSON() as ReactTestRendererJSON

    expect(output.type).toBe('ul')
  })
});
