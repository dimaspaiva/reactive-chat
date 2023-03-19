import { Id } from "react-toastify"
import { API_ENDPOINT, postCallToAPI } from "./fetchData"

const mockedFetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  }),
)
global.fetch = mockedFetch as jest.Mock

const mockedBody = { name: 'testing name', document: 'testing-document' }
const mockedPath = 'test'
const mockedToastId: Id = 'toast-fake-id'
const mockedFetchOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(mockedBody)
}
const apiExpectedCalledURL = `${API_ENDPOINT}${mockedPath}`

describe('api', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should call fetch with POST method, right args and receive a response', async () => {
    const fakeResponse = { result: 'success' }
    mockedFetch.mockResolvedValueOnce(Promise.resolve({
      json: () => Promise.resolve(fakeResponse),
    }))

    const response = await postCallToAPI(mockedBody, mockedPath, mockedToastId)

    expect(mockedFetch).toBeCalledWith(apiExpectedCalledURL, mockedFetchOptions)
    expect(response).toEqual(fakeResponse)
  })

  it('should call toas with error when fetch receive a message on body', async () => {
    const errorMessage = 'ERROR TEST MESSAGE'
    mockedFetch.mockReturnValueOnce(Promise.resolve({
      json: () => Promise.resolve({ message: errorMessage }),
    }))

    const response = await postCallToAPI(mockedBody, mockedPath, mockedToastId)
    expect(response).toEqual({ message: errorMessage })
  })

  it('should not throw when fetch throws', async () => {
    mockedFetch.mockRejectedValueOnce('Internal server error')

    const response = await postCallToAPI(mockedBody, mockedPath, mockedToastId)
    expect(response).toBeUndefined()
  })
})
