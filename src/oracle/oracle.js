// The MIT License (MIT)
//
// Copyright (c) Celian Garcia and Augustin Husson @ Amadeus IT Group
//
// 参考 https://docs.oracle.com/cd/B19306_01/appdev.102/b14354/appb.htm#BABIGBBI

// noinspection JSUnusedGlobalSymbols
export const languageConfiguration = {
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
		'oracle',
		'ACCESS',
		'ELSE',
		'MODIFY',
		'START',
		'ADD',
		'EXCLUSIVE',
		'NOAUDIT',
		'SELECT',
		'ALL',
		'EXISTS',
		'NOCOMPRESS',
		'SESSION',
		'ALTER',
		'FILE',
		'NOT',
		'SET',
		'AND',
		'FLOAT',
		'NOTFOUND',
		'SHARE',
		'ANY',
		'FOR',
		'NOWAIT',
		'SIZE',
		'ARRAYLEN',
		'FROM',
		'NULL',
		'SMALLINT',
		'AS',
		'GRANT',
		'NUMBER',
		'SQLBUF',
		'ASC',
		'GROUP',
		'OF',
		'SUCCESSFUL',
		'AUDIT',
		'HAVING',
		'OFFLINE',
		'SYNONYM',
		'BETWEEN',
		'IDENTIFIED',
		'ON',
		'SYSDATE',
		'BY',
		'IMMEDIATE',
		'ONLINE',
		'TABLE',
		'CHAR',
		'IN',
		'OPTION',
		'THEN',
		'CHECK',
		'INCREMENT',
		'OR',
		'TO',
		'CLUSTER',
		'INDEX',
		'ORDER',
		'TRIGGER',
		'COLUMN',
		'INITIAL',
		'PCTFREE',
		'UID',
		'COMMENT',
		'INSERT',
		'PRIOR',
		'UNION',
		'COMPRESS',
		'INTEGER',
		'PRIVILEGES',
		'UNIQUE',
		'CONNECT',
		'INTERSECT',
		'PUBLIC',
		'UPDATE',
		'CREATE',
		'INTO',
		'RAW',
		'USER',
		'CURRENT',
		'IS',
		'RENAME',
		'VALIDATE',
		'DATE',
		'LEVEL',
		'RESOURCE',
		'VALUES',
		'DECIMAL',
		'LIKE',
		'REVOKE',
		'VARCHAR',
		'DEFAULT',
		'LOCK',
		'ROW',
		'VARCHAR2',
		'DELETE',
		'LONG',
		'ROWID',
		'VIEW',
		'DESC',
		'MAXEXTENTS',
		'ROWLABEL',
		'WHENEVER',
		'DISTINCT',
		'MINUS',
		'ROWNUM',
		'WHERE',
		'DROP',
		'MODE',
		'ROWS',
		'WITH'
	],
	// 操作列表
	operators: [
		// Logical
		'ALL',
		'AND',
		'ANY',
		'BETWEEN',
		'EXISTS',
		'IN',
		'LIKE',
		'NOT',
		'OR',
		'SOME',
		// Set
		'EXCEPT',
		'INTERSECT',
		'UNION',
		// Join
		'APPLY',
		'CROSS',
		'FULL',
		'INNER',
		'JOIN',
		'LEFT',
		'OUTER',
		'RIGHT',
		// Predicates
		'CONTAINS',
		'FREETEXT',
		'IS',
		'NULL',
		// Pivoting
		'PIVOT',
		'UNPIVOT',
		// Merging
		'MATCHED'
	],
	// 函数列表
	builtinFunctions: [
		'ABS',
		'ACOS',
		'ADD_MONTHS',
		'ASCII',
		'ASCIISTR',
		'ASIN',
		'ATAN',
		'ATAN2',
		'AVG',
		'BFILENAME',
		'BIN_TO_NUM',
		'BITAND',
		'CARDINALITY',
		'CASE',
		'CAST',
		'CEIL',
		'CHARTOROWID',
		'CHR',
		'COALESCE',
		'COMPOSE',
		'CONCAT',
		'CONVERT',
		'CORR',
		'COS',
		'COSH',
		'COUNT',
		'COVAR_POP',
		'COVAR_SAMP',
		'CUME_DIST',
		'CURRENT_DATE',
		'CURRENT_TIMESTAMP',
		'DBTIMEZONE',
		'DECODE',
		'DECOMPOSE',
		'DENSE_RANK',
		'DUMP',
		'EMPTY_BLOB',
		'EMPTY_CLOB',
		'EXP',
		'EXTRACT',
		'FIRST_VALUE',
		'FLOOR',
		'FROM_TZ',
		'GREATEST',
		'GROUP_ID',
		'HEXTORAW',
		'INITCAP',
		'INSTR',
		'INSTR2',
		'INSTR4',
		'INSTRB',
		'INSTRC',
		'LAG',
		'LAST_DAY',
		'LAST_VALUE',
		'LEAD',
		'LEAST',
		'LENGTH',
		'LENGTH2',
		'LENGTH4',
		'LENGTHB',
		'LENGTHC',
		'LISTAGG',
		'LN',
		'LNNVL',
		'LOCALTIMESTAMP',
		'LOG',
		'LOWER',
		'LPAD',
		'LTRIM',
		'MAX',
		'MEDIAN',
		'MIN',
		'MOD',
		'MONTHS_BETWEEN',
		'NANVL',
		'NCHR',
		'NEW_TIME',
		'NEXT_DAY',
		'NTH_VALUE',
		'NULLIF',
		'NUMTODSINTERVAL',
		'NUMTOYMINTERVAL',
		'NVL',
		'NVL2',
		'POWER',
		'RANK',
		'RAWTOHEX',
		'REGEXP_COUNT',
		'REGEXP_INSTR',
		'REGEXP_REPLACE',
		'REGEXP_SUBSTR',
		'REMAINDER',
		'REPLACE',
		'ROUND',
		'ROWNUM',
		'RPAD',
		'RTRIM',
		'SESSIONTIMEZONE',
		'SIGN',
		'SIN',
		'SINH',
		'SOUNDEX',
		'SQRT',
		'STDDEV',
		'SUBSTR',
		'SUM',
		'SYS_CONTEXT',
		'SYSDATE',
		'SYSTIMESTAMP',
		'TAN',
		'TANH',
		'TO_CHAR',
		'TO_CLOB',
		'TO_DATE',
		'TO_DSINTERVAL',
		'TO_LOB',
		'TO_MULTI_BYTE',
		'TO_NCLOB',
		'TO_NUMBER',
		'TO_SINGLE_BYTE',
		'TO_TIMESTAMP',
		'TO_TIMESTAMP_TZ',
		'TO_YMINTERVAL',
		'TRANSLATE',
		'TRIM',
		'TRUNC',
		'TZ_OFFSET',
		'UID',
		'UPPER',
		'USER',
		'USERENV',
		'VAR_POP',
		'VAR_SAMP',
		'VARIANCE',
		'VSIZE'
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
			[/N'/, {
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
