# isSubsequence
Write a function called isSubsequence which takes in two strings
and checks whether the characters in the first string form
a subsequence of the characters in the second string.
In other words, the function should check whether the characters
in the first string appear somewhere in the second string,
without their order changing.

- inputs:
  - str1
  - str2
- output: boolean

## Examples
### Example 1: 
- inputs
  - str1: 'hello'
  - str2: 'hello world'
- output: true
### Example 2: 
- inputs
  - str1: 'sing'
  - str2: 'sting'
- output: true

### Example 3: 
- inputs
  - str1: 'abc'
  - str2: 'acb'
- output: false
