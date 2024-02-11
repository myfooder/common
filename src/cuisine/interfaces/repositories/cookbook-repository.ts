import { Cookbook, CookbookIdentifier, RecipeIdentifier } from '../../entities';
import { KeyedPartial } from '../../../common';

export interface CookbookRepository {
	/** */
	hasCookbook(id: CookbookIdentifier): Promise<boolean>;

	/** Get a recipe by its id*/
	getCookbook(id: CookbookIdentifier): Promise<Cookbook | undefined>;

	/** Create a new cookbook */
	createCookbook(cookbook: Cookbook): Promise<Cookbook | undefined>;

	/** */
	updateCookbook(cookbook: KeyedPartial<Cookbook, 'id'>): Promise<Cookbook | undefined>;

	/** Delete a cookbook */
	deleteCookbook(id: CookbookIdentifier): Promise<void>;

	/** */
	getRecipes(cookbook: CookbookIdentifier): Promise<RecipeIdentifier[]>;

	/** Add a recipe to a cookbook */
	addRecipe(cookbook: CookbookIdentifier, recipe: RecipeIdentifier): Promise<void>;

	/** Remove a recipe from a cookbook */
	removeRecipe(cookbook: CookbookIdentifier, recipe: RecipeIdentifier): Promise<void>;
}
