// type Length<T> = any

type Length<T> = T extends readonly unknown[] ? T['length'] : never;