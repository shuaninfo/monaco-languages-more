// The MIT License (MIT)
//
// Copyright (c) Celian Garcia and Augustin Husson @ Amadeus IT Group
//
// 参考 https://docs.oracle.com/cd/B19306_01/appdev.102/b14354/appb.htm#BABIGBBI

// noinspection JSUnusedGlobalSymbols
export const conf = {
	// the default separators except `@$`
	wordPattern: /\$\@(-?\d*\.\d\w*)|([^`~!#%^&*()\-=+\[{\]}\\|;:'",.<>\/?\s]+)/g,
	// Not possible to make comments in PromQL syntax
	comments: {
		lineComment: '--',
		blockComment: ['/*', '*/']
	},
	brackets: [
		['{', '}'],
		['[', ']'],
		['(', ')']
	],
	autoClosingPairs: [{
			open: '{',
			close: '}'
		},
		{
			open: '[',
			close: ']'
		},
		{
			open: '(',
			close: ')'
		},
		{
			open: '"',
			close: '"'
		},
		{
			open: "'",
			close: "'"
		}
	],
	surroundingPairs: [{
			open: '{',
			close: '}'
		},
		{
			open: '[',
			close: ']'
		},
		{
			open: '(',
			close: ')'
		},
		{
			open: '"',
			close: '"'
		},
		{
			open: "'",
			close: "'"
		}
	],
	folding: {}
};

// noinspection JSUnusedGlobalSymbols
export const language = {
	// 忽略大小写
	ignoreCase: true,
	defaultToken: '',
	// 使用SQL的token class
	tokenPostfix: '.sql',
	brackets: [{
			open: '[',
			close: ']',
			token: 'delimiter.square'
		},
		{
			open: '(',
			close: ')',
			token: 'delimiter.parenthesis'
		}
	],
	keywords: [
		'mongo',
    'mongodb',
    'MongoDB',
    'db',
    'show',
    'user',
    'users'
	],
	// 操作列表
	operators: [
    '$gt',
    '$lt',
    '$ne',
    '$gte',
    '$lte',
    '$inc',
    '$in',
    '$nin',
    '$set',
    '$unset',
    '$push',
    '$addToSet',
    '$pop',
    '$pull',
    '$and',
    '$not',
    '$nor',
    '$or',
    '$expr',
    '$jsonSchema',
    '$mod',
    '$regex',
    '$text',
    '$where',
    '$geoIntersects',
    '$geoWithin',
    '$near',
    '$nearSphere',
    '$all',
    '$elemMatch',
    '$size',
    '$bitsAllClear',
    '$bitsAllSet',
    '$bitsAnyClear',
    '$bitsAnySet',
    '$meta',
    '$slice',
    '$comment',
    '$rand',
    '$currentDate',
    '$min',
    '$max',
    '$mul',
    '$rename',
    '$setOnInsert',
    '$pullAll',
    '$each',
    '$position',
    '$sort',
    '$bit',
    '$addFields',
    '$bucket',
    '$bucketAuto',
    '$collStats',
    '$count',
    '$facet',
    '$geoNear',
    '$graphLookup',
    '$group',
    '$indexStats',
    '$limit',
    '$listSessions',
    '$lookup',
    '$match',
    '$merge',
    '$out',
    '$planCacheStats',
    '$project',
    '$redact',
    '$replaceRoot',
    '$replaceWith',
    '$sample',
    '$search',
    '$setWindowFields',
    '$skip',
    '$sortByCount',
    '$unionWith',
    '$unwind',
    '$currentOp',
    '$listLocalSessions',
    '$abs',
    '$add',
    '$ceil',
    '$divide',
    '$exp',
    '$floor',
    '$ln',
    '$log',
    '$log10',
    '$multiply',
    '$pow',
    '$round',
    '$sqrt',
    '$subtract',
    '$trunc',
    '$arrayElemAt',
    '$arrayToObject',
    '$concatArrays',
    '$filter',
    '$first',
    '$indexOfArray',
    '$isArray',
    '$last',
    '$map',
    '$objectToArray',
    '$range',
    '$reduce',
    '$reverseArray',
    '$zip',
    '$cmp',
    '$eq'
  ],
	// 函数列表
	builtinFunctions: [
    'aggregate',
    'bulkWrite',
    'count',
    'countDocuments',
    'createIndex',
    'createIndexes',
    'dataSize',
    'deleteOne',
    'deleteMany',
    'distinct',
    'drop',
    'dropIndex',
    'dropIndexes',
    'ensureIndex',
    'estimatedDocumentCount',
    'explain',
    'find',
    'findAndModify',
    'findOne',
    'findOneAndDelete',
    'findOneAndReplace',
    'findOneAndUpdate',
    'getIndexes',
    'getShardDistribution',
    'getShardVersion',
    'hideIndex',
    'insertOne',
    'insertMany',
    'isCapped',
    'latencyStats',
    'mapReduce',
    'reIndex',
    'remove',
    'renameCollection',
    'replaceOne',
    'stats',
    'storageSize',
    'totalIndexSize',
    'totalSize',
    'unhideIndex',
    'update',
    'updateOne',
    'updateMany',
    'watch',
    'validate',
    'addOption',
    'allowDiskUse',
    'allowPartialResults',
    'batchSize',
    'close',
    'isClosed',
    'collation',
    'comment',
    'forEach',
    'hasNext',
    'hint',
    'isExhausted',
    'itcount',
    'limit',
    'map',
    'max',
    'maxTimeMS',
    'min',
    'next',
    'noCursorTimeout',
    'objsLeftInBatch',
    'pretty',
    'readConcern',
    'readPref',
    'returnKey',
    'showRecordId',
    'size',
    'skip',
    'sort',
    'tailable',
    'toArray',
    'adminCommand',
    'cloneDatabase',
    'commandHelp',
    'copyDatabase',
    'createCollection',
    'createView',
    'currentOp',
    'dropDatabase',
    'fsyncLock',
    'fsyncUnlock',
    'getCollection',
    'getCollectionInfos',
    'getCollectionNames',
    'getLastError',
    'getLastErrorObj',
    'getLogComponents',
    'getMongo',
    'getName',
    'getProfilingStatus',
    'getReplicationInfo',
    'getSiblingDB',
    'hello',
    'help',
    'hostInfo',
    'killOp',
    'listCommands',
    'logout',
    'printCollectionStats',
    'printReplicationInfo',
    'printSecondaryReplicationInfo',
    'printShardingStatus',
    'printSlaveReplicationInfo',
    'resetError',
    'rotateCertificates',
    'runCommand',
    'serverBuildInfo',
    'serverCmdLineOpts',
    'serverStatus',
    'setLogLevel',
    'setProfilingLevel',
    'shutdownServer',
    'version',
    'initializeOrderedBulkOp',
    'execute',
    'arrayFilters',
    'removeOne',
    'upsert',
    'getOperations',
    'tojson',
    'toString'
  ],
	builtinVariables: [
		// Configuration
		'@@DATEFIRST',
		'@@DBTS',
		'@@LANGID',
		'@@LANGUAGE',
		'@@LOCK_TIMEOUT',
		'@@MAX_CONNECTIONS',
		'@@MAX_PRECISION',
		'@@NESTLEVEL',
		'@@OPTIONS',
		'@@REMSERVER',
		'@@SERVERNAME',
		'@@SERVICENAME',
		'@@SPID',
		'@@TEXTSIZE',
		'@@VERSION',
		// Cursor
		'@@CURSOR_ROWS',
		'@@FETCH_STATUS',
		// Datetime
		'@@DATEFIRST',
		// Metadata
		'@@PROCID',
		// System
		'@@ERROR',
		'@@IDENTITY',
		'@@ROWCOUNT',
		'@@TRANCOUNT',
		// Stats
		'@@CONNECTIONS',
		'@@CPU_BUSY',
		'@@IDLE',
		'@@IO_BUSY',
		'@@PACKET_ERRORS',
		'@@PACK_RECEIVED',
		'@@PACK_SENT',
		'@@TIMETICKS',
		'@@TOTAL_ERRORS',
		'@@TOTAL_READ',
		'@@TOTAL_WRITE'
	],
	pseudoColumns: ['$ACTION', '$IDENTITY', '$ROWGUID', '$PARTITION'],
	tokenizer: {
		root: [
      [
				/\$\w+/,
				{
					cases: {
						'@keywords': 'keyword',
						'@operators': 'operator',
						'@builtinVariables': 'predefined',
						'@builtinFunctions': 'predefined',
						'@default': 'identifier'
					}
				}
			],
      {
				include: '@comments'
			},
			{
				include: '@whitespace'
			},
			{
				include: '@pseudoColumns'
			},
			{
				include: '@numbers'
			},
			{
				include: '@strings'
			},
			{
				include: '@complexIdentifiers'
			},
			{
				include: '@scopes'
			},
			[/[;,.]/, 'delimiter'],
			[/[()]/, '@brackets'],
			[
				/[\w@#$]+/,
				{
					cases: {
						'@keywords': 'keyword',
						'@operators': 'operator',
						'@builtinVariables': 'predefined',
						'@builtinFunctions': 'predefined',
						'@default': 'identifier'
					}
				}
			],
			[/[<>=!%&+\-*/|~^]/, 'operator']
		],
		whitespace: [
			[/\s+/, 'white']
		],
		comments: [
			[/--+.*/, 'comment'],
			[/\/\*/, {
				token: 'comment.quote',
				next: '@comment'
			}]
		],
		comment: [
			[/[^*/]+/, 'comment'],
			// Not supporting nested comments, as nested comments seem to not be standard?
			// i.e. http://stackoverflow.com/questions/728172/are-there-multiline-comment-delimiters-in-sql-that-are-vendor-agnostic
			// [/\/\*/, { token: 'comment.quote', next: '@push' }],    // nested comment not allowed :-(
			[/\*\//, {
				token: 'comment.quote',
				next: '@pop'
			}],
			[/./, 'comment']
		],
		pseudoColumns: [
			[
				/[$][A-Za-z_][\w@#$]*/,
				{
					cases: {
						'@pseudoColumns': 'predefined',
						'@default': 'identifier'
					}
				}
			]
		],
		numbers: [
			[/0[xX][0-9a-fA-F]*/, 'number'],
			[/[$][+-]*\d*(\.\d*)?/, 'number'],
			[/((\d+(\.\d*)?)|(\.\d+))([eE][\-+]?\d+)?/, 'number']
		],
		strings: [
			[/'/, {
				token: 'string',
				next: '@string'
			}],
			[/'/, {
				token: 'string',
				next: '@string'
			}]
		],
		string: [
			[/[^']+/, 'string'],
			[/''/, 'string'],
			[/'/, {
				token: 'string',
				next: '@pop'
			}]
		],
		complexIdentifiers: [
			[/\[/, {
				token: 'identifier.quote',
				next: '@bracketedIdentifier'
			}],
			[/"/, {
				token: 'identifier.quote',
				next: '@quotedIdentifier'
			}]
		],
		bracketedIdentifier: [
			[/[^\]]+/, 'identifier'],
			[/]]/, 'identifier'],
			[/]/, {
				token: 'identifier.quote',
				next: '@pop'
			}]
		],
		quotedIdentifier: [
			[/[^"]+/, 'identifier'],
			[/""/, 'identifier'],
			[/"/, {
				token: 'identifier.quote',
				next: '@pop'
			}]
		],
		scopes: [
			[/BEGIN\s+(DISTRIBUTED\s+)?TRAN(SACTION)?\b/i, 'keyword'],
			[/BEGIN\s+TRY\b/i, {
				token: 'keyword.try'
			}],
			[/END\s+TRY\b/i, {
				token: 'keyword.try'
			}],
			[/BEGIN\s+CATCH\b/i, {
				token: 'keyword.catch'
			}],
			[/END\s+CATCH\b/i, {
				token: 'keyword.catch'
			}],
			[/(BEGIN|CASE)\b/i, {
				token: 'keyword.block'
			}],
			[/END\b/i, {
				token: 'keyword.block'
			}],
			[/WHEN\b/i, {
				token: 'keyword.choice'
			}],
			[/THEN\b/i, {
				token: 'keyword.choice'
			}]
		]
	}

};
