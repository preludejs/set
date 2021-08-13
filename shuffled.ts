import shuffle from '@prelude/array/shuffle.js'

const shuffled =
  <T>(set: Set<T>): T[] =>
    shuffle(Array.from(set))

export default shuffled
