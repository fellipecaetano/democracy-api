import { random } from 'lodash'

export default function delay (min, max) {
  return (req, res, next) => {
    setTimeout(next, random(min, max))
  }
}
