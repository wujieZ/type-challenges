// type Includes<T extends readonly any[], U> = any

type IsEqual<A, B> = (<T>() => T extends A ? 1 : 2 ) extends (<T>() => T extends B ? 1 : 2) ? true : false

type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Rest] ? IsEqual<First, U> extends  true ? true : Includes<Rest, U> : false;