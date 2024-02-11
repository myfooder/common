import { User, UserIdentifier } from '../../entities';

export interface UserRepository {
	/** Get an auth by its id*/
	getUser(id: UserIdentifier): Promise<User | undefined>;

	/** Find a user by its username*/
	getUserByMail(email: string): Promise<User | undefined>;

	/** Create a new auth */
	createUser(user: User): Promise<User>;

	/** Delete an auth */
	deleteUser(id: UserIdentifier): Promise<void>;
}
