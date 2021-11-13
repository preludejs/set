const intersection =
  <T>(set: Set<T>, ...otherSets: Set<T>[]): Set<T> => {
    const result = new Set<T>()
    outer:
    for (const value of set) {
      for (const otherSet of otherSets) {
        if (!otherSet.has(value)) {
          continue outer
        }
      }
      result.add(value)
    }
    return result
  }

export default intersection
