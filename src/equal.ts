const equal =
  <T>(set: Set<T>, ...otherSets: Set<T>[]): boolean => {
    for (const otherSet of otherSets) {
      if (set.size !== otherSet.size) {
        return false
      }
      for (const value of set) {
        if (!otherSet.has(value)) {
          return false
        }
      }
    }
    return true
  }

export default equal
