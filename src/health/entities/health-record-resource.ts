import { HealthRecord, HealthRecordData } from './health-record';
import { Resource } from '../../common';

export interface HealthRecordResource<T extends HealthRecordData>
	extends HealthRecord<T>,
		Resource<'record'> {}

export namespace HealthRecordResource {
	export function fromRecord<T extends HealthRecordData>(
		record: HealthRecord<T>
	): HealthRecordResource<T> {
		return {
			resourceType: 'record',
			...record,
		};
	}
}
