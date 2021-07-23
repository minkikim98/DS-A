// https://leetcode.com/problems/evaluate-reverse-polish-notation/

/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function (tokens) {
    const stack = [];

    for (const token of tokens) {
        if (isOperator(token)) {
            e2 = stack.pop();
            e1 = stack.pop();

            stack.push(evaluateExpression(token, e1, e2));
        } else {
            stack.push(parseInt(token));
        }
    }
    return stack[0];
};

const isOperator = (token) => {
    const operators = ['+', '-', '*', '/'];
    return operators.includes(token);
}

const evaluateExpression = (operator, e1, e2) => {
    if (operator === '+') return e1 + e2;
    if (operator === '-') return e1 - e2;
    if (operator === '*') return e1 * e2;
    if (operator === '/') {
        if (e1 * e2 > 0)
            return Math.floor(e1 / e2);
        else return Math.ceil(e1 / e2);
    }
}