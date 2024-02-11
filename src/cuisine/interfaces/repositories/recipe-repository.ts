import { Recipe, RecipeIdentifier } from '../../entities';
import { KeyedPartial } from '../../../common';

export interface RecipeRepository {
	/**  */
	hasRecipe(id: RecipeIdentifier): Promise<boolean>;

	/** */
	getAllRecipes(): Promise<Recipe[]>;

	/** */
	getRecipes(ids: RecipeIdentifier[]): Promise<Recipe[]>;

	/** Get a recipe by its id*/
	getRecipe(id: RecipeIdentifier): Promise<Recipe | undefined>;

	/** Create a new recipe */
	createRecipe(recipe: Recipe): Promise<Recipe | undefined>;

	/** */
	updateRecipe(recipe: KeyedPartial<Recipe, 'id'>): Promise<Recipe | undefined>;

	/** Delete a recipe */
	deleteRecipe(id: RecipeIdentifier): Promise<void>;
}
