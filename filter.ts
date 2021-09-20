const filter =
  <T>(set: Set<T>, f: (value: T) => boolean): void => {
    for (const _ of set) {
      if (!f(_)) {
        set.delete(_)
      }
    }
  }

export default filter
