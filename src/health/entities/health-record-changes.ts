import { HealthRecord } from './health-record';
import { HealthRecordChangesTokenIdentifier } from './health-record-changes-token';

export interface HealthRecordChange {
	type: 'insertion' | 'deletion';
	record?: HealthRecord<any>;
}

export interface HealthRecordChanges {
	changes: HealthRecordChange[];
	has_more: boolean;
	next_changes_token: HealthRecordChangesTokenIdentifier;
}
