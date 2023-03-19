import { MongoClient } from "mongodb"
import { env } from "../../src/config/env"
import { MongoHelper } from "../../src/database/mongo"
import { storeUser } from "../../src/repositories/storeUser"

const name = 'testing'
const document = '123456'

describe('User repositorie', () => {
  beforeAll(async () => {
    await MongoHelper.connect(env.mongoDbURL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  it('should create an user given a name and identification', async () => {
    const user = await storeUser(name, document)

    expect(user).toHaveProperty('id')
    expect(user.name).toEqual(name)
    expect(user.document).toEqual(document)
  })

  it('should throw if mongodb throws', async () => {
    jest.spyOn(MongoHelper, 'add').mockRejectedValueOnce('unexpected error')

    await expect(storeUser(name, document)).rejects.toEqual('unexpected error')
  })

})
