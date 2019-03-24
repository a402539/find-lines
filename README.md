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

See at https://a402539.github.io/find-lines/

