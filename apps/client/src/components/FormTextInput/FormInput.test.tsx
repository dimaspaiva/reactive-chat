import React from "react"
import { fireEvent, render } from '@testing-library/react'
import FormTextInput, { FormTextInputProps } from "."

describe('Form text input', () => {
  it('should render an text input', () => {
    const testProps: FormTextInputProps = {
      inputName: 'test',
      onChange: () => { },
      title: 'Test',
    }
    const { getByText, getByTestId } = render(<FormTextInput {...testProps} />)
    expect(getByText(testProps.title)).toBeTruthy()
    expect(getByTestId(testProps.inputName)).toBeTruthy()
  })


  it('should run onChange function when input receive a new value', () => {
    const mockedOnChange = jest.fn()
    const testProps: FormTextInputProps = {
      inputName: 'test',
      onChange: mockedOnChange,
      title: 'Test',
    }
    const testingValue = 'test text'

    const { getByTestId } = render(<FormTextInput {...testProps} />)
    const input = getByTestId(testProps.inputName)
    fireEvent.change(input, { target: { value: testingValue } })
    expect(mockedOnChange).toBeCalledWith(testingValue)
  })
})
