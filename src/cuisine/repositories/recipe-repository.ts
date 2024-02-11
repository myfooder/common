import { RecipeDataSource, RecipeRepository } from '../interfaces';
import { Recipe, RecipeIdentifier } from '../entities';
import { KeyedPartial } from '../../common';

export class RecipeRepositoryImplementation implements RecipeRepository {
	recipeDataSource: RecipeDataSource;

	constructor(recipeDataSource: RecipeDataSource) {
		this.recipeDataSource = recipeDataSource;
	}

	async hasRecipe(id: RecipeIdentifier): Promise<boolean> {
		return (await this.recipeDataSource.get(id)) !== undefined;
	}

	async getAllRecipes(): Promise<Recipe[]> {
		return this.recipeDataSource.getAll();
	}

	async getRecipes(ids: RecipeIdentifier[]): Promise<Recipe[]> {
		return this.recipeDataSource.getMany(ids);
	}

	async getRecipe(id: RecipeIdentifier): Promise<Recipe | undefined> {
		return await this.recipeDataSource.get(id);
	}

	async createRecipe(recipe: Recipe): Promise<Recipe | undefined> {
		return this.recipeDataSource.create(recipe);
	}

	async updateRecipe(recipe: KeyedPartial<Recipe, 'id'>): Promise<Recipe | undefined> {
		return await this.recipeDataSource.update(recipe);
	}

	async deleteRecipe(id: RecipeIdentifier): Promise<void> {
		return await this.recipeDataSource.delete(id);
	}
}
