// The MIT License (MIT)
'use strict';
export const oracleLanguageDefinition = {
	id: 'oracle',
	extensions: ['.oracle'],
	aliases: ['ORACLE', 'Oracle', 'oracle','OracleSql'],
	mimetypes: [],
	loader: () => import('./oracle')  // eslint-disable-line @typescript-eslint/explicit-function-return-type
};
