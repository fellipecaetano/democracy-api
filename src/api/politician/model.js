import mongoose, { Schema } from 'mongoose'

const politicianSchema = new Schema({
  name: {
    type: String
  },
  photoUrl: {
    type: String
  },
  partyAcronym: {
    type: String
  },
  federativeUnit: {
    type: String
  }
}, {
  timestamps: true
})

politicianSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      photoUrl: this.photoUrl,
      partyAcronym: this.partyAcronym,
      federativeUnit: this.federativeUnit,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Politician', politicianSchema)

export const schema = model.schema
export default model
