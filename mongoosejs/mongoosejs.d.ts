///<reference path='../node/node.d.ts' />

declare module "mongoose" {

	export interface Mongoose {

	}

    export function connect(any): Mongoose;
	export function model(name: string, schema?: Schema, collection?: string, skipInit?: bool): Model;

	export class Schema {
		constructor(definition:any, options?:any);
		static Types: {
			ObjectId: any;
			Mixed: any;
		};

		methods: any;
		statics: any;
		path(path: string): any;
		virtual(path: string): any;
		pre(method: string, callback: (next: (any?) => any) => any): void;
	}

	export class Query {

	}

	export interface Model {
		new (any): Document;

		find(conditions: any): Query;
		find(conditions: any, callback: (err: any, res: any[]) => void ): Query;
	}

}
