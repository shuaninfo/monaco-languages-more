// import * as promql from './promql'; 
import {
	customImport
} from '../utils.js'
export const promLanguageDefinition = {
	id: 'promql',
	extensions: ['.promql'],
	aliases: ['Prometheus', 'prometheus', 'prom', 'Prom', 'promql', 'Promql', 'promQL', 'PromQL'],
	mimetypes: [],
	loader: () => customImport('promql')
};
