// type Concat<T, U> = any

type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U]