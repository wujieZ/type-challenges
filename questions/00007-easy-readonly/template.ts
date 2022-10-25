// type MyReadonly<T> = any

type MyReadonly<T> = {
  readonly [Key in keyof T]: T[Key]
}
