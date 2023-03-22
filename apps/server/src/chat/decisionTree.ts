export type Action = () => string

export type OptionLeaf = {
  text: string
  options: OptionLeaf[],
  action?: () => string
}

export const generateTree = (mainOption: string, options?: string[], action?: Action): OptionLeaf => {
  return {
    text: mainOption,
    options: options?.map((option) => generateTree(option)),
    action
  }
}

export const generateMessage = (option: OptionLeaf): string => {
  if (!option.options || option.options.length === 0) {
    return option.action()
  }

  const options = option.options
    .map((value, index) => `${index} - ${value.text}`)
    .join('\n')

  return `${option.text}\n${options}`
}

export const updateOptionByIndex = (
  option: OptionLeaf,
  optionIndex: number,
  options: string[]
): void => {
  const selectedOption = option.options[optionIndex]
  selectedOption.options = options.map((option) => generateTree(option))
}

export const selectOption = (mainOption: OptionLeaf, optionIndex: number): OptionLeaf => {
  const selectedOption = mainOption.options[optionIndex]
  return selectedOption
}

export const appendAction = (option: OptionLeaf, action: () => string): void => {
  option.action = action
}
