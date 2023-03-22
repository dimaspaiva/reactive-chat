import { appendAction, generateMessage, generateTree, selectOption, updateOptionByIndex } from "../../src/chat/decisionTree"

describe('Decision tree - reset password', () => {
  const textTitle = 'Testing tree'
  const options = ['Option 1', 'Option 2', 'Option 3']

  it('should generate a tree with 3 options', () => {
    const testTree = generateTree(textTitle, options)

    expect(testTree.text).toEqual(textTitle)
    expect(testTree.options).toHaveLength(3)
    options.forEach((option) => {
      expect(testTree.options
        .map(({ text }) => text)
        .includes(option)
      ).toBeTruthy()
    })
  })

  it('should generate a tree with 3 options', () => {
    const testTree = generateTree(textTitle, options)

    const message = generateMessage(testTree)

    expect(message.match(textTitle)).toBeTruthy()
    expect(message.match(options[0])).toBeTruthy()
    expect(message.match(options[1])).toBeTruthy()
    expect(message.match(options[2])).toBeTruthy()
  })

  it('should update a tree option adding more options', () => {
    const testTree = generateTree(textTitle, options)

    const optionOneNewOptions = ['option 1.1', 'option 1.2']

    updateOptionByIndex(testTree, 0, optionOneNewOptions)

    const message = generateMessage(testTree.options[0])

    expect(message.match(options[0])).toBeTruthy()
    optionOneNewOptions.forEach((option) => {
      expect(message.match(option)).toBeTruthy()
    })
  })

  it('should return a new message when user select an option', () => {
    const testTree = generateTree(textTitle, options)

    const secondOptionsNewOptions = ['Option 2.1', 'Option 2.2']

    updateOptionByIndex(testTree, 1, secondOptionsNewOptions)

    const selectedOption = selectOption(testTree, 1)
    const message = generateMessage(selectedOption)

    expect(message.match(options[1])).toBeTruthy()
    expect(message.match(secondOptionsNewOptions[2])).toBeTruthy()
    expect(message.match(secondOptionsNewOptions[2])).toBeTruthy()
  })

  it('should execute a last option action', () => {
    const testTree = generateTree(textTitle, options)
    const spyAction = jest.fn().mockReturnValue('test')

    appendAction(testTree.options[2], spyAction)

    const selectedOption = selectOption(testTree, 2)
    const response = generateMessage(selectedOption)

    expect(spyAction).toBeCalled()
    expect(response).toEqual('test')
  })
})
