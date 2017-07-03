import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Politician, { schema } from './model'

const router = new Router()
const { name, photoUrl, partyAcronym, federativeUnit } = schema.tree

/**
 * @api {post} /politicians Create politician
 * @apiName CreatePolitician
 * @apiGroup Politician
 * @apiParam name Politician's name.
 * @apiParam photoUrl Politician's photoUrl.
 * @apiParam partyAcronym Politician's partyAcronym.
 * @apiParam federativeUnit Politician's federativeUnit.
 * @apiSuccess {Object} politician Politician's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Politician not found.
 */
router.post('/',
  body({ name, photoUrl, partyAcronym, federativeUnit }),
  create)

/**
 * @api {get} /politicians Retrieve politicians
 * @apiName RetrievePoliticians
 * @apiGroup Politician
 * @apiUse listParams
 * @apiSuccess {Object[]} politicians List of politicians.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /politicians/:id Retrieve politician
 * @apiName RetrievePolitician
 * @apiGroup Politician
 * @apiSuccess {Object} politician Politician's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Politician not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /politicians/:id Update politician
 * @apiName UpdatePolitician
 * @apiGroup Politician
 * @apiParam name Politician's name.
 * @apiParam photoUrl Politician's photoUrl.
 * @apiParam partyAcronym Politician's partyAcronym.
 * @apiParam federativeUnit Politician's federativeUnit.
 * @apiSuccess {Object} politician Politician's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Politician not found.
 */
router.put('/:id',
  body({ name, photoUrl, partyAcronym, federativeUnit }),
  update)

/**
 * @api {delete} /politicians/:id Delete politician
 * @apiName DeletePolitician
 * @apiGroup Politician
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Politician not found.
 */
router.delete('/:id',
  destroy)

export default router
