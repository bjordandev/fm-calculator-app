function isCharSymbol(char) {
    let symbols = [];

    for (let i = 0 ; i <= 9 ; i++) symbols.push(i.toLocaleString());
    
    symbols = [
        ...symbols,
        "/",
        "+",
        "-",
        "*",
        ".",
        "e"
    ]

    return symbols.indexOf(char) >= 0;
}

function isCharOperation(char) {
    return ["+", "-", "*", "/"].indexOf(char) >= 0;
}

function isStringNumber(char) {
    return !isNaN(char)
}

function addToken(str, token) {
    if (str === undefined || str === null) return;

    if (token === ".") {
        for (let i = 0 ; i < str.length ; i++) {
            if (str[i] === ".") 
                return str;
        }
    }

    const lastCharIsNumber = isStringNumber(str[str.length - 1]);
    const lastCharIsTimeOrDivider = ["/", "*"].indexOf(str[str.length - 1]) >= 0;

    const tokenIsNumber = isStringNumber(token);
    const firstCharIsZero = str[0] === "0"

    if (firstCharIsZero && str[1] !== ".") return token.toString();
    if (lastCharIsNumber || tokenIsNumber || lastCharIsTimeOrDivider) return str + token;
    
    return str.slice(0, -1) + token;
}

function extractNumbers(str) {
    if (str === undefined || str === null) return;

    let currentString = "";
    const numbers = [];

    for (let i = 0 ; i < str.length ; i++) {
        if (
            (isStringNumber(str[i]) || str[i] === ".") || 
            (str[i] === "-" && i === 0) ||
            (str[i] === "-" && isCharOperation(str[i - 1]))
        ) {
            currentString += str[i];
        } else {
            if (currentString.length > 0) {
                numbers.push(currentString);
                currentString = "";
            }
        }
    }

    if (currentString.length > 0) {
        numbers.push(currentString);
    }

    return numbers;
}

function extractOperations(str) {
    if (str === undefined || str === null) return;

    let currentString = "";

    const operations = [];

    for (let i = 1 ; i < str.length ; i++) {
        if (
            (isCharOperation(str[i]) && i === str.length - 1) ||
            (isCharOperation(str[i]) || 
                (   ["/", "*"].indexOf(str[i - 1]) >= 0 && 
                    isStringNumber(str[i - 1])
                )
            )
        ) {
            operations.push(str[i])
        }
    }

    return operations;
}

function isValidOperation(_str) {
    if (_str === undefined || _str === null) return;
    
    const str = _str.toLowerCase();

    for (let i = 0 ; i < str.length ; i++) {
        if (!isCharSymbol(str[i])) return false;
    }

    const numbers = extractNumbers(str);
    const operations = extractOperations(str);

    if (numbers.length === 0 || operations.length === 0) return false;

    return numbers.length === operations.length + 1;
}

export {
    isCharSymbol,
    isCharOperation,
    isStringNumber,
    addToken,
    extractNumbers,
    extractOperations,
    isValidOperation
}

