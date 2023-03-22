export type OptionLeaf = {
  text: string
  options: OptionLeaf[]
}

export const generateTree = (mainOption: string, options?: string[]): OptionLeaf => {
  return {
    text: mainOption,
    options: options?.map((option) => generateTree(option))
  }
}

export const generateMessage = (option: OptionLeaf): string => {
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

export const selectOption = (mainOption: OptionLeaf, optionIndex: number): string => {
  const selectedOption = mainOption.options[optionIndex]
  return generateMessage(selectedOption)
}
