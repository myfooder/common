import { Recipe } from './recipe';
import { Link, Resource } from '../../common';

export interface RecipeResource extends Recipe, Resource<'recipe'> {
	links: Link[];
}

export namespace RecipeResource {
	export function fromRecipe(recipe: Recipe): RecipeResource {
		return {
			resourceType: 'recipe',
			...recipe,
			links: [
				{ uri: `/cuisine/recipes/${recipe.id}`, rel: 'self' },
				{ uri: `/cuisine/recipes/${recipe.id}`, rel: 'self', type: 'PATCH' },
				{ uri: `/cuisine/recipes/${recipe.id}`, rel: 'self', type: 'DELETE' },
			],
		};
	}
}
