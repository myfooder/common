import { UserIdentifier, uuid } from '../../common';

export type HealthRecordChangesTokenIdentifier = uuid;

export interface HealthRecordChangesToken {
	id: HealthRecordChangesTokenIdentifier;
	owner: UserIdentifier;
	created_at: Date;
}
