/*
	规则
	{
	  label: 'abs',
	  kind: monaco.languages.CompletionItemKind.Keyword,
	  // 光标在方法的括号中间
	  insertText: ABS(${1:expre}),
	  insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAssnippet,
	}
*/
// （自动提示）代码片段映射
const map = {
	// 默认
	_: '(${1:expre})',
	EXPRESS: '(${1:expre})',
	str: '(${1:str})',
	xy: '(${1:x}, ${2:y})',
	nm: '(${1:n}, ${2:m})',
	s2: '(${1:s1}, ${2:s2})',
	time2: '(${1:time1}, ${2:time2})',
	sn: '(${1:s}, ${2:n})',
	s: '(${1:s})',
	n: '(${1:n})',
	d: '(${1:d})',
	t: '(${1:t})',
	x: '(${1:x})',
	args: '(${1:arg0}, ${2:arg1})',
	// 特殊
	s_asterisk: '(${1:*})',
}
// 示例 (${1:参数}) - (${1:})
// (${1:arg0}, ${2:arg1})
export default{
	// 数字函数
	'ABS': map._,
	'ACOS': map.x,
	'ASIN': map.x,
	'ATAN': map.x,
	'ATAN2': map.nm,
	'AVG': map._,
	'CEIL': map.x,
	'CEILING': map.x,
	'COS': map.x,
	'COT': map.x,
	'COUNT': map._,
	'DEGREES': map.x,
	'EXP': map.x,
	'FLOOR': map.x,
	'GREATEST': map._,
	'LEAST': map._,
	'LN': map._,
	'LOG': map._,
	'LOG10': map.x,
	'LOG2': map.x,
	'MAX': map._,
	'MIN': map._,
	'MOD': map.xy,
	'POWER': map.xy,
	'POW': map.xy,
	'RADIANS': map.x,
	'ROUND': map.x,
	'SIGN': map.x,
	'SIN': map.x,
	'SQRT': map.x,
	'SUM': map._,
	'TAN': map.x,
	'TRUNCATE': map.xy,

	// 字符函数
	'ASCII': map._,
	'COUNT': map.s_asterisk,
	'CHAR_LENGTH': map.str,
	'CHARACTER_LENGTH': map._,
	'CONCAT': '(${1:s1}, ${2:s2...sn})',
	'CONCAT_WS': '(${1:s1}, ${2:s2...sn})',
	'FIRST': map._,
	'FIELD': map._,
	'FIND_IN_SET': map.s2,
	'FORMAT': '(${1:x}, ${2:n})',
	'INSERT': '(${1:s1}, ${2:x}, ${3:len}, ${4:s2})',
	'LOCATE': '(${1:s1}, ${2:s})',
	'LCASE': map.s,
	'LEFT': map.sn,
	'LOWER': map.s,
	'LAST': map._,
	'LPAD': '(${1:s1}, ${2:len}, ${3:s2})',
	'LTRIM': map.s,
	'MID': '(${1:s}, ${2:n}, ${3:len})',
	'POSITION': '(${1:s1} IN ${2:s})',
	'REPEAT': map.sn,
	'REPLACE': '(${1:s}, ${2:s1}, ${3:s2})',
	'REVERSE': map.s,
	'RIGHT': map.sn,
	'RPAD': '(${1:s1}, ${2:len}, ${3:s2})',
	'RTRIM': map.s,
	'SPACE': map.n,
	'STRCMP': map.sn,
	'SUBSTR': '(${1:s}, ${2:start}, ${3:length})',
	'SUBSTRING': '(${1:s}, ${2:start}, ${3:length})',
	'SUBSTRING_INDEX': '(${1:s}, ${2:delimiter}, ${3:number})',
	'TRIM': map.s,
	'UCASE': map.s,
	'UPPER': map.s,
	'STDEV': map._,
	'VARCHAR': map._,
	'VARCHAR2': map._,

	// 日期函数
	'ADDDATE': '(${1:d}, ${2:n})',
	'ADDTIME': '(${1:t}, ${2:n})',
	'DATEDIFF': '(${1:d1}, ${2:d2})',
	'DATE_ADD': '(${1:d}, ${2:expre})',
	'DATE_FORMAT': '(${1:d}, ${2:f})',
	'DATE_SUB': '(${1:date}, ${2:INTERVAL 2 DAY})',
	'DAY': map.d,
	'DAYNAME': map.d,
	'DAYOFMONTH': map.d,
	'DAYOFWEEK': map.d,
	'DAYOFYEAR': map.d,
	'EXTRACT': '(${1:type} FROM ${2:d})',
	'FROM_DAYS': map.n,
	'HOUR': map.t,
	'LAST_DAY': map.d,
	'MAKEDATE': '(${1:year}, ${2:day-of-year})',
	'MAKETIME': '(${1:hour}, ${2:minute}, 3:second)',
	'MICROSECOND': map.d,
	'MINUTE': map.t,
	'MONTHNAME': map.d,
	'MONTH': map.d,
	'PERIOD_ADD': '(${1:period}, ${2:number})',
	'PERIOD_DIFF': '(${1:period1}, ${2:period2})',
	'QUARTER': map.d,
	'SECOND': map.t,
	'SEC_TO_TIME': map.s,
	'STR_TO_DATE': '(${1:string}, ${2:format_mask})',
	'SUBDATE': '(${1:d}, ${2:n})',
	'SUBTIME': '(${1:t}, ${2:n})',
	'TIME': map._,
	'TIME_FORMAT': '(${1:t}, ${2:f})',
	'TIME_TO_SEC': map.t,
	'TIMEDIFF': map.time2,
	'TIMESTAMP': '(${1:expre}, ${2:interval})',
	'TO_DAYS': map.d,
	'WEEK': map.d,
	'WEEKDAY': map.d,
	'WEEKOFYEAR': map.d,
	'YEAR': map.d,
	'YEARWEEK': '(${1:date}, ${2:mode})',


	// 高级函数
	'BIN': map.x,
	'BINARY': map.s,
	'CAST': '(${1:x} AS ${2:type})',
	'COALESCE': '(${1:expr1}, ${2:expr2, ...., expr_n})',
	'CONV': '(${1:x}, ${2:f1}, ${3:f2})',
	'CONVERT': '(${1:s}${2: USING cs})',
	'IF': '(${1:expre}, ${2:val1}, ${3:val2})',
	'IFNULL': '(${1:val1}, ${val2})',
	'ISNULL': map._,
	'NULLIF': '(${1:expre1}, ${2:expre2})',




}