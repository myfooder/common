import { uuid } from './uuid';

export type UserIdentifier = uuid;

export interface User {
	readonly uid: UserIdentifier;
	readonly email?: string;
	readonly emailVerified: boolean;
	readonly displayName?: string;
	readonly photoURL?: string;
	readonly disabled: boolean;
}
