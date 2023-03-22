import { appendAction, generateMessage, generateTree } from "./decisionTree"

const mainActions = [
  'Account Balance',
  'Cancel my Credit Card',
  'Get my IBAN',
  'Do a transfer'
]

const generateRandomBalance = (): string => {
  const amount = (Math.random() * 1000).toFixed(2)
  return `${amount} €`
}

const cancelCreditCard = (): string => {
  return `Credit card number 0000 0000 0000 cancelled`
}

const getIBAN = (): string => {
  return `Your IBAN is PT97003506518613817511239`
}

const makeTransfer = (): string => {
  return 'Function unavailable for your region'
}

export const mainDecisionTree = generateTree('Account services', mainActions)

appendAction(mainDecisionTree.options[0], generateRandomBalance)
appendAction(mainDecisionTree.options[1], cancelCreditCard)
appendAction(mainDecisionTree.options[2], getIBAN)
appendAction(mainDecisionTree.options[3], makeTransfer)

const firstMessage = generateMessage(mainDecisionTree)

export const buildSalutation = (name: string) => {
  return `Hi ${name} welcome to reactive chat!\nHow can we help you today?\n${firstMessage}`
}
