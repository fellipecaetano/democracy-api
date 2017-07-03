import { Politician } from '.'

let politician

beforeEach(async () => {
  politician = await Politician.create({ name: 'test', photoUrl: 'test', partyAcronym: 'test', federativeUnit: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = politician.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(politician.id)
    expect(view.name).toBe(politician.name)
    expect(view.photoUrl).toBe(politician.photoUrl)
    expect(view.partyAcronym).toBe(politician.partyAcronym)
    expect(view.federativeUnit).toBe(politician.federativeUnit)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = politician.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(politician.id)
    expect(view.name).toBe(politician.name)
    expect(view.photoUrl).toBe(politician.photoUrl)
    expect(view.partyAcronym).toBe(politician.partyAcronym)
    expect(view.federativeUnit).toBe(politician.federativeUnit)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
