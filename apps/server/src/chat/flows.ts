import { User } from "../models/user"

const firstInterationOptions = [
  { action: 'block-card', text: '\\n0 - Block credit card' },
  { action: 'forgot-password', text: '\\n1 - Forgot my password' },
  { action: 'loan', text: '\\n2 - Request a loan' },
]

const buildSalutation = (name: string) => {
  return `Hi ${name} welcome to reactive chat!\n`
}

export const formatFirstMessage = (user: User) => {
  const salutation = buildSalutation(user.name)
  const optionsText = firstInterationOptions.map((option) => option.text).join('\n')
  return `${salutation} ${optionsText}`

}
