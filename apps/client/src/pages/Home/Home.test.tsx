import { fireEvent, render } from "@testing-library/react"
import React from "react"
import * as apiFetchData from '../../api/fetchData'

import Home from "."


describe('[Page] Home', () => {
  it('should render home page', () => {
    const { getByTestId } = render(<Home />)

    expect(getByTestId('name')).toBeTruthy()
    expect(getByTestId('document')).toBeTruthy()
    expect(getByTestId('submit-form')).toBeTruthy()
  })

  it('should render home page and submit button is disabled', () => {
    const { getByTestId } = render(<Home />)

    const submitButton = getByTestId('submit-form') as HTMLButtonElement
    expect(submitButton.disabled).toBeTruthy()
  })

  it('should render home page and submit button is enable if all inputs have value', () => {
    const testNameValue = 'test name'
    const testDocumentValue = 'testDocument'

    const { getByTestId } = render(<Home />)

    const submitButton = getByTestId('submit-form') as HTMLButtonElement
    expect(submitButton.disabled).toBeTruthy()

    const nameInput = getByTestId('name')
    const documentInput = getByTestId('document')

    fireEvent.change(nameInput, { target: { value: testNameValue } })
    expect(submitButton.disabled).toBeTruthy()

    fireEvent.change(documentInput, { target: { value: testDocumentValue } })
    expect(submitButton.disabled).toBeFalsy()

    fireEvent.change(nameInput, { target: { value: '' } })
    expect(submitButton.disabled).toBeTruthy()
  })

  it('should render home page and submit button is enable if all inputs have value', () => {
    const spyPostCallToAPI = jest.spyOn(apiFetchData, 'postCallToAPI')
    const testNameValue = 'test name'
    const testDocumentValue = 'testDocument'
    spyPostCallToAPI.mockImplementationOnce(() => Promise.resolve({}))

    const { getByTestId } = render(<Home />)
    const submitButton = getByTestId('submit-form') as HTMLButtonElement
    const nameInput = getByTestId('name')
    const documentInput = getByTestId('document')

    fireEvent.change(nameInput, { target: { value: testNameValue } })
    fireEvent.change(documentInput, { target: { value: testDocumentValue } })
    expect(submitButton.disabled).toBeFalsy()

    fireEvent.click(submitButton)
    expect(spyPostCallToAPI).toBeCalled()
  })
})
