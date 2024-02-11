import { HealthRecordChangesToken, HealthRecordChangesTokenIdentifier } from '../../entities';

export interface HealthRecordChangesTokenDataSource {
	/** */
	initialise(): Promise<void>;

	/** */
	get(id: HealthRecordChangesTokenIdentifier): Promise<HealthRecordChangesToken | undefined>;

	/** */
	create(changesToken: Partial<HealthRecordChangesToken>): Promise<HealthRecordChangesToken>;

	/** */
	delete(id: HealthRecordChangesTokenIdentifier): Promise<void>;
}
