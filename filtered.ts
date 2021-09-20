const filtered =
  <T>(set: Set<T>, f: (value: T) => boolean): Set<T> => {
    const set_ = new Set<T>()
    for (const _ of set) {
      if (f(_)) {
        set_.add(_)
      }
    }
    return set_
  }

export default filtered
