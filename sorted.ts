import type { Cmp } from '@prelude/cmp'

const sorted =
  <T>(set: Set<T>, cmp?: Cmp<T>): T[] =>
    Array.from(set).sort(cmp)

export default sorted
