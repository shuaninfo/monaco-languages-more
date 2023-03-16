// import * as oracle from './oracle';
import{customImport} from '../utils.js'
export const mssqlLanguageDefinition = {
	id: 'mssql',
	extensions: ['.mssql'],
	aliases: ['mssql', 'MSSQL', 'sql server','MsSQL'],
	mimetypes: [],
	loader: () => customImport('mssql')  // eslint-disable-line @typescript-eslint/explicit-function-return-type
};
