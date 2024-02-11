import { UserIdentifier, uuid } from '../../common';

export type HealthRecordIdentifier = uuid;

export interface HealthRecordData {
	readonly recordType: string;
}

export interface HealthRecord<T extends HealthRecordData> {
	/** The type of the Record*/
	readonly recordType: T['recordType'];
	/** Unique identifier of this data */
	id: HealthRecordIdentifier;
	/** */
	owner: UserIdentifier;
	/** Automatically populated to when data was last modified (or originally created). */
	is_deleted: boolean;
	/** */
	start_time: Date;
	/** */
	end_time?: Date;
	/** */
	data?: T;
	/** Set of common metadata associated with the written record. */
	changed_at: Date;
}
