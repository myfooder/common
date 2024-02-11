import { HealthRecord, HealthRecordData, HealthRecordIdentifier } from '../../entities';
import { UserIdentifier } from '../../../common';

export interface HealthRecordDataSource {
	/** */
	initialise(): Promise<void>;

	/** */
	get<T extends HealthRecordData>(
		id: HealthRecordIdentifier
	): Promise<HealthRecord<T> | undefined>;

	/** */
	query<T extends HealthRecordData>(options: {
		recordType: T['recordType'];
		owner: UserIdentifier;
		timeRange?: { start: Date; end: Date };
	}): Promise<HealthRecord<T>[]>;

	/** */
	insert<T extends HealthRecordData>(record: HealthRecord<T>): Promise<HealthRecord<T>>;

	/** */
	delete<T extends HealthRecordData>(
		id: HealthRecordIdentifier
	): Promise<HealthRecord<T> | undefined>;
}
