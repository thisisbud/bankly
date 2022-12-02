import * as React from 'react'
import { fireEvent, render, screen } from "@testing-library/react";
import Tab from '../tab'

const mockContent = 'Foo bar'

describe('Tab component', () => {
  test("should render the correct text content", () => {
    render(
      <Tab isActive={false} value="foo-bar">{mockContent}</Tab>
    );

    screen.getByText(mockContent);
  })

  test('should call the onClick prop when clicked', () => {
    const mockOnClick = jest.fn()

    render(<Tab value='foo' onClick={mockOnClick}>Foo</Tab>)

    fireEvent.click(screen.getByText(/Foo/))
    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })
})
