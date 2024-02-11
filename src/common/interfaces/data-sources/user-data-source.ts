import { User, UserIdentifier } from '../../entities';

export interface UserDataSource {
	get(id: UserIdentifier): Promise<User | undefined>;
	getByMail(email: string): Promise<User | undefined>;
	create(user: User): Promise<void>;
	delete(id: UserIdentifier): Promise<void>;
}
