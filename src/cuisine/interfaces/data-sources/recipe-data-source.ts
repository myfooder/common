import { Recipe, RecipeIdentifier } from '../../entities';

export interface RecipeDataSource {
	initialise(): Promise<void>;
	getAll(): Promise<Recipe[]>;
	getMany(ids: RecipeIdentifier[]): Promise<Recipe[]>;
	get(id: RecipeIdentifier): Promise<Recipe | undefined>;
	create(recipe: Recipe): Promise<Recipe | undefined>;
	update(recipe: Pick<Recipe, 'id'> & Partial<Omit<Recipe, 'id'>>): Promise<Recipe | undefined>;
	delete(id: RecipeIdentifier): Promise<void>;
}
