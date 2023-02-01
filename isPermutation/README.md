# isPermutation

Check if two string is a permutation

## Solution 1

- If has different size is not a permutation
- Create a map to count the chars in the strings
- If any has different size is not a permutation

`"hello" -> ["h", "e", "l", "l", "o"] -> { h: 1, e: 1, l: 2, o: 1 }`
`"olleh" -> ["o", "l", "l", "e", "h"] -> { o: 1, l: 2, e: 1, o: h }`

## Solution 2

- If has different size is not a permutation
- Because is an string, sort both string and check if are equals

`"hello" -> ["e", "h", "l", "l", "o"] -> ehllo`
`"olleh" -> ["e", "h", "l", "l", "o"] -> ehllo`