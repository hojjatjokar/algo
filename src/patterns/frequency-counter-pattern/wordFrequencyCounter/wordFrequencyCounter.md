# Word Frequency counter

You will be provided with a passage (no special characters, no punctuations). Your task is to find the frequency of the words occurring in the text, in other words find the number of times a word occurs in the given passage.

## Input

A string with no special characters or punctuations.

## Output

Output should be in the format: `Word Count`

where Word is a `string` in the passage, and count is an `integer` representing number of times the Word has appeared in the passage. Word and the count must be separated by a space.

Words and their count must be listed out in the same order as given in the passage.

Passage will be given as a single string, and not in paragraphs.

## Constrains

- `0 <= W <= 1000`

- where `W` is the number of words in the passage.

## Note

strings 'apple', 'APPLE', 'Apple' are all considered to be instances of the same word 'APPLE'. In Output, all letters of the words must be converted into UPPERCASE.(Refer Sample Input/Output)

## Sample

Sample input:
`My name is Xyz He is Abc Is he allright`

Sample output:

```js
{
  MY: 1,
  NAME: 1,
  IS: 3,
  XYZ: 1,
  HE: 2,
  ABC: 1,
  ALLRIGHT: 1,
}
```

## Explanation

In Sample Input:

`My name is Xyz He is Abc Is he allright`

'My' is converted into 'MY' to find all other instances of 'My' in the passage easier. MY is present only once in the passage, so the frequency of 'MY' is 1.

'Name' is converted into 'NAME', and its frequency is 1.

'Frequency of the word 'is' is 3 ('is', 'IS', 'Is' (check passage) ). 'is' is converted into 'IS'. All instances of thee word 'IS' are found from the passage.

Similarly the counting process is done for all other words in the passage.

So the output is:

```js
{
  MY: 1,
  NAME: 1,
  IS: 3,
  XYZ: 1,
  HE: 2,
  ABC: 1,
  ALLRIGHT: 1,
}
```

Source:
[Hacker Earth](https://www.hackerearth.com/problem/algorithm/word-frequency-counter/)
