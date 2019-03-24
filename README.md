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

Regular expressions into finite automata https://pdf.sciencedirectassets.com/271538/1-s2.0-S0304397500X03635/1-s2.0-0304397593902874/main.pdf?x-amz-security-token=FQoGZXIvYXdzECoaDKBEVWkSpER0TWyaQSK3A%2FexPEc4qsYPohSy09yxlOa%2Fmj92jSCxLgnDXmDmYjojvANZ%2BCQMno5ALvSqdmyk4bnkpPpJwwcnG8AyJDkcknORBUDJLhufQ0ggf9aS7zo9L%2Be1B1eIF5Le3jQvMseKuDy3ugtWSuyienuKEkuYiEvfyym5UPRs2va8d8nc5FXKqxazvEJej4V7ImWTWXl%2F6VuH6T5zwszFSIkulX%2BuHOyj8IwSLkZ5VoBNbdN0cIjMaGHYwU%2FSJLQnysayZWPW7StH29eufbWmxuyDMoxoHGKDUgOmbZMuCWgC7opgE7jnOQIP%2FfKreS5O0lETKlZYaWKcEqZQhM0JsUT6mcj%2Fv7ujuzoopV7mVt68kW08FoN8a0jTZmnh%2BevZGXk1%2BUWQG4io%2Bp24rNbUwOSO4W5hCEjrJQ25ajf4KCDzqKoKQBWsaZnGKvHJmdmPUsAaimvqia1uTcsyp%2BiVv2huV9aptmsolZ4y3Njf2ZxxAWR2tKo3I3xcXy8ZOwfqQ4RjJ5ZDM4b6WfRsUTf%2FRwIlFLsZZCOzHCDC5RFCExqulO7aS6J3V9vXACXVZoLEWIkE5gbxgwKeprFlsaQojuLe5AU%3D&AWSAccessKeyId=ASIAQ3PHCVTY7I4D7JU5&Expires=1553448578&Signature=eYDvj1bIcIL%2BDTIkNnMGpo%2FSsBc%3D&hash=36140cd5dac663c387d9e64074477c9b5dd9e6aeddaa255855cbf623d4cb4032&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=0304397593902874&tid=spdf-b31191c6-04c8-4e3c-bcc1-70499c917715&sid=11bb390c47a5a5460d794414b8f65745f302gxrqb&type=client

Minimizing NFA’s and Regular Expressions http://ggramlich.github.io/Publications/approximationSTACS05.pdf

Contrary to the problem of minimizing dfa’s, which is efficiently possible, it is well known
that nfa or regular expression minimization is computationally hard, namely PSPACE-complete
[10]. Jiang and Ravikumar [7] show moreover that the minimization problem for nfa’s or regular
expressions remains PSPACE-complete, even when specifying the regular language by a dfa.

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
