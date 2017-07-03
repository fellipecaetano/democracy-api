import _ from 'lodash'
import { success, notFound } from '../../services/response/'
import { Politician } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Politician.create(body)
    .then((politician) => politician.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Politician.find(query, select, cursor)
    .then((politicians) => politicians.map((politician) => politician.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Politician.findById(params.id)
    .then(notFound(res))
    .then((politician) => politician ? politician.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Politician.findById(params.id)
    .then(notFound(res))
    .then((politician) => politician ? _.merge(politician, body).save() : null)
    .then((politician) => politician ? politician.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Politician.findById(params.id)
    .then(notFound(res))
    .then((politician) => politician ? politician.remove() : null)
    .then(success(res, 204))
    .catch(next)
