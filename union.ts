const union =
  <T>(set: Set<T>, ...otherSets: Set<T>[]): Set<T> => {
    const result = new Set<T>(set)
    for (const otherSet of otherSets) {
      for (const value of otherSet) {
        result.add(value)
      }
    }
    return result
  }

export default union
