import request from 'supertest'

import app from '../src/config/app'

describe('server', () => {
  it('should return the home page', async () => {
    const response = await request(app).get('/')

    expect(response.status).toEqual(200)
    expect(response.headers['content-type']).toEqual('text/html; charset=UTF-8')
    expect(response.text.match('<title>Reactive Chat</title>')).toBeTruthy()
  })
})
