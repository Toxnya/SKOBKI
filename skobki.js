function Valid (x) {
    const stack = [];
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    for (const a of x) {
        if (a in map) {
            stack.push(a);
        } else {
            const lastOpenedBracket = stack.pop();
            if (map[lastOpenedBracket] !== a) {
                return false
            }
        }
    }
    return stack.length === 0;
}
console.log(Valid("()"));
console.log(Valid("()[]{}"));
console.log(Valid("(]"));
console.log(Valid("([)]"));
console.log(Valid("{[]}"));