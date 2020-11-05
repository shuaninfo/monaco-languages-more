import * as redis from './redis';
export const redisLanguageDefinition = {
	id: 'redis',
	extensions: ['.redis'],
	aliases: ['REDIS', 'Redis', 'redis','rs'],
	mimetypes: [],
	loader: () => import('./redis')  // eslint-disable-line @typescript-eslint/explicit-function-return-type
};
