import { render } from '@testing-library/react'
import React from 'react'
import Chat from '.'


jest.mock('../../socket', () => ({
  emit: jest.fn(),
  on: jest.fn()
}))

describe('[Page] Chat', () => {
  it('should render chat page', () => {
    const { getByTestId } = render(<Chat />)

    expect(getByTestId('page-chat')).toBeTruthy()
    expect(getByTestId('message-list')).toBeTruthy()
    expect(getByTestId('message-input')).toBeTruthy()
  })
})
