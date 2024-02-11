import { User, UserIdentifier } from '../entities';
import { UserDataSource, UserRepository } from '../interfaces';

export class UserRepositoryImplementation implements UserRepository {
	userDataSource: UserDataSource;

	constructor(userDataSource: UserDataSource) {
		this.userDataSource = userDataSource;
	}

	getUser(id: UserIdentifier): Promise<User | undefined> {
		return this.userDataSource.get(id);
	}

	getUserByMail(email: string): Promise<User | undefined> {
		return this.userDataSource.getByMail(email);
	}

	async createUser(user: User): Promise<User> {
		await this.userDataSource.create(user);
		return user;
	}

	deleteUser(id: UserIdentifier): Promise<void> {
		return this.userDataSource.delete(id);
	}
}
