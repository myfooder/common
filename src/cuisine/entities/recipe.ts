import { UserIdentifier, uuid } from '../../common';

export type RecipeIdentifier = uuid;

export interface Recipe {
	id: RecipeIdentifier;
	owner: UserIdentifier;
	name: string;
	description: string;
	ingredients: Ingredient[];
	instructions: InstructionSection[];
}

export interface Ingredient {
	name: string;
	unit: any | undefined; // TODO Volume | Mass
}

export interface InstructionSection {
	position: number;
	title: string;
	description: string;
	instructions: Instruction[];
}

export interface Instruction {
	position: number;
	text: string;
}
