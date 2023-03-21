import React, { FormEvent, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

import { ErrorResponse, PostCallReturn, postCallToAPI } from "../../api/fetchData"
import FormTextInput from "../../components/FormTextInput"
import UserContext, { User } from "../../contexts/UserContext"

import './style.css'

const formInputs = [
  { name: 'name', title: 'Name' },
  { name: 'document', title: 'Document' }
]

const Home = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<{ [key: string]: string }>({})
  const { setUser, user } = useContext(UserContext)

  const disableButton = () => {
    const hasSameAmountAsInput = Object.keys(formData).length === formInputs.length
    const hasEnoughtValueOnInput = Object.values(formData).filter((value) => value.length < 3).length === 0
    return !(hasSameAmountAsInput && hasEnoughtValueOnInput)
  }

  const updateFormData = (inputName: string): (value: string) => void => {
    return value => setFormData(oldState => ({ ...oldState, [inputName]: value }))
  }

  const createUser = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()

    const toastLoadingId = toast('Checking your data...', {
      type: 'info',
      hideProgressBar: true,
      isLoading: true
    })
    const response = await postCallToAPI<{ user: User }>(formData, 'user', toastLoadingId)
    handleAPIResponse(response)
  }

  const handleAPIResponse = (response: { user: User } | ErrorResponse): void => {
    if ('user' in response) {
      setUser(response.user)
    }
  }

  useEffect(() => {
    if (user) {
      navigate('/chat')
    }
  }, [user])

  return (
    <div className="container" data-testid="page-home">
      <form action="submit" className="home-form" onSubmit={createUser}>
        {formInputs.map((input) =>
          <FormTextInput
            key={input.name}
            inputName={input.name}
            title={input.title}
            onChange={updateFormData(input.name)}
          />
        )}
        <button
          type="submit"
          className="home-form_submit"
          disabled={disableButton()}
          data-testid="submit-form"
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default Home
