import request from 'supertest'

import app from '../../src/config/app'
import { env } from '../../src/config/env'
import { MongoHelper } from '../../src/database/mongo'

describe('/api/user', () => {
  beforeAll(async () => {
    await MongoHelper.connect(env.mongoDbURL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  it('should return a new user', async () => {
    const testUserData = {
      name: 'test',
      document: '123456'
    }

    const response = await request(app).post('/api/user').send(testUserData)

    expect(response.status).toBe(201)
    expect(response.body.user).toHaveProperty('id')
    expect(response.body.user.name).toEqual(testUserData.name)
    expect(response.body.user.document).toEqual(testUserData.document)
  })

  it('should return a error response when user has no name', async () => {
    const testUserData = {
      document: '123456'
    }

    const response = await request(app).post('/api/user').send(testUserData)

    expect(response.status).toBe(400)
    expect(response.body.message).toBe('missing user name')
  })

  it('should return a error response when user has no document', async () => {
    const testUserData = {
      name: 'test'
    }

    const response = await request(app).post('/api/user').send(testUserData)

    expect(response.status).toBe(400)
    expect(response.body.message).toBe('missing user document')
  })

  it('should return a error response createUser throws', async () => {
    const testUserData = {
      name: 'test',
      document: '123456'
    }

    jest.spyOn(MongoHelper, 'add').mockRejectedValueOnce('unexpectedError')

    const response = await request(app).post('/api/user').send(testUserData)

    expect(response.status).toBe(500)
    expect(response.body.message).toBe('internal server error')
  })
})
