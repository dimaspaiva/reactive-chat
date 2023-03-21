import { Id, toast } from "react-toastify"

export type ErrorResponse = {
  message: string
}

export type PostCallReturn<T> = Promise<undefined | ErrorResponse | T>

export const API_ENDPOINT = 'http://localhost:8081/api/'

export const postCallToAPI = async <T>(body: unknown, path: string, toastId: Id): PostCallReturn<T> => {
  return await fetch(`${API_ENDPOINT}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
    .then((result) => result.json())
    .then((data) => {
      toast.dismiss(toastId)
      if (data.message) {
        toast(data.message, { type: 'error' })
        console.warn(data)
      }
      return data
    })
    .catch((err) => {
      toast.dismiss(toastId)
      toast('Unexpected error, try again.', { type: 'error' })
      console.error(err)
    })
}
