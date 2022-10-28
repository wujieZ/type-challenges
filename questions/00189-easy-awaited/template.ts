// type MyAwaited<T> = any

type MyAwaited<T> = T extends Promise<infer ValueType> ?  MyAwaited<ValueType> : T;