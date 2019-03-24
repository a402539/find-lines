# find-lines
Find a lines in text file matching a union of string-patterns. Before actual search try to simpify this union - to speedup search.
See at https://a402539.github.io/find-lines/
Example: given list ["aa-b", "a-b", "a-bb", "a-c"] we should exclude "aa-b" and "a-bb" to result in reduced list ["a-b", "a-c"]
