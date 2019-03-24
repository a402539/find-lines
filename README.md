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

Regular expression, From Wikipedia, the free encyclopedia https://en.wikipedia.org/wiki/Regular_expression

Xing, Guangming. "Minimized Thompson NFA" http://people.wku.edu/guangming.xing/thompsonnfa.pdf

Kleene's algorithm, From Wikipedia, the free encyclopedia https://en.wikipedia.org/wiki/Kleene%27s_algorithm

Glushkov's construction algorithm, From Wikipedia, the free encyclopedia https://en.wikipedia.org/wiki/Glushkov%27s_construction_algorithm

Mathematical Foundations of Automata Theory https://www.irif.fr/~jep/PDF/MPRI/MPRI.pdf

Is finding the minimum regular expression an NP-complete problem? https://cstheory.stackexchange.com/questions/1854/is-finding-the-minimum-regular-expression-an-np-complete-problem

Learning DFA from Simple Examples http://web.cs.iastate.edu/~honavar/Papers/parekh-dfa.pdf

Equivalence of regular expression https://math.stackexchange.com/questions/1231120/equivalence-of-regular-expression?rq=1

Regular Expression Simplificator https://www.dcode.fr/regular-expression-simplificator

Convert Regular Expression to DFA - Compiler Design http://ecomputernotes.com/compiler-design/convert-regular-expression-to-dfa

Notes on Regular Expression Simplification https://www.cs.cmu.edu/~fp/courses/97-212/handouts/regsimp.pdf

Finite Automata and Formal Languages - 2009 — LP4 2009 http://www.cse.chalmers.se/~coquand/AUTOMATA/

Introduction to Automata Theory, Languages, and Computation http://infolab.stanford.edu/~ullman/ialc.html#solutions https://b-ok.org/dl/2481927/732571

Source file src/regexp/syntax/simplify.go https://golang.org/src/regexp/syntax/simplify.go
