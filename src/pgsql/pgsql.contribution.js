// import * as oracle from './oracle';
import{customImport} from '../utils.js'
export const pgsqlLanguageDefinition = {
	id: 'pgsql',
	extensions: ['.pgsql'],
	aliases: ['PGSQL', 'postgres', 'pgsql','postgreSQL'],
	mimetypes: [],
	loader: () => customImport('pgsql')  // eslint-disable-line @typescript-eslint/explicit-function-return-type
};
