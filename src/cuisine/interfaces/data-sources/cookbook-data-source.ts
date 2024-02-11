import { Cookbook, CookbookIdentifier } from '../../entities';
import { KeyedPartial } from '../../../common';

export interface CookbookDataSource {
	initialise(): Promise<void>;
	get(id: CookbookIdentifier): Promise<Cookbook | undefined>;
	create(cookbook: Cookbook): Promise<Cookbook | undefined>;
	update(cookbook: KeyedPartial<Cookbook, 'id'>): Promise<Cookbook | undefined>;
	delete(id: CookbookIdentifier): Promise<void>;
}
