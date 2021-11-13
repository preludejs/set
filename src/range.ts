const range =
  (a: number, b = 0, step = 1): Set<number> => {
    const min = Math.min(a, b)
    const max = Math.max(a, b)
    const set = new Set<number>()
    for (let i = min; i < max; i += step) {
      set.add(i)
    }
    return set
  }

export default range
