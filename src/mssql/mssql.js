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
	autoClosingPairs: [
		{
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
	surroundingPairs: [
		{
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
	brackets: [
		{
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
		'ADD',
		'ALTER',
		'AND',
		'AS',
		'ASC',
		'AUTHORIZATION',
		'BACKUP',
		'BEGIN',
		'BETWEEN',
		'BREAK',
		'BROWSE',
		'BULK',
		'BY',
		'CASCADE',
		'CASE',
		'CHECK',
		'CHECKPOINT',
		'CLOSE',
		'CLUSTERED',
		'COALESCE',
		'COLLATE',
		'COLUMN',
		'COMMIT',
		'COMPUTE',
		'CONSTRAINT',
		'CONTAINS',
		'CONTAINSTABLE',
		'CONTINUE',
		'CONVERT',
		'CREATE',
		'CROSS',
		'CURRENT',
		'CURRENT_DATE',
		'CURRENT_TIME',
		'CURRENT_TIMESTAMP',
		'CURRENT_USER',
		'CURSOR',
		'DATABASE',
		'DBCC',
		'DEALLOCATE',
		'DECLARE',
		'DEFAULT',
		'DELETE',
		'DENY',
		'DESC',
		'DISK',
		'DISTINCT',
		'DISTRIBUTED',
		'DOUBLE',
		'DROP',
		'DUMP',
		'ELSE',
		'END',
		'ERRLVL',
		'ESCAPE',
		'EXCEPT',
		'EXEC',
		'EXECUTE',
		'EXISTS',
		'EXIT',
		'EXTERNAL',
		'FETCH',
		'FILE',
		'FILLFACTOR',
		'FOR',
		'FOREIGN',
		'FREETEXT',
		'FREETEXTTABLE',
		'FROM',
		'FULL',
		'FUNCTION',
		'GOTO',
		'GRANT',
		'GROUP',
		'HAVING',
		'HOLDLOCK',
		'IDENTITY',
		'IDENTITY_INSERT',
		'IDENTITYCOL',
		'IF',
		'IN',
		'INDEX',
		'INNER',
		'INSERT',
		'INTERSECT',
		'INTO',
		'IS',
		'JOIN',
		'KEY',
		'KILL',
		'LEFT',
		'LIKE',
		'LINENO',
		'LOAD',
		'MERGE',
		'NATIONAL',
		'NOCHECK',
		'NONCLUSTERED',
		'NOT',
		'NULL',
		'NULLIF',
		'OF',
		'OFF',
		'OFFSETS',
		'ON',
		'OPEN',
		'OPENDATASOURCE',
		'OPENQUERY',
		'OPENROWSET',
		'OPENXML',
		'OPTION',
		'OR',
		'ORDER',
		'OUTER',
		'OVER',
		'PERCENT',
		'PIVOT',
		'PLAN',
		'PRECISION',
		'PRIMARY',
		'PRINT',
		'PROC',
		'PROCEDURE',
		'PUBLIC',
		'RAISERROR',
		'READ',
		'READTEXT',
		'RECONFIGURE',
		'REFERENCES',
		'REPLICATION',
		'RESTORE',
		'RESTRICT',
		'RETURN',
		'REVERT',
		'REVOKE',
		'RIGHT',
		'ROLLBACK',
		'ROWCOUNT',
		'ROWGUIDCOL',
		'RULE',
		'SAVE',
		'SCHEMA',
		'SECURITYAUDIT',
		'SELECT',
		'SEMANTICKEYPHRASETABLE',
		'SEMANTICSIMILARITYDETAILSTABLE',
		'SEMANTICSIMILARITYTABLE',
		'SESSION_USER',
		'SET',
		'SETUSER',
		'SHUTDOWN',
		'SOME',
		'STATISTICS',
		'SYSTEM_USER',
		'TABLE',
		'TABLESAMPLE',
		'TEXTSIZE',
		'THEN',
		'TO',
		'TOP',
		'TRAN',
		'TRANSACTION',
		'TRIGGER',
		'TRUNCATE',
		'TRY_CONVERT',
		'TSEQUAL',
		'UNION',
		'UNIQUE',
		'UNPIVOT',
		'UPDATE',
		'UPDATETEXT',
		'USE',
		'USER',
		'VALUES',
		'VARYING',
		'VIEW',
		'WAITFOR',
		'WHEN',
		'WHERE',
		'WHILE',
		'WITH',
		'WITHIN GROUP',
		'WRITETEXT'
	],
	// 操作列表
	operators: [
		'AND',
		'BETWEEN',
		'IN',
		'LIKE',
		'NOT',
		'OR',
		'IS',
		'NULL',
		'INTERSECT',
		'UNION',
		'INNER',
		'JOIN',
		'LEFT',
		'OUTER',
		'RIGHT'
	],
	builtinFunctions:[
		"AVG", 'COUNT', 'MAX', 'MIN', 'SUM','CUME_DIST', 'DENSE_RANK', 'FIRST_VALUE', 'LAG', 'LAST_VALUE', 'LEAD', 'NTH_VALUE',
		'PERCENTILE_CONT', 'PERCENTILE_DISC', 'PERCENT_RANK', 'RANK', 'ROW_NUMBER','CAST', 'CONVERT', 'PARSE','DATEADD',
		'DATEDIFF', 'DATEFROMPARTS', 'DATENAME', 'DATEPART', 'GETDATE', 'GETUTCDATE',
		'SYSDATETIME', 'SYSDATETIMEOFFSET', 'SYSUTCDATETIME', 'TIMEFROMPARTS', 'TODATETIMEOFFSET','CHOOSE', 'IIF',
		'ABS', 'ACOS', 'ASIN', 'ATAN', 'ATN2', 'CEILING', 'COS', 'COT', 'DEGREES', 'EXP', 'FLOOR', 'LOG', 'LOG10',
		'PI', 'POWER', 'RADIANS', 'RAND', 'ROUND', 'SIGN', 'SIN', 'SQRT', 'SQUARE', 'TAN','APP_NAME', 'APPLOCK_MODE', 'APPLOCK_TEST', 'ASSEMBLYPROPERTY', 'COL_LENGTH',
		'COL_NAME', 'COLUMNPROPERTY', 'DATABASEPROPERTYEX', 'DB_ID', 'DB_NAME', 'FILE_ID', 'FILE_IDEX', 'FILE_NAME', 'FILEGROUP_ID',
		'FILEGROUP_NAME', 'FILEGROUPPROPERTY', 'FILEPROPERTY', 'FULLTEXTCATALOGPROPERTY', 'FULLTEXTSERVICEPROPERTY', 'INDEX_COL',
		'INDEXKEY_PROPERTY', 'INDEXPROPERTY', 'IS_MEMBER', 'IS_OBJECTSIGNED', 'IS_ROLEMEMBER', 'OBJECT_DEFINITION', 'OBJECT_ID', 'OBJECT_NAME',
		'OBJECT_SCHEMA_NAME', 'OBJECTPROPERTY', 'ORIGINAL_DB_NAME', 'PARSENAME', 'SCHEMA_ID', 'SCHEMA_NAME', 'SCOPE_IDENTITY',
		'SERVERPROPERTY', 'SESSION_USER', 'STATS_DATE', 'TYPE_ID', 'TYPE_NAME', 'TYPEPROPERTY', 'USER_ID', 'USER_NAME',
		'DENSE_RANK', 'NTILE', 'RANK', 'ROW_NUMBER','OPENQUERY', 'OPENROWSET', 'OPENDATASOURCE','APP_NAME',
		'APPLOCK_MODE', 'APPLOCK_TEST', 'ASSEMBLYPROPERTY', 'COL_LENGTH', 'COL_NAME', 'COLUMNPROPERTY', 'DATABASEPROPERTYEX', 'DB_ID', 'DB_NAME',
		'FILE_ID', 'FILE_IDEX', 'FILE_NAME', 'FILEGROUP_ID', 'FILEGROUP_NAME', 'FILEGROUPPROPERTY', 'FILEPROPERTY', 'FULLTEXTCATALOGPROPERTY',
		'FULLTEXTSERVICEPROPERTY', 'INDEX_COL', 'INDEXKEY_PROPERTY', 'INDEXPROPERTY', 'IS_MEMBER', 'IS_OBJECTSIGNED', 'IS_ROLEMEMBER',
		'OBJECT_DEFINITION', 'OBJECT_ID', 'OBJECT_NAME', 'OBJECT_SCHEMA_NAME', 'OBJECTPROPERTY', 'ORIGINAL_DB_NAME', 'PARSENAME', 'SCHEMA_ID', 'SCHEMA_NAME',
		'SCOPE_IDENTITY', 'SERVERPROPERTY', 'SESSION_USER', 'STATS_DATE', 'TYPE_ID', 'TYPE_NAME', 'TYPEPROPERTY', 'USER_ID', 'USER_NAME'
	],
	builtinVariables:['@@CONNECTIONS', '@@CPU_BUSY', '@@IDLE', '@@IO_BUSY', '@@LANGID', '@@LANGUAGE', '@@LOCK_TIMEOUT', '@@MAX_CONNECTIONS',
		'@@MAX_PRECISION', '@@NESTLEVEL', '@@OPTIONS', '@@PACK_RECEIVED', '@@PACK_SENT', '@@PACKET_ERRORS', '@@PROCID', '@@REMSERVER', '@@SERVERNAME',
		'@@SERVICENAME', '@@SPID', '@@TEXTSIZE', '@@TIMETICKS', '@@TOTAL_ERRORS', '@@TOTAL_READ', '@@TOTAL_WRITE', '@@TRANCOUNT', '@@VERSION'],
	pseudoColumns: ['$IDENTITY','$ROWGUID'],
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
