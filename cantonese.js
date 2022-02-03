const { match } = require('assert');
const fs = require('fs');
const path = require('path');

const kw_print = "畀我睇下"
const kw_endprint = "点样先"
const kw_exit = "收工"
const kw_in = "喺"
const kw_elif = "定系"
const kw_turtle_beg = "老作一下"
const kw_type = "起底"
const kw_assign = "讲嘢"
const kw_class_def = "咩系"
const kw_else_or_not = "唔系"
const kw_is = "系"
const kw_if = "如果"
const kw_then = "嘅话"
const kw_do = "->"
const kw_begin = "{"
const kw_end = "}"
const kw_pass = "咩都唔做"
const kw_while_do = "落操场玩跑步"
const kw_function = "$"
const kw_call = "用下"
const kw_import = "使下"
const kw_func_begin = "要做咩"
const kw_func_end = "搞掂"
const kw_is_2 = "就"
const kw_assert = "谂下"
const kw_class_assign = "佢嘅"
const kw_while = "玩到"
const kw_whi_end = "为止"
const kw_return = "还数"
const kw_try = "执嘢"
const kw_except = "揾到"
const kw_finally = "执手尾"
const kw_raise = "掟个"
const kw_raise_end = "来睇下"
const kw_from = "从"
const kw_to = "行到"
const kw_endfor = "行晒"
const kw_extend = "佢个老豆叫"
const kw_method = "佢识得"
const kw_endclass = "明白未啊"
const kw_cmd = "落Order"
const kw_break = "饮茶先啦"
const kw_lst_assign = "拍住上"
const kw_set_assign = "埋堆"
const kw_global_set = "Share下"
const kw_is_3 = "係"
const kw_exit_1 = "辛苦晒啦"
const kw_exit_2 = "同我躝"
const kw_false = "唔啱"
const kw_true = "啱"
const kw_none = "冇"
const kw_stackinit = "有条仆街叫"
const kw_push = "顶你"
const kw_pop = "丢你"
const kw_model = "嗌"
const kw_mod_new = "过嚟估下"
const kw_class_init = "佢有啲咩"
const kw_self = "自己嘅"
const kw_call_begin = "下"
const kw_get_value = "@" 
const kw_del = "delete下"
const kw_match = "match下"
const kw_case = "撞见"

const keywords = [
    kw_print,
    kw_endprint,
    kw_exit,
    kw_in,
    kw_elif,
    kw_turtle_beg,
    kw_type,
    kw_assign,
    kw_class_def,
    kw_else_or_not,
    kw_is,
    kw_if,
    kw_then,
    kw_do,
    kw_begin,
    kw_end,
    kw_pass,
    kw_while_do,
    kw_function,
    kw_call,
    kw_import,
    kw_func_begin,
    kw_func_end,
    kw_is_2,
    kw_assert,
    kw_class_assign,
    kw_while,
    kw_whi_end,
    kw_return,
    kw_try,
    kw_except,
    kw_finally,
    kw_raise,
    kw_raise_end,
    kw_from,
    kw_to,
    kw_endfor,
    kw_extend,
    kw_method,
    kw_endclass,
    kw_cmd,
    kw_break,
    kw_lst_assign,
    kw_set_assign,
    kw_global_set,
    kw_is_3,
    kw_exit_1,
    kw_exit_2,
    kw_false,
    kw_true,
    kw_none,
    kw_stackinit,
    kw_push,
    kw_pop,
    kw_model,
    kw_mod_new,
    kw_class_init,
    kw_self,
    kw_call_begin,
    kw_get_value,
    kw_match,
    kw_case,
    kw_del,
]

const re_id = /^[_\d\w]+|^[\u4e00-\u9fa5]+/;
const re_str = /\"([^\\\"]|\\.)*\"|\'([^\\\']|\\.)*\'/
const re_callfunc = /[&](.*?)[)]/;
const re_number = /^0[xX][0-9a-fA-F]*(\.[0-9a-fA-F]*)?([pP][+\-]?[0-9]+)?|^[0-9]*(\.[0-9]*)?([eE][+\-]?[0-9]+)?/;
const re_expr = /[|](.*?)[|]/;
const re_comment = /(?:^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/g;

/// Main : test
var code = "畀我睇下 'Hello' 点样先？"
/*
let f_path = "../../examples/basic/assign.cantonese"
let file = path.resolve(__dirname, f_path);

fs.readFile(file, {encoding : 'utf8'}, (err, _code) => {
    if (err) throw err;
    code = _code.replace(re_comment, '\n');
    
    while(true) {
        tk = Lexical();
        console.log(tk);
        if(tk['type'] === "EOF") {
            break;
        }
    }
    
});
*/

while(true) {
    tk = Lexical();
    console.log(tk);
    if(tk['type'] === "EOF") {
        break;
    }
}

function is_white_space(c) {
    return ['\t', '\n', '\v', '\f', '\r', ' '].includes(c);
}

function is_new_line(c) {
    return ['\r', '\n'].includes(c);
}

function isIdent(c) {
    return re_id.test(c);
}

function isdigit(c) {
    return /^[0-9]+.?[0-9]*$/.test(c);
}

function Lexical() {
    function next(n) {
        code = code.slice(n);
    }

    function check(s) {
        return code.startsWith(s);
    }

    function scan(pattern) {
        m = code.match(pattern);
        console.log(m);
        if (m != null) {
            next(m[0].length);
            return m;
        }
    }

    function scan_idenfier() {
        return scan(re_id);
    }

    function scan_number() {
        return scan(re_number);
    }

    function scan_short_string() {
        return scan(re_str);
    }

    function scan_callfunc() {
        return scan(re_callfunc);
    }

    function scan_expr() {
        return scan(re_expr);
    }

    function skip_whitespace() {
        while (code.length > 0) {
            if (check('\r\n') || check('\n\r')) {
                next(2);
                line += 1;
            } else if (is_new_line(code[0])) {
                next(1);
                line += 1
            } else if (check('?') || check('？') || check(':') || check('：')) {
                next(1);
            } else if (is_white_space(code[0])) {
                next(1);
            } else {
                break;
            }
        }
    }

    let line = 0;
    skip_whitespace();
    if(code.length == 0) {
        return {
            lineno : line,
            type : "EOF",
            value : "EOF",
        };
    }

    c = code[0];

    if (c == '.' || isdigit()) {
        num = scan_number();
        return {lineno : line, type : 'number',
        value : num,};
    } else if (isIdent(c)) {
        token = scan_idenfier();
        if(keywords.includes(token)) {
            return {lineno : line, type : 'keywords', 
            value : token, };
        } else {
        return {lineno : line, type : 'identifier', 
            value : token,};
        }
    } else if (c == '&') {
        return {lineno : line, type : 'callfunc', 
                value : scan_callfunc()};
    } else if (c == '|') {
        return {lineno : line, type : 'expr', 
                value : scan_expr()};
    }
    else if (['\'', '\"'].includes(c)) {
        return {lineno : line, type : 'string', 
        value : scan_short_string()};
    }
    else {
        return "睇唔明你嘅token" + c;
    }
}