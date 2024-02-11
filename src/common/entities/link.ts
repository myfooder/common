export interface Link {
	rel: string;
	uri: string;
	type?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
}
