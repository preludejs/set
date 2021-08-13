import * as S from '../index.js'

const s =
  <T>(...args: T[]): Set<T> =>
    new Set(args)

const a = s('a', 'b')
const b = s('b', 'c')
const c = s('c', 'd')

test('empty', () => {
  expect(S.empty(s())).toBe(true)
  expect(S.empty(s('a'))).toBe(false)
})

test('equal', () => {
  expect(S.equal(s(), s())).toBe(true)
  expect(S.equal(s('a'), s())).toBe(false)
  expect(S.equal(s(), s('a'))).toBe(false)
  expect(S.equal(a, s('a', 'b'))).toBe(true)
  expect(S.equal(a, b)).toBe(false)
})

test('union', () => {
  expect(S.equal(s('a', 'b', 'c'), S.union(a, b))).toBe(true)
})

test('intersection', () => {
  expect(S.equal(s('b'), S.intersection(a, b))).toBe(true)
  expect(S.equal(s(), S.intersection(a, c))).toBe(true)
})

test('difference', () => {
  expect(S.equal(s('a'), S.difference(a, b))).toBe(true)
  expect(S.equal(s('c'), S.difference(b, a))).toBe(true)
  expect(S.equal(a, S.difference(a, c))).toBe(true)
})
