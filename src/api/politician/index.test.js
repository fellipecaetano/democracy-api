import request from 'supertest-as-promised'
import express from '../../services/express'
import routes, { Politician } from '.'

const app = () => express(routes)

let politician

beforeEach(async () => {
  politician = await Politician.create({})
})

test('POST /politicians 201', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ name: 'test', photoUrl: 'test', partyAcronym: 'test', federativeUnit: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.photoUrl).toEqual('test')
  expect(body.partyAcronym).toEqual('test')
  expect(body.federativeUnit).toEqual('test')
})

test('GET /politicians 200', async () => {
  const { status, body } = await request(app())
    .get('/')
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /politicians/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`/${politician.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(politician.id)
})

test('GET /politicians/:id 404', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /politicians/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`/${politician.id}`)
    .send({ name: 'test', photoUrl: 'test', partyAcronym: 'test', federativeUnit: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(politician.id)
  expect(body.name).toEqual('test')
  expect(body.photoUrl).toEqual('test')
  expect(body.partyAcronym).toEqual('test')
  expect(body.federativeUnit).toEqual('test')
})

test('PUT /politicians/:id 404', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ name: 'test', photoUrl: 'test', partyAcronym: 'test', federativeUnit: 'test' })
  expect(status).toBe(404)
})

test('DELETE /politicians/:id 204', async () => {
  const { status } = await request(app())
    .delete(`/${politician.id}`)
  expect(status).toBe(204)
})

test('DELETE /politicians/:id 404', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
  expect(status).toBe(404)
})
