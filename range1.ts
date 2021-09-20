const range1 =
  (a: number, b = 1, step = 1): Set<number> => {
    const min = Math.min(a, b)
    const max = Math.max(a, b)
    const set = new Set<number>()
    for (let i = min; i <= max; i += step) {
      set.add(i)
    }
    return set
  }

export default range1
