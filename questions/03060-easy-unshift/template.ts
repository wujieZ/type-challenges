// type Unshift<T, U> = any

type Unshift<T extends unknown[], U> = [U, ...T]
