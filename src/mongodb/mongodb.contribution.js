// import * as oracle from './oracle';
import{customImport} from '../utils.js'
export const mongodbLanguageDefinition = {
	id: 'mongodb',
	extensions: ['.mongodb'],
	aliases: ['MONGODB', 'mongodb', 'mongo'],
	mimetypes: [],
	loader: () => customImport('mongodb')  // eslint-disable-line @typescript-eslint/explicit-function-return-type
};
