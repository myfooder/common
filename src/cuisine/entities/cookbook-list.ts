import { Cookbook, CookbookIdentifier } from './cookbook';
import { Link, Resource } from '../../common';

export interface CookbookListEntry {
	id: CookbookIdentifier;
	name: string;
	description: string;
	links: Link[];
}

export interface CookbookList {
	cookbooks: CookbookListEntry[];
}

export interface CookbookListResource extends CookbookList, Resource<'cookbook-list'> {}

export namespace CookbookList {
	export function fromArray(cookbooks: Cookbook[]): CookbookList {
		return {
			cookbooks: cookbooks.map((cookbook) => {
				return {
					id: cookbook.id,
					name: cookbook.name,
					description: cookbook.description,
					links: [
						{
							rel: 'cookbook',
							uri: `/cookbooks/${cookbook.id}`,
						},
					],
				};
			}),
		};
	}

	export function createResource(cookbookList: CookbookList): CookbookListResource {
		return {
			resourceType: 'cookbook-list',
			...cookbookList,
		};
	}
}
