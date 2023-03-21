const spyNavigate = jest.fn()

import { render } from '@testing-library/react'
import React from 'react'
import { Socket } from 'socket.io-client'

import Chat from '.'
import { testUser } from '../../../__mocks__/userMock'

import { UserContextTestWrapper } from '../../contexts/testHelper'
import { User } from '../../contexts/UserContext'
import createSocket from '../../setup/socket'


jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => spyNavigate
}))

jest.mock('../../setup/socket', () =>
  () => ({
    connect: jest.fn(),
    on: jest.fn()
  }))

describe('[Page] Chat', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render chat page', () => {
    const { getByTestId } = render(
      <UserContextTestWrapper>
        <Chat />
      </UserContextTestWrapper>
    )

    expect(spyNavigate).toBeCalled()
    expect(getByTestId('page-chat')).toBeTruthy()
    expect(getByTestId('message-list')).toBeTruthy()
    expect(getByTestId('message-input')).toBeTruthy()
  })

  it('should no call navigate when has an user on context', () => {
    const testUser: User = {
      document: 'test-doc',
      name: 'test name',
      id: 'test-id'
    }

    render(
      <UserContextTestWrapper startUser={testUser}>
        <Chat />
      </UserContextTestWrapper>
    )

    expect(spyNavigate).not.toBeCalled()
  })
})
