# find-lines
Find a lines in text file matching a union of string-patterns. Before actual search try to simpify this union - to speedup search.

Example: given list ["aa-b", "a-b", "a-bb", "a-c"] we should exclude "aa-b" and "a-bb" to result in reduced list ["a-b", "a-c"]

The list can be represented in a form of an union of regexp's.

See http://www.rexegg.com/regex-class-operations.html for basic operations on regex classes:

intersection (?=A)B, subtraction (?!B)A, union (?:A|B)

For the example above this represenation becomes

(?:aa-b|(?:a-b|(?:a-bb|a-c)))

This is simplified to

(?:a-b|a-c)

See at https://a402539.github.io/find-lines/ for simplification on example above

Rule of simplification (for the case of literals): if A.indexOf(B) >= 0 then A to be excluded as superseded by B

Referemces on a subject:

Is finding the minimum regular expression an NP-complete problem? https://cstheory.stackexchange.com/questions/1854/is-finding-the-minimum-regular-expression-an-np-complete-problem

Learning DFA from Simple Examples http://web.cs.iastate.edu/~honavar/Papers/parekh-dfa.pdf

Equivalence of regular expression https://math.stackexchange.com/questions/1231120/equivalence-of-regular-expression?rq=1

Regular Expression Simplificator https://www.dcode.fr/regular-expression-simplificator

Convert Regular Expression to DFA - Compiler Design http://ecomputernotes.com/compiler-design/convert-regular-expression-to-dfa
