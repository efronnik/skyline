export const idoorsSizes = {
  out: {
    leafH: 2000,
    leafW: [610, 710, 810, 910],
    blockH: 2033,
    blockW: [676, 776, 876, 976],
    openingH: 2060,
    openingW: [700, 800, 900, 1000]
  },
  in: {
    leafH: 2012,
    leafW: [610, 710, 810, 910],
    blockH: 2051,
    blockW: [688, 788, 888, 988],
    openingH: 2080,
    openingW: [710, 810, 910, 1010]
  }
} as const

export const idoorsBuild = {
  mdfOut: 6,
  mdfIn: 8,
  soundDb: 25,
  cycles: 50_000,
  air: 1.5,
  planeMm: 2,
  straightenersUntil: 2100,
  plasterMaxMm: 1.5,
  gapHeight: 30,
  gapWidth: [30, 40] as const,
  floorGap: 10
} as const

export function widthRange(values: readonly number[]) {
  return `${values[0]}–${values[values.length - 1]}`
}

export function sizeLine(height: number, widths: readonly number[]) {
  return `${height} × ${widthRange(widths)}`
}
