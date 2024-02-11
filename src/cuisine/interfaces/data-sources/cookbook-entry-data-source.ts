import { CookbookIdentifier, RecipeIdentifier } from '../../entities';

export interface CookbookEntryDataSource {
	initialise(): Promise<void>;
	get(id: CookbookIdentifier): Promise<RecipeIdentifier[]>;
	add(id: CookbookIdentifier, recipe: RecipeIdentifier): Promise<void>;
	remove(id: CookbookIdentifier, recipe: RecipeIdentifier): Promise<void>;
}
