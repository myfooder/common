import { RecipeIdentifier } from './recipe';
import { UserIdentifier, uuid } from '../../common';

export type CookbookIdentifier = uuid;

export type CookbookVisibility = 'public' | 'hidden' | 'private';

export interface CookbookEntry {
	cookbook: CookbookIdentifier;
	recipe: RecipeIdentifier;
	added_at: Date;
}

export interface Cookbook {
	id: CookbookIdentifier;
	owner: UserIdentifier;
	visibility: CookbookVisibility;
	name: string;
	description: string;
	created_at: Date;
}
