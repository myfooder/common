import {
	HealthRecordChangesTokenDataSource,
	HealthRecordDataSource,
	HealthRecordRepository,
} from '../interfaces';
import {
	HealthRecord,
	HealthRecordChanges,
	HealthRecordChangesToken,
	HealthRecordChangesTokenIdentifier,
	HealthRecordData,
	HealthRecordIdentifier,
} from '../entities';
import { UserIdentifier } from '../../common';

export class HealthRecordRepositoryImplementation implements HealthRecordRepository {
	private healthRecordDataSource: HealthRecordDataSource;
	private healthRecordChangesTokenDataSource: HealthRecordChangesTokenDataSource;

	constructor(
		healthRecordDataSource: HealthRecordDataSource,
		healthRecordChangesTokenDataSource: HealthRecordChangesTokenDataSource
	) {
		this.healthRecordDataSource = healthRecordDataSource;
		this.healthRecordChangesTokenDataSource = healthRecordChangesTokenDataSource;
	}

	async getRecord<T extends HealthRecordData>(
		id: HealthRecordIdentifier
	): Promise<HealthRecord<T> | undefined> {
		return this.healthRecordDataSource.get(id);
	}

	async insertRecord<T extends HealthRecordData>(
		record: HealthRecord<T>
	): Promise<HealthRecord<T>> {
		return this.healthRecordDataSource.insert(record);
	}

	deleteRecord<T extends HealthRecordData>(
		id: HealthRecordIdentifier
	): Promise<HealthRecord<T> | undefined> {
		return this.healthRecordDataSource.delete(id);
	}

	async getChanges(id: HealthRecordChangesTokenIdentifier): Promise<HealthRecordChanges> {
		const token = await this.healthRecordChangesTokenDataSource.get(id);
		if (token === undefined) throw new Error('no token found');
		const newToken = await this.createChangesToken(token.owner);
		return {
			changes: [],
			has_more: false,
			next_changes_token: newToken.id,
		};
	}

	async createChangesToken(
		owner: UserIdentifier,
		creationDate?: Date
	): Promise<HealthRecordChangesToken> {
		return this.healthRecordChangesTokenDataSource.create({
			owner: owner,
			created_at: creationDate || new Date(),
		});
	}
}
