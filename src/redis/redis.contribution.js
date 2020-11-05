import {
	customImport
} from '../utils.js'
export const redisLanguageDefinition = {
	id: 'custom-redis',
	extensions: ['.redis'],
	aliases: ['custom-redis', 'redis', 'REDIS', 'Redis', 'rs'],
	mimetypes: [],
	loader: () => customImport('redis') // eslint-disable-line @typescript-eslint/explicit-function-return-type
};
