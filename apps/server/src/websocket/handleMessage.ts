import { generateMessage, OptionLeaf, selectOption } from "../chat/decisionTree"

export type HandleMessageReturn = {
  selectedOption: OptionLeaf,
  response: string
}

const generateErrorResponse = (response: string): HandleMessageReturn => {
  return {
    response,
    selectedOption: null
  }
}

const absentMessage = 'Option does not exist'

export const handleMessage = (message: string, decisionTree: OptionLeaf): HandleMessageReturn => {
  if (!message) {
    return generateErrorResponse('Something went wrog')
  }

  const optionNumber = Number(message)

  if (isNaN(optionNumber)) {
    return generateErrorResponse('Invalid message for this text')
  }

  const selectedOption = selectOption(decisionTree, optionNumber)
  if (!selectedOption) {
    return generateErrorResponse(absentMessage)
  }
  const response = generateMessage(selectedOption)

  return { selectedOption, response }
}
