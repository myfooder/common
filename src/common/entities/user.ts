import { uuid } from './uuid';

export type UserIdentifier = uuid;
export interface User {
	id: UserIdentifier;
	email: string;
	password: string;
}
