import { Recipe } from './recipe';

export type SerializedRecipe = Omit<Recipe, 'ingredients' | 'instructions'> & {
	ingredients: string;
	instructions: string;
};

export namespace SerializedRecipe {
	export function serialize(recipe: Partial<Recipe>): Partial<SerializedRecipe> {
		return {
			...recipe,
			ingredients: recipe.ingredients ? JSON.stringify(recipe.ingredients) : undefined,
			instructions: recipe.instructions ? JSON.stringify(recipe.instructions) : undefined,
		};
	}

	export function deserialize(
		serialized: Partial<Recipe> | Partial<SerializedRecipe>
	): Partial<Recipe> {
		return {
			...serialized,
			ingredients:
				typeof serialized.ingredients === 'string'
					? JSON.parse(serialized.ingredients)
					: serialized.ingredients,
			instructions:
				typeof serialized.instructions === 'string'
					? JSON.parse(serialized.instructions)
					: serialized.instructions,
		};
	}
}
