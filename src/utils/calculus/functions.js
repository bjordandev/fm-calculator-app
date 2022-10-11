import {
    ADDER_SYMBOLS,
    MULTIPLIER_SYMBOLS,
    DIGITS_SYMBOLS,
    MATH_SYMBOLS
} from "./constants";

import {
    isDefinedValue,
    isString,
    isStringNumber,
    isStringValue,
    hasStringToken,
    isStringValidToken
} from "../validator/functions";

function addTokenToMathExpressionSelectCase(expression, token) {
    const cases = [
        "IS_TOKEN_POINT",
        "START_WITH_0_OR_POINT",
        "END_WITH_NUMBER_OR_MULTIPLIER"
    ];

    const lastIndex = expression.length - 1;
    const secondIndex = 1;
    
    const lastToken = expression[lastIndex];


    const isLastTokenNumber = isStringNumber(lastToken);
    const isLastTokenMultiplier = isStringValidToken(lastToken, MULTIPLIER_SYMBOLS);
    const isTokenNumber = isStringNumber(token);
    const isTokenPoint = isStringValue(token, ".");
    const hasExpressionPoint = hasStringToken(expression, ".");
    const isExpressionZero = isStringValue(expression, "0");
    
    if (isTokenPoint && hasExpressionPoint)
        return cases[0] 

    if (isExpressionZero) 
        return cases[1];

    if (isLastTokenNumber || isTokenNumber || isLastTokenMultiplier)
        return cases[2];
}

function addTokenToMathExpression(expression, token) {
    const isExpressionDefined = isDefinedValue(expression);
    const isExpressionString = isString(expression);

    if (!isExpressionDefined)
        throw new Error("addTokenToMathExpression: Undefined expression");
    if (!isExpressionString)
        throw new Error("addTokenToMathExpression: Expression isn't string");

    const functionCase = addTokenToMathExpressionSelectCase(expression, token); 

    switch (functionCase) {
        case "IS_TOKEN_POINT":
            return expression;
        case "START_WITH_0":
            return token.toString();
        case "END_WITH_NUMBER_OR_MULTIPLIER":
            return expression + token;
        default:
            return expression.slice(0, -1) + token;
    }
}

function extractNumbersFromExpression(expression) {
    const isExpressionDefined = isDefinedValue(expression);
    const isExpressionString = isString(expression);

    if (!isExpressionDefined)
        throw new Error("extractNumbersFromExpression: Undefined expression");
    if (!isExpressionString)
        throw new Error("extractNumbersFromExpression: Expression isn't string");

    const lastIndex = expression.length - 1;
    const extractedNumbers = [];
    let currentString = "";

    for (let i = 0 ; i <= lastIndex ; i++) {
        const currentStringLength = currentString.length;
        const currentToken = expression[i];
        const previousToken = expression[i - 1];

        const isTokenDigit = isStringValidToken(currentToken, DIGITS_SYMBOLS);
        const isTokenPoint = currentToken === ".";
        const isTokenMinus = currentToken === "-";

        const isPreviousTokenMultiplier = isStringValidToken(previousToken, MULTIPLIER_SYMBOLS);
        const isStringEmpty = currentStringLength === 0;

        const isFirstIndex = i === 0;

        if (
            (isTokenDigit || isTokenPoint) || 
            (isTokenMinus && isFirstIndex) ||
            (isTokenMinus && isPreviousTokenMultiplier)
        ) {
            currentString += currentToken;
        } else { 
            if (!isStringEmpty) {
                extractedNumbers.push(currentString);
                currentString = "";
            }
        }
    }

    const currentStringLength = currentString.length;
    const isStringEmpty  = currentStringLength === 0;

    if (!isStringEmpty) extractedNumbers.push(currentString);
    
    return extractedNumbers;
}

function extractOperationsFromExpression(expression) {
    const isExpressionDefined = isDefinedValue(expression);
    const isExpressionString = isString(expression);

    if (!isExpressionDefined)
        throw new Error("extractOperationsFromExpression: Undefined expression");
    if (!isExpressionString)
        throw new Error("extractOperationsFromExpression: Expression isn't string");

    const lastIndex = expression.length - 1;
    const extractedOperations = [];

    for (let i = 1 ; i <= lastIndex ; i++) {
        const currentToken = expression[i];
        const previousToken = expression[i - 1];

        const isTokenOperation = isStringValidToken(currentToken, [...ADDER_SYMBOLS, ...MULTIPLIER_SYMBOLS]);
        const isPreviousTokenDigit = isStringValidToken(previousToken, DIGITS_SYMBOLS);
        const isLastIndex = i === lastIndex;

        if ((isTokenOperation && isLastIndex) ||
            (isTokenOperation && isPreviousTokenDigit)
        )
            extractedOperations.push(currentToken);
    }

    return extractedOperations;
}

function isExpressionValid(_expression) {
    const isExpressionDefined = isDefinedValue(_expression);
    const isExpressionString = isString(_expression);

    if (!isExpressionDefined)
        throw new Error("isExpressionValid: Undefined expression");
    if (!isExpressionString)
        throw new Error("isExpressionValid: Expression isn't string");
    
    const expression = _expression.toLowerCase();
    const lastIndex = expression.length - 1;

    for (let i = 0 ; i <= lastIndex ; i++) {
        const currentToken = expression[i];
        const isTokenMathSymbol = isStringValidToken(currentToken, MATH_SYMBOLS);

        if (!isTokenMathSymbol) return false;
    }

    const extractedNumbers = extractNumbersFromExpression(expression);
    const extractedOperations = extractOperationsFromExpression(expression);

    return extractedNumbers.length === extractedOperations.length + 1;
}

export {
    addTokenToMathExpression,
    isExpressionValid
}


