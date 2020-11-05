// import * as oracle from './oracle';
import{customImport} from '../utils.js'
export const oracleLanguageDefinition = {
	id: 'oracle',
	extensions: ['.oracle'],
	aliases: ['ORACLE', 'Oracle', 'oracle','OracleSql'],
	mimetypes: [],
	loader: () => customImport('oracle')  // eslint-disable-line @typescript-eslint/explicit-function-return-type
};
