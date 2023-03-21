import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import MessageInput from '.'

import { createSocket } from '../../setup/socket'
import { testUser } from '../../../__mocks__/userMock'

const mockAppendMessage = jest.fn()

const socket = createSocket(testUser)
const spySocketEmit = jest.spyOn(socket, 'emit').mockImplementation(jest.fn())

describe('Message input', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render message input component', () => {
    const { getByTestId } = render(<MessageInput socket={socket} appendMessage={mockAppendMessage} />)

    expect(getByTestId('message-input')).toBeTruthy()
    expect(getByTestId('send-message')).toBeTruthy()
  })

  it('should render message input component', () => {
    const testMessage = 'testing message input'
    const { getByTestId } = render(<MessageInput socket={socket} appendMessage={mockAppendMessage} />)

    const messageInput = getByTestId('message-input')
    const sendMessageButton = getByTestId('send-message')

    fireEvent.change(messageInput, { target: { value: testMessage } })
    fireEvent.submit(sendMessageButton)

    expect(mockAppendMessage).toBeCalledWith(testMessage)
    expect(spySocketEmit).toBeCalledWith('message', testMessage)
  })


  it('send button should be disabled when there is no message', () => {
    const { getByTestId } = render(<MessageInput socket={socket} appendMessage={mockAppendMessage} />)

    const sendMessageButton = getByTestId('send-message') as HTMLButtonElement

    expect(sendMessageButton.disabled).toBeTruthy()

    fireEvent.click(sendMessageButton)

    expect(mockAppendMessage).not.toBeCalled()
    expect(spySocketEmit).not.toBeCalled()
  })
})
