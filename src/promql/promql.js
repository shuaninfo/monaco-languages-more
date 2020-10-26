// The MIT License (MIT)
//
// Copyright (c) Celian Garcia and Augustin Husson @ Amadeus IT Group
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

export const languageConfiguration = {
	// the default separators except `@$`
	wordPattern: /(-?\d*\.\d\w*)|([^`~!#%^&*()\-=+\[{\]}\\|;:'",.<>\/?\s]+)/g,
	// Not possible to make comments in PromQL syntax
	comments: {
		lineComment: '#',
	},
	brackets: [
		['{', '}'],
		['[', ']'],
		['(', ')'],
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
			open: '\'',
			close: '\''
		},
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
			open: '\'',
			close: '\''
		},
		{
			open: '<',
			close: '>'
		},
	],
	folding: {}
};

// PromQL Aggregation Operators
// (https://prometheus.io/docs/prometheus/latest/querying/operators/#aggregation-operators)
const aggregations = [
	'sum',
	'min',
	'max',
	'avg',
	'group',
	'stddev',
	'stdvar',
	'count',
	'count_values',
	'bottomk',
	'topk',
	'quantile'
];

// PromQL functions
// (https://prometheus.io/docs/prometheus/latest/querying/functions/)

// PromQL specific functions: Aggregations over time
// (https://prometheus.io/docs/prometheus/latest/querying/functions/#aggregation_over_time)
const aggregationsOverTime = [];
for (const agg of aggregations) {
	aggregationsOverTime.push(agg + '_over_time');
}

// PromQL vector matching + the by and without clauses
// (https://prometheus.io/docs/prometheus/latest/querying/operators/#vector-matching)
const vectorMatching = [
	'on',
	'ignoring',
	'group_right',
	'group_left',
	'by',
	'without',
];
// Produce a regex matching elements : (elt1|elt2|...)
const vectorMatchingRegex = `(${vectorMatching.reduce((prev, curr) => `${prev}|${curr}`)})`;

// PromQL Operators
// (https://prometheus.io/docs/prometheus/latest/querying/operators/)

// PromQL offset modifier
// (https://prometheus.io/docs/prometheus/latest/querying/basics/#offset-modifier)
const offsetModifier = [
	'offset',
];

// Merging all the keywords in one list
const keywords = aggregations.concat(aggregationsOverTime).concat(vectorMatching).concat(
	offsetModifier);

// noinspection JSUnusedGlobalSymbols
export const language = {
	ignoreCase: false,
	defaultToken: '',
	tokenPostfix: '.sql',

	keywords: ['promql', ...keywords],

	operators: [
		'+', '-', '*', '/', '%', '^',
		'==', '!=', '>', '<', '>=', '<=',
		'AND', 'OR', 'UNLESS',
	],
	builtinFunctions: [
		'ABS',
		'ABSENT',
		'CEIL',
		'CHANGES',
		'CLAMP_MAX',
		'CLAMP_MIN',
		'DAY_OF_MONTH',
		'DAY_OF_WEEK',
		'DAYS_IN_MONTH',
		'DELTA',
		'DERIV',
		'EXP',
		'FLOOR',
		'HISTOGRAM_QUANTILE',
		'HOLT_WINTERS',
		'HOUR',
		'IDELTA',
		'INCREASE',
		'IRATE',
		'LABEL_JOIN',
		'LABEL_REPLACE',
		'LN',
		'LOG2',
		'LOG10',
		'MINUTE',
		'MONTH',
		'PREDICT_LINEAR',
		'RATE',
		'RESETS',
		'ROUND',
		'SCALAR',
		'SORT',
		'SORT_DESC',
		'SQRT',
		'TIME',
		'TIMESTAMP',
		'VECTOR',
		'YEAR',
	],
	vectorMatching: vectorMatchingRegex,

	// we include these common regular expressions
	symbols: /[=><!~?:&|+\-*\/^%]+/,
	escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
	digits: /\d+(_+\d+)*/,
	octaldigits: /[0-7]+(_+[0-7]+)*/,
	binarydigits: /[0-1]+(_+[0-1]+)*/,
	hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,
	integersuffix: /(ll|LL|u|U|l|L)?(ll|LL|u|U|l|L)?/,
	floatsuffix: /[fFlL]?/,

	// The main tokenizer for our languages
	tokenizer: {
		root: [

			// 'by', 'without' and vector matching
			[/@vectorMatching\s*(?=\()/, 'type', '@clauses'],

			// labels
			[/[a-z_]\w*(?=\s*(=|!=|=~|!~))/, 'tag'],

			// comments
			[/(^#.*$)/, 'comment'],

			// all keywords have the same color
			[/[a-zA-Z_]\w*/, {
				cases: {
					'@keywords': 'type',
					'@default': 'identifier'
				}
			}],

			// strings
			[/"([^"\\]|\\.)*$/, 'string.invalid'], // non-teminated string
			[/'([^'\\]|\\.)*$/, 'string.invalid'], // non-teminated string
			[/"/, 'string', '@string_double'],
			[/'/, 'string', '@string_single'],
			[/`/, 'string', '@string_backtick'],

			// whitespace
			{
				include: '@whitespace'
			},

			// delimiters and operators
			[/[{}()\[\]]/, '@brackets'],
			[/[<>](?!@symbols)/, '@brackets'],
			[/@symbols/, {
				cases: {
					'@operators': 'delimiter',
					'@default': ''
				}
			}],

			// numbers
			[/\d+[smhdwy]/, 'number'], // 24h, 5m are often encountered in prometheus
			[/\d*\d+[eE]([\-+]?\d+)?(@floatsuffix)/, 'number.float'],
			[/\d*\.\d+([eE][\-+]?\d+)?(@floatsuffix)/, 'number.float'],
			[/0[xX][0-9a-fA-F']*[0-9a-fA-F](@integersuffix)/, 'number.hex'],
			[/0[0-7']*[0-7](@integersuffix)/, 'number.octal'],
			[/0[bB][0-1']*[0-1](@integersuffix)/, 'number.binary'],
			[/\d[\d']*\d(@integersuffix)/, 'number'],
			[/\d(@integersuffix)/, 'number'],
		],

		string_double: [ // eslint-disable-line @typescript-eslint/camelcase
			[/[^\\"]+/, 'string'],
			[/@escapes/, 'string.escape'],
			[/\\./, 'string.escape.invalid'],
			[/"/, 'string', '@pop']
		],

		string_single: [ // eslint-disable-line @typescript-eslint/camelcase
			[/[^\\']+/, 'string'],
			[/@escapes/, 'string.escape'],
			[/\\./, 'string.escape.invalid'],
			[/'/, 'string', '@pop']
		],

		string_backtick: [ // eslint-disable-line @typescript-eslint/camelcase
			[/[^\\`$]+/, 'string'],
			[/@escapes/, 'string.escape'],
			[/\\./, 'string.escape.invalid'],
			[/`/, 'string', '@pop']
		],

		clauses: [
			[/[^(,)]/, 'tag'],
			[/\)/, 'identifier', '@pop']
		],

		whitespace: [
			[/[ \t\r\n]+/, 'white'],
		],
	},
};
