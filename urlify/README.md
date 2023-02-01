# URLify

Implement a function to replace the spaces in a string with the encode %20

# Solution 1

- Use the function encodeURI from JS

`encodeURI("hello world") -> "hello%20world"`

# Solution 2

- Trim the url to avoid empty spaces
- Acumulate in a string the current value if the char is a " " replace with "%20"

`"hello world  " -> "hello world" -> "hello%20world"`