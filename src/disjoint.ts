/** @returns `true` if provided sets are disjoint, `false` otherwise. */
const disjoint =
  (...sets: Set<unknown>[]): boolean => {
    const set_ = new Set<unknown>()
    for (const set of sets) {
      for (const value of set) {
        if (set_.has(value)) {
          return false
        }
        set_.add(value)
      }
    }
    return true
  }

export default disjoint
