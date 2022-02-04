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
const tr_kw_print = "畀我睇下"
const tr_kw_endprint = "點樣先"
const tr_kw_exit = "收工"
const tr_kw_in = "喺"
const tr_kw_elif = "定系"
const tr_kw_turtle_beg = "老作一下"
const tr_kw_type = "起底"
const tr_kw_assign = "講嘢"
const tr_kw_class_def = "咩系"
const tr_kw_else_or_not = "唔系"
const tr_kw_is = "系"
const tr_kw_if = "如果"
const tr_kw_then = "嘅話"
const tr_kw_do = "->"
const tr_kw_begin = "{"
const tr_kw_end = "}"
const tr_kw_pass = "咩都唔做"
const tr_kw_while_do = "落操場玩跑步"
const tr_kw_function = "$"
const tr_kw_call = "用下"
const tr_kw_import = "使下"
const tr_kw_func_begin = "要做咩"
const tr_kw_func_end = "搞掂"
const tr_kw_is_2 = "就"
const tr_kw_assert = "諗下"
const tr_kw_class_assign = "佢嘅"
const tr_kw_while = "玩到"
const tr_kw_whi_end = "為止"
const tr_kw_return = "還數"
const tr_kw_try = "執嘢"
const tr_kw_except = "揾到"
const tr_kw_finally = "執手尾"
const tr_kw_raise = "掟個"
const tr_kw_raise_end = "來睇下"
const tr_kw_from = "從"
const tr_kw_to = "行到"
const tr_kw_endfor = "行曬"
const tr_kw_extend = "佢個老豆叫"
const tr_kw_method = "佢識得"
const tr_kw_endclass = "明白未啊"
const tr_kw_cmd = "落Order"
const tr_kw_break = "飲茶先啦"
const tr_kw_lst_assign = "拍住上"
const tr_kw_set_assign = "埋堆"
const tr_kw_global_set = "Share下"
const tr_kw_is_3 = "係"
const tr_kw_exit_1 = "辛苦曬啦"
const tr_kw_exit_2 = "同我躝"
const tr_kw_false = "唔啱"
const tr_kw_true = "啱"
const tr_kw_none = "冇"
const tr_kw_stackinit = "有條仆街叫"
const tr_kw_push = "頂你"
const tr_kw_pop = "丟你"
const tr_kw_model = "嗌"
const tr_kw_mod_new = "過嚟估下"
const tr_kw_class_init = "佢有啲咩"
const tr_kw_self = "自己嘅"
const tr_kw_call_begin = "下"
const tr_kw_get_value = "@"
const tr_kw_del = "delete下"
const tr_kw_match = "match下"
const tr_kw_case = "撞見"

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
    tr_kw_print,
    tr_kw_endprint,
    tr_kw_exit,
    tr_kw_in,
    tr_kw_elif,
    tr_kw_turtle_beg,
    tr_kw_type,
    tr_kw_assign,
    tr_kw_class_def,
    tr_kw_else_or_not,
    tr_kw_is,
    tr_kw_if,
    tr_kw_then,
    tr_kw_do,
    tr_kw_begin,
    tr_kw_end,
    tr_kw_pass,
    tr_kw_while_do,
    tr_kw_function,
    tr_kw_call,
    tr_kw_import,
    tr_kw_func_begin,
    tr_kw_func_end,
    tr_kw_is_2,
    tr_kw_assert,
    tr_kw_class_assign,
    tr_kw_while,
    tr_kw_whi_end,
    tr_kw_return,
    tr_kw_try,
    tr_kw_except,
    tr_kw_finally,
    tr_kw_raise,
    tr_kw_raise_end,
    tr_kw_from,
    tr_kw_to,
    tr_kw_endfor,
    tr_kw_extend,
    tr_kw_method,
    tr_kw_endclass,
    tr_kw_cmd,
    tr_kw_break,
    tr_kw_lst_assign,
    tr_kw_set_assign,
    tr_kw_global_set,
    tr_kw_is_3,
    tr_kw_exit_1,
    tr_kw_exit_2,
    tr_kw_false,
    tr_kw_true,
    tr_kw_none,
    tr_kw_stackinit,
    tr_kw_push,
    tr_kw_pop,
    tr_kw_model,
    tr_kw_mod_new,
    tr_kw_class_init,
    tr_kw_self,
    tr_kw_call_begin,
    tr_kw_get_value,
    tr_kw_match,
    tr_kw_case
]

