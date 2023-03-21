import request from 'supertest'
import { join } from 'path'

import app from '../src/config/app'


jest.mock('../src/config/configUtils', () => ({
  getPublicFolderPath: () => `${__dirname}/__mocks__/public/`
}))

describe('server', () => {
  it('should return the home page', async () => {
    const response = await request(app).get('/')

    expect(response.status).toEqual(200)
    expect(response.headers['content-type']).toEqual('text/html; charset=UTF-8')
    expect(response.text.match('<title>Reactive Chat</title>')).toBeTruthy()
  })
})
