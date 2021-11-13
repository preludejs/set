const difference =
  <T>(set: Set<T>, otherSet: Set<T>): Set<T> => {
    const result = new Set<T>()
    for (const value of set) {
      if (!otherSet.has(value)) {
        result.add(value)
      }
    }
    return result
  }

export default difference
