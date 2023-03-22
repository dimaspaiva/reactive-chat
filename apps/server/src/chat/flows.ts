import { generateMessage, generateTree } from "./decisionTree"

const mainActions = [
  'Account Balance',
  'Cancel my Credit Card',
  'Get my IBAN',
  'Do a transfer'
]

const mainDecisionTree = generateTree('Account services', mainActions)
const firstMessage = generateMessage(mainDecisionTree)

export const buildSalutation = (name: string) => {
  return `Hi ${name} welcome to reactive chat!\nHow can we help you today?\n${firstMessage}`
}
