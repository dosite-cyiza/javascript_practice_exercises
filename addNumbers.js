/**
  Add numbers
You are given a mathematical expression as a string, which may contain numbers, 
operators, and parentheses. Your task is to evaluate the expression and return 
the result.


Rules:
The expression will follow operator precedence, where multiplication and division have 
higher precedence than addition and subtraction.
Parentheses can be used to override the default precedence.
The expression may contain spaces, which should be ignored.


calculateExpression("5 + 4 * 3 / 2 - 1"); // should return 10
calculateExpression("( 2 + 3 ) * ( 4 - 1 )"); // should return 15

Note: You can assume that the input expression will always be valid and well-formed. 
Eval is not allowed for this question.

 */