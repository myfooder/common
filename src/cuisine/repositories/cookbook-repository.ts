import { CookbookDataSource, CookbookEntryDataSource, CookbookRepository } from '../interfaces';
import { Cookbook, CookbookIdentifier, RecipeIdentifier } from '../entities';
import { KeyedPartial } from '../../common';

export class CookbookRepositoryImplementation implements CookbookRepository {
	private cookbookDataSource: CookbookDataSource;
	private cookbookEntryDataSource: CookbookEntryDataSource;

	constructor(
		cookbookDataSource: CookbookDataSource,
		cookbookEntryDataSource: CookbookEntryDataSource
	) {
		this.cookbookDataSource = cookbookDataSource;
		this.cookbookEntryDataSource = cookbookEntryDataSource;
	}

	async hasCookbook(id: CookbookIdentifier): Promise<boolean> {
		const recipe = await this.cookbookDataSource.get(id);
		return recipe !== undefined;
	}

	getCookbook(id: CookbookIdentifier): Promise<Cookbook | undefined> {
		return this.cookbookDataSource.get(id);
	}

	createCookbook(cookbook: Cookbook): Promise<Cookbook | undefined> {
		return this.cookbookDataSource.create(cookbook);
	}

	updateCookbook(cookbook: KeyedPartial<Cookbook, 'id'>): Promise<Cookbook | undefined> {
		return this.cookbookDataSource.update(cookbook);
	}

	deleteCookbook(id: CookbookIdentifier): Promise<void> {
		return this.cookbookDataSource.delete(id);
	}

	getRecipes(id: CookbookIdentifier): Promise<RecipeIdentifier[]> {
		return this.cookbookEntryDataSource.get(id);
	}

	addRecipe(id: CookbookIdentifier, recipe: RecipeIdentifier): Promise<void> {
		return this.cookbookEntryDataSource.add(id, recipe);
	}

	removeRecipe(id: CookbookIdentifier, recipe: RecipeIdentifier): Promise<void> {
		return this.cookbookEntryDataSource.remove(id, recipe);
	}
}
