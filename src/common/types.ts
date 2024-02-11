export type KeyedPartial<T, K extends keyof T> = Pick<T, K> & Partial<Omit<T, K>>;

export type RecursivePartial<T> = {
	[P in keyof T]?: RecursivePartial<T[P]>;
};

type PartialExcept<T, K extends keyof T> = RecursivePartial<T> & Pick<T, K>;