const op = {
    "相加" : "矩阵.matrix_addition",
    "加" : "+",
    "减" : "-",
    "乘" : "*",
    "整除" : "//",
    "除" : "/",
    "余" : "%",
    "异或" : "^",
    "取反" : "~",
    "左移" : "<<",
    "右移" : ">>",
    "与" : "&",
    "或者" : "||",
    "或" : "|",
    "系" : "===",
    "同埋" : "&&",
    "自己嘅" : "this.",
    "比唔上" : "<",
    "喺" : "in"
};

const re_id = /^[_\d\w]+|^[\u4e00-\u9fa5]+/;
const re_str = /\"([^\\\"]|\\.)*\"|\'([^\\\']|\\.)*\'/
const re_callfunc = /[&](.*?)[)]/;
const re_number = /^0[xX][0-9a-fA-F]*(\.[0-9a-fA-F]*)?([pP][+\-]?[0-9]+)?|^[0-9]*(\.[0-9]*)?([eE][+\-]?[0-9]+)?/;
const re_expr = /[|](.*?)[|]/;
const re_comment = /(?:^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/g;
const re_js_expr =  /[~][\S\s]*[#]/

/// Main : test
var code = "讲嘢 a 係 1\n畀我睇下 a 点样先?";
var TO_JS_CODE = "";
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
var tokens = []
var node = []
while(true) {
    tk = Lexical();
    tokens.push(tk);
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

    let line = 1;
    skip_whitespace();
    if(code.length == 0) {
        return {
            lineno : line,
            type : "EOF",
            value : "EOF",
        };
    }

    c = code[0];

    if (c == '.' || isdigit(c)) {
        num = scan_number()[0];
        return {lineno : line, type : 'number',
        value : num,};
    } else if (isIdent(c)) {
        token = scan_idenfier()[0];
        if(keywords.includes(token)) {
            return {lineno : line, type : 'keywords', 
            value : token, };
        } else {
        return {lineno : line, type : 'identifier', 
            value : token,};
        }
    } else if (c == '&') {
        return {lineno : line, type : 'callfunc', 
                value : scan_callfunc()[0]};
    } else if (c == '|') {
        return {lineno : line, type : 'expr', 
                value : scan_expr()[0]};
    }
    else if (['\'', '\"'].includes(c)) {
        return {lineno : line, type : 'string', 
        value : scan_short_string()[0]};
    }
    else {
        return "睇唔明你嘅token" + c;
    }
}

class Parser {
    constructor(tokens, node) {
        this.tokens = tokens;
        this.pos = 0;
        this.node = node;
    }

    get(offset, get_line = false) {
        if (this.pos + offset >= this.tokens.length) {
            return ["", ""];
        }
        if (get_line) {
            return this.tokens[this.pos + offset]['lineno'];
        }
        return [this.tokens[this.pos + offset]['type'],
                this.tokens[this.pos + offset]['value']
                ];
    }

    get_value(token) {
        /// If is expr, Remove the "|"
        if (token[0] == 'expr') {
            token[1] = token[1].slice(1, -1);
        }
        /// If is callfunc, Remove the "&"
        else if (token[0] == 'callfunc') {
            token[1] = token[1].slice(1); 
        } else {
            return token;
        }
    }


    last(offset) {
        return [ this.tokens[this.pos - offset]['type'],
                 this.tokens[this.pos - offset]['value']
                ];
    }

    skip(offset) {
        this.pos += offset;
    }

    /*
     * Support the use of both traditonal and simplified characters
     */
    _match_full(tokentype, skip = false) {
        let current_token = this.get(0)[1];
        if (tokentype === "KW_ENDPRINT") {
            if (skip) this.pos += 1;
            return ['点样先', '點樣先', '点樣先', '點样先'].includes(current_token);
        }
    }

    /*
     *  Try to check the next token, skip if it's matched.
     */
    match(name) {
        if (typeof name == "string") {
            if (this.get(0)[1] === name) {
                this.pos += 1;
                return true;
            } else {
                return false;
            }
        } else {
            for (let item in name) {
                if (this.get(0)[1] == name[item]) {
                    this.pos += 1;
                    return true;
                } else {
                    return false;
                }
            }
        }
    }

    /*
     *  Try to check the next token's type, skip if it's matched.
     */
    match_type(type) {
        if (self.get(0)[0] == type) {
            this.pos += 1;
            return true;
        } else {
            return false;
        }
    }

    token_type_except(tk, err, skip = false, i = 0) {
        if (typeof tk == "object") {
            for (let item in tk) {
                if (this.get(i)[0] === tk[item]) {
                    if (skip) this.pos += 1;
                }
            }
        }

        if (typeof tk == "string") {
            if (this.get(0)[0] == tk) {
                this.pos += 1;
                return
            }
        }

        let line = this.get(i, true);
        throw "Line " + line + err + "\n 你嘅类型係: " + this.get(i)[0];
    }

    token_except(tk, err, skip = false, i = 0) {
        if (typeof tk == "object") {
            for (let item in tk) {
                if (this.get(i)[1] === tk[item]) {
                    if (skip) this.pos += 1;
                    return;
                }
            }
        }

        if (typeof tk == "string") {
            if (this.get(0)[1] == tk) {
                this.pos += 1;
                return
            }
        }

        let line = this.get(i, true);
        throw "Line " + line + err + "\n 你嘅token係: " + this.get(i)[1];
    }

    _raise(err) {
        let line = this.get(0, true);
        throw "Line " + String(line) + err + "\n 你嘅token係: " + this.get(0)[1];
    }

    parse() {
        while (true) {
            if (this.match([kw_print, tr_kw_print])){
                this.node_print_new(this.get_value(this.get(0)));
                this.skip(1); /// Skip the args
                if (this._match_full('KW_ENDPRINT')) {
                    this.skip(1);
                } else {
                    this._raise(" : 濑嘢! 揾唔到 '点样先' ")
                }
            }
            
            else if (this.match("sleep")) {
                this.node_sleep_new(this.get(0));
                this.skip(1);
            }

            else if (this.match([kw_exit, kw_exit_1, kw_exit_2])) {
                this.node_exit_new();
                this.skip(1);
            }

            else if (this.match([kw_global_set, tr_kw_global_set])) {
                let table = this.get_value(this.get(0));
                this.skip(1);
                this.node_global_new(table);
            }

            else if (this.match([kw_del, tr_kw_del])) {
                let _var = this.get_value(this.get(0));
                this.skip(1);
                this.node_del_new(_var);
            }

            else if (this.match([kw_class_assign, tr_kw_class_assign])) {
                let kw = this.get(0)[1];
                if (kw != kw_do) {
                    this.token_except([kw_is, kw_is_2, kw_is_3],  " : 濑嘢! 揾唔到 '係' ", false, 1);
                    this.node_let_new(this.get_value(this.get(0)), this.get_value(this.get(2)));
                    this.skip(3);
                }

                if (kw == kw_do) {
                    this.token_except(kw_do, " : 濑嘢! 揾唔到 '->' ", true);
                    this.token_except(kw_begin, " : 濑嘢! 揾唔到 '{' ", true);
                    let assign_list = [];
                    while (this.tokens[this.pos]['value'] != kw_end) {
                        assign_list.push([this.tokens[self.pos]['type'],
                                          this.tokens[self.pos]['value']]);
                        this.pos += 1;
                    }
                    if (assign_list.length % 3 != 0) {
                        throw "濑嘢! 唔知你想点? 请检查你嘅赋值语句!!";
                    }

                    for (let i in assign_list) {
                        let k = assign_list[i][1];
                        if (k == kw_is || k == kw_is_2 || k == kw_is_3) {
                            this.node_let_new(this.get_value(assign_list[i - 1]),
                                            this.get_value(assign_list[i + 1]));
                        }
                    }

                    this.skip(1);
                }
            }

            else if (this.match([kw_assign, tr_kw_assign])) {
                let kw = this.get(0)[1];
                if(kw != kw_do) {
                    this.token_except([kw_is, kw_is_2, kw_is_3], " : 濑嘢! 揾唔到 '係' ", false, 1);
                    this.node_let_new(this.get_value(this.get(0)), this.get_value(this.get(2)));
                    this.skip(3);
                }

                if (kw == kw_do) {
                    this.token_except(kw_do, " : 濑嘢! 揾唔到 '->' ", true)
                    this.token_except(tk = [kw_begin], err = " : 濑嘢! 揾唔到 '{' ", true)
                    let assign_list = []
                    while (this.tokens[this.pos]['value'] != kw_end) {
                        assign_list.push([this.tokens[this.pos]['type'],
                                          this.tokens[this.pos]['value']]);
                        this.pos += 1;
                    }
                    if (assign_list.length % 3 != 0) {
                        throw " 濑嘢! 唔知你想点? 请检查你嘅赋值语句!!!";
                    }
                    for (let i in assign_list){
                        let k = assign_list[i][1]
                        if (k == kw_is || k == kw_is_2 || k == kw_is_3) {
                            this.node_let_new(this.get_value(assign_list[i - 1]),
                                    this.get_value(assign_list[i + 1]))
                        }
                    }
                    this.skip(1)
                }
            }
            
            else if (this.match(kw_if)) {
                let cond = this.get_value(this.get(0));
                this.token_except(kw_then, " : 濑嘢! 揾唔到 '嘅话' ", false, 1);
                this.token_except(kw_do, " : 濑嘢! 揾唔到 '->' ", false, 2);
                this.token_except(kw_begin, " : 濑嘢! 揾唔到 '{' ", false, 3);
                this.skip(4);
                let if_case_end = 0;
                let if_should_end = 1;
                let node_if = [];
                let stmt_if = [];
                while (if_case_end != if_should_end && this.pos < this.tokens.length) {
                    if (this.get(0)[1] == kw_if) {
                        if_should_end += 1;
                        stmt_if.push(this.tokens[this.pos]);
                        this.pos += 1;
                    }
                    else if (this.get(0)[1] == kw_end) {
                        if_case_end += 1;
                        stmt_if.push(this.tokens[this.pos])
                        this.pos += 1;
                    }
                    else if (this.get(0)[1] == kw_assign || this.get(0)[1] == tr_kw_assign) {
                        stmt_if.push(this.tokens[this.pos]);
                        this.pos += 1;
                        if (this.tokens[this.pos]['value'] == kw_do) {
                            if_should_end += 1;
                        }
                    }
                    else {
                        stmt_if.push(this.tokens[this.pos])
                        this.pos += 1;
                    }
                }
                let _p = new Parser(stmt_if, node_if);
                _p.parse();
                this.node_if_new(cond, node_if);
            }

            else if (this.match([kw_assert, tr_kw_assert])) {
                this.node_assert_new(this.get_value(this.get(0)));
                this.skip(2);
            }

            else if (this.match([kw_raise, tr_kw_raise])) {
                this.node_raise_new(this.get_value(this.get(0))); 
            }

            else if (this.match(kw_type, tr_kw_type)) {
                this.node_gettype_new(this.get_value(this.get(0)))
                this.skip(1);
            }

            else if (this.match([kw_pass, tr_kw_pass])) {
                this.node.push(["node_pass"]);
            }
            
            else if (this.match(kw_break, tr_kw_break)) {
                this.node_break_new();
            }

            else {
                break;
            }
        }
    }

    node_print_new(arg) {
        this.node.push(["node_print", arg]);
    }

    node_sleep_new(arg) {
        this.node.push(["node_sleep", arg]);
    }
    
    node_break_new(node) {
        this.node.push(["node_break"]);
    }
    
    node_exit_new(node) {
        this.node.push(["node_exit"]);
    }
    
    node_let_new(key, value) {
        this.node.push(["node_let", key, value]);
    }
    
    node_if_new(cond, stmt) {
        this.node.push(["node_if", cond, stmt]);
    }
    
    node_elif_new(cond, stmt) {
        this.node.push(["node_elif", cond, stmt]);
    }
    
    node_else_new(stmt) {
        this.node.push(["node_else", stmt]);
    }
    
    node_loop_new(cond, stmt) {
        this.node.push(["node_loop", cond, stmt]);
    }
    
    node_func_new(func_name, args, body) {
        this.node.push(["node_fundef", func_name, args, body]);
    }
    
    node_call_new(func_name) {
        this.node.push(["node_call", func_name]);
    }
    
    node_build_in_func_call_new(_var, func_name, args) {
        this.node.push(["node_bcall", _var, func_name, args]);
    }
    
    node_import_new(name) {
        this.node.push(["node_import", name]);
    }
    
    node_return_new(v){
        this.node.push(["node_return", v]);
    }

    node_py_expr_new(expr) {
        this.node.push(["node_py_expr", expr]);
    }
    
    node_try_new(try_part) {
        this.node.push(["node_try", try_part]);
    }
    
    node_except_new(ndoe, _except, except_part) {
        this.node.push(["node_except", _except, except_part]);
    }
    
    node_finally_new(finally_part){
        this.node.push(["node_finally", finally_part]);
    }
    
    node_raise_new(execption) {
        this.node.push(["node_raise", execption]);
    }
    
    node_for_new(iterating_var, sequence, stmt_part) {
        this.node.push(["node_for", iterating_var, sequence, stmt_part]);
    }
    node_turtle_new(instruction) {
        this.node.push(["node_turtle", instruction]);
    }
    
    node_assert_new(args) {
        this.node.push(["node_assert", args]);
    }
    
    node_model_new(model, datatest) {
        this.node.push(["node_model", model, datatest]);
    }
    node_gettype_new(value) {
        this.node.push(["node_gettype", value]);
    }
    
    node_class_new(name, extend, method){
        this.node.push(["node_class", name, extend, method]);
    }
    
    node_attribute_new(attr_list) {
        this.node.push(["node_attr", attr_list]);
    }
    
    node_method_new(name, args, stmt) {
        this.node.push(["node_method", name, args, stmt]);
    }
    
    node_cmd_new(cmd) {
        this.node.push(["node_cmd", cmd]);
    }
    
    node_list_new(name, list){
        this.node.push(["node_list", name, list]);
    }
    
    node_stack_new(name) {
        this.node.push(["node_stack", name]);
    }
    
    node_global_new(global_table) {
        this.node.push(["node_global", global_table]);
    }
    
    node_del_new(_var) {
        this.node.push(["node_del", _var]);
    }
    
    node_lambda_new(args, ret_value, v) {
        this.node.push(["node_lambda", args, ret_value, v]);
    }
    
    node_match_new(id, stmt_match) {
        this.node.push(["node_match", id, stmt_match]);
    }
    
    node_case_new(case_v, case_stmt, v = "") {
        this.node.push(["node_case", case_v, case_stmt, v]);
    }    
}


function run(Nodes, TAB = '', label = '', path = '', arg = '') {
    function check(tab) {
        if (label != 'whi_run' && label != 'if_run' && label != 'else_run' &&
            label != 'elif_run' && label != "func_run" && label != "try_run" &&
            label != "except_run" && label != "finally_run" && label != "for_run" &&
            label != "class_run" && label != "method_run") {
                tab = '';
        }
    }
    
    for (let i in Nodes) {
        if (Nodes[i][0] == 'node_print') {
            check(TAB);
            TO_JS_CODE += TAB + "console.log(" + Nodes[i][1][1] + ");\n";
        }

        if (Nodes[i][0] == 'node_let') {
            check(TAB);
            TO_JS_CODE += TAB + "let " + Nodes[i][1][1] + " = " + Nodes[i][2][1] + ";\n";
        }

        if (Nodes[i][0] == 'node_pass') {
            check(TAB);
            TO_JS_CODE += TAB + ";\n";
        }

        if (Nodes[i][0] == 'node_break') {
            check(TAB);
            TO_JS_CODE += TAB + 'break\n';
        }
    }
}


p = new Parser(tokens, node);
/// console.log(tokens);
p.parse();
run(node);
console.log(TO_JS_CODE);