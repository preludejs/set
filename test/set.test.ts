import * as S from '../cjs/index.js'
import * as Cmp from '@prelude/cmp'

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

test('range', () => {
  expect(S.sorted(S.range(3), Cmp.numbers)).toEqual([ 0, 1, 2 ])
  expect(S.sorted(S.range(2, 5), Cmp.numbers)).toEqual([ 2, 3, 4 ])
  expect(S.sorted(S.range(1, 10, 2), Cmp.numbers)).toEqual([ 1, 3, 5, 7, 9 ])
})

test('range1', () => {
  expect(S.sorted(S.range1(-5, -10), Cmp.numbers)).toEqual([ -10, -9, -8, -7, -6, -5 ])
  expect(S.sorted(S.range1(3), Cmp.numbers)).toEqual([ 1, 2, 3 ])
  expect(S.sorted(S.range1(2, 5), Cmp.numbers)).toEqual([ 2, 3, 4, 5 ])
  expect(S.sorted(S.range1(1, 10, 2), Cmp.numbers)).toEqual([ 1, 3, 5, 7, 9 ])
})
