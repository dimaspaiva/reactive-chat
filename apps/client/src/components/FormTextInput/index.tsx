import React, { ChangeEvent } from "react"

import './style.css'

export type FormTextInputProps = {
  title: string
  inputName: string
  onChange: (value: string) => void
}

export const FormTextInput = (props: FormTextInputProps) => {
  const { title, inputName, onChange } = props

  const onChangeInputValue = (ev: ChangeEvent<HTMLInputElement>): void => {
    onChange(ev.target.value)
  }

  return (
    <div className="input-container">
      <label htmlFor={inputName} className="input-label">{title}</label>
      <input
        id={inputName}
        data-testid={inputName}
        type="text"
        className="input"
        onChange={onChangeInputValue}
      />
    </div>
  )
}

export default FormTextInput
