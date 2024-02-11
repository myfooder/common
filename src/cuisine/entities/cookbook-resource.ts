import { Cookbook } from './cookbook';
import { Link, Resource } from '../../common';

export interface CookbookResource extends Cookbook, Resource<'cookbook'> {
	links: Link[];
}

export namespace CookbookResource {
	export function fromCookbook(cookbook: Cookbook): CookbookResource {
		return {
			resourceType: 'cookbook',
			...cookbook,
			links: [
				{ uri: `/cuisine/cookbooks/${cookbook.id}`, rel: 'self' },
				{ uri: `/cuisine/cookbooks/${cookbook.id}`, rel: 'self', type: 'PUT' },
				{ uri: `/cuisine/cookbooks/${cookbook.id}`, rel: 'self', type: 'DELETE' },
				{ uri: `/cuisine/cookbooks/${cookbook.id}/recipes`, rel: 'recipe-list' },
			],
		};
	}
}
