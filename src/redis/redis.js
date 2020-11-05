// The MIT License (MIT)
//
// Copyright (c) Celian Garcia and Augustin Husson @ Amadeus IT Group
//
// 参考 https://docs.oracle.com/cd/B19306_01/appdev.102/b14354/appb.htm#BABIGBBI

// noinspection JSUnusedGlobalSymbols
export const conf = {
	// the default separators except `@$`
	// wordPattern: /(-?\d*\.\d\w*)|([^`~!#%^&*()\-=+\[{\]}\\|;:'",.<>\/?\s]+)/g,
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
	// 使用SQL的token class .mtk18等
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
		'redis',
		'APPEND',
		'AUTH',
		'BGREWRITEAOF',
		'BGSAVE',
		'BITCOUNT',
		'BITFIELD',
		'BITOP',
		'BITPOS',
		'BLPOP',
		'BRPOP',
		'BRPOPLPUSH',
		'CLIENT',
		'KILL',
		'LIST',
		'GETNAME',
		'PAUSE',
		'REPLY',
		'SETNAME',
		'CLUSTER',
		'ADDSLOTS',
		'COUNT-FAILURE-REPORTS',
		'COUNTKEYSINSLOT',
		'DELSLOTS',
		'FAILOVER',
		'FORGET',
		'GETKEYSINSLOT',
		'INFO',
		'KEYSLOT',
		'MEET',
		'NODES',
		'REPLICATE',
		'RESET',
		'SAVECONFIG',
		'SET-CONFIG-EPOCH',
		'SETSLOT',
		'SLAVES',
		'SLOTS',
		'COMMAND',
		'COUNT',
		'GETKEYS',
		'CONFIG',
		'GET',
		'REWRITE',
		'SET',
		'RESETSTAT',
		'DBSIZE',
		'DEBUG',
		'OBJECT',
		'SEGFAULT',
		'DECR',
		'DECRBY',
		'DEL',
		'DISCARD',
		'DUMP',
		'ECHO',
		'EVAL',
		'EVALSHA',
		'EXEC',
		'EXISTS',
		'EXPIRE',
		'EXPIREAT',
		'FLUSHALL',
		'FLUSHDB',
		'GEOADD',
		'GEOHASH',
		'GEOPOS',
		'GEODIST',
		'GEORADIUS',
		'GEORADIUSBYMEMBER',
		'GETBIT',
		'GETRANGE',
		'GETSET',
		'HDEL',
		'HEXISTS',
		'HGET',
		'HGETALL',
		'HINCRBY',
		'HINCRBYFLOAT',
		'HKEYS',
		'HLEN',
		'HMGET',
		'HMSET',
		'HSET',
		'HSETNX',
		'HSTRLEN',
		'HVALS',
		'INCR',
		'INCRBY',
		'INCRBYFLOAT',
		'KEYS',
		'LASTSAVE',
		'LINDEX',
		'LINSERT',
		'LLEN',
		'LPOP',
		'LPUSH',
		'LPUSHX',
		'LRANGE',
		'LREM',
		'LSET',
		'LTRIM',
		'MGET',
		'MIGRATE',
		'MONITOR',
		'MOVE',
		'MSET',
		'MSETNX',
		'MULTI',
		'PERSIST',
		'PEXPIRE',
		'PEXPIREAT',
		'PFADD',
		'PFCOUNT',
		'PFMERGE',
		'PING',
		'PSETEX',
		'PSUBSCRIBE',
		'PUBSUB',
		'PTTL',
		'PUBLISH',
		'PUNSUBSCRIBE',
		'QUIT',
		'RANDOMKEY',
		'READONLY',
		'READWRITE',
		'RENAME',
		'RENAMENX',
		'RESTORE',
		'ROLE',
		'RPOP',
		'RPOPLPUSH',
		'RPUSH',
		'RPUSHX',
		'SADD',
		'SAVE',
		'SCARD',
		'SCRIPT',
		'FLUSH',
		'LOAD',
		'SDIFF',
		'SDIFFSTORE',
		'SELECT',
		'SETBIT',
		'SETEX',
		'SETNX',
		'SETRANGE',
		'SHUTDOWN',
		'SINTER',
		'SINTERSTORE',
		'SISMEMBER',
		'SLAVEOF',
		'SLOWLOG',
		'SMEMBERS',
		'SMOVE',
		'SORT',
		'SPOP',
		'SRANDMEMBER',
		'SREM',
		'STRLEN',
		'SUBSCRIBE',
		'SUNION',
		'SUNIONSTORE',
		'SWAPDB',
		'SYNC',
		'TIME',
		'TOUCH',
		'TTL',
		'TYPE',
		'UNSUBSCRIBE',
		'UNLINK',
		'UNWATCH',
		'WAIT',
		'WATCH',
		'ZADD',
		'ZCARD',
		'ZCOUNT',
		'ZINCRBY',
		'ZINTERSTORE',
		'ZLEXCOUNT',
		'ZRANGE',
		'ZRANGEBYLEX',
		'ZREVRANGEBYLEX',
		'ZRANGEBYSCORE',
		'ZRANK',
		'ZREM',
		'ZREMRANGEBYLEX',
		'ZREMRANGEBYRANK',
		'ZREMRANGEBYSCORE',
		'ZREVRANGE',
		'ZREVRANGEBYSCORE',
		'ZREVRANK',
		'ZSCORE',
		'ZUNIONSTORE',
		'SCAN',
		'SSCAN',
		'HSCAN',
		'ZSCAN'
	],
	// 操作列表
	operators: [
		'MATCH'
	],
	// 函数列表
	builtinFunctions: [
		'FUNCTION'
	],
	builtinVariables: [
	],
	pseudoColumns: ['$ACTION', '$IDENTITY', '$ROWGUID', '$PARTITION'],
	tokenizer: {
		root: [{
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
			// 关键字（方法名等）分词
			[
				/[\w-@#$]+/,
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
