// type TupleToObject<T extends readonly any[]> = any

type TupleToObject<T extends readonly any[]> = {
  [Key in T[number]]: Key
}
