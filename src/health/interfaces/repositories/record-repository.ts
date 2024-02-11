import {
	HealthRecord,
	HealthRecordChanges,
	HealthRecordChangesToken,
	HealthRecordChangesTokenIdentifier,
	HealthRecordData,
	HealthRecordIdentifier,
} from '../../entities';
import { UserIdentifier } from '../../../common';

export interface HealthRecordRepository {
	/** Get a record by its id*/
	getRecord<T extends HealthRecordData>(
		id: HealthRecordIdentifier
	): Promise<HealthRecord<T> | undefined>;

	/** Create a new record */
	insertRecord<T extends HealthRecordData>(record: HealthRecord<T>): Promise<HealthRecord<T>>;

	/** Delete a record */
	deleteRecord<T extends HealthRecordData>(
		id: HealthRecordIdentifier
	): Promise<HealthRecord<T> | undefined>;

	/** */
	getChanges(id: HealthRecordChangesTokenIdentifier): Promise<HealthRecordChanges>;

	/** */
	createChangesToken(
		owner: UserIdentifier,
		creationDate?: Date
	): Promise<HealthRecordChangesToken>;
}
