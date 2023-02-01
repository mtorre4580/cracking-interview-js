# isUnique

Implement algorithm to determine if a string has all unique characters

## Solution 1

- Create a map to count the quantity of chars
- See if has any char with more than 1 in the hashmap

`"hello" -> ["h", "e", "l", "l", "o"] -> { h: 1, e: 1, l: 2, o: 1 } -> "l" is repeated"`

## Solution 2

- Iterate the string and check in each iteration if the current position is equals to the last - 1

`"hello" -> "h" != "o" -> "e" != "l" -> "l" != "l" (false)`
