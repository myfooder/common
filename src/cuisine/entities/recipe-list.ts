import { Recipe, RecipeIdentifier } from './recipe';
import { Link, Resource } from '../../common';

export interface RecipeListEntry {
	id: RecipeIdentifier;
	name: string;
	description: string;
	links: Link[];
}

export interface RecipeList {
	recipes: RecipeListEntry[];
}

export interface RecipeListResource extends RecipeList, Resource<'recipe-list'> {}

export namespace RecipeList {
	export function fromArray(recipes: Recipe[]): RecipeList {
		return {
			recipes: recipes.map((recipe) => {
				return {
					id: recipe.id,
					name: recipe.name,
					description: recipe.description,
					links: [
						{
							rel: 'recipe',
							uri: `/recipes/${recipe.id}`,
						},
					],
				};
			}),
		};
	}

	export function createResource(recipeList: RecipeList): RecipeListResource {
		return {
			resourceType: 'recipe-list',
			...recipeList,
		};
	}
}
