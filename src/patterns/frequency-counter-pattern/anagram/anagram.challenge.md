# Anagram

Given two strings, write a function to determine
if the second string is an anagram of the first.
An Anagram is a word, phrase, or name formed by rearranging
the letters of another, such as cinema, formed from iceman.

- inputs: str1, str2
- output: `boolean`

## Case 1

- inputs
  - str1: `''`
  - str2: `''`
- output: `true`

## Case 2

- inputs
  - str1: `'aaz'`
  - str2: `'zza'`
- output: `false`

## Case 3

- inputs
  - str1: `'anagram'`
  - str2: `'nagaram'`
- output: `true`

## Case 4

- inputs
  - str1: `'rat'`
- str2: `'car'`
  output: `false`

## Case 5

- inputs
  - str1: `'awesome'`
  - str2: `'awesom'`
- output: `false`

## Case 6

- inputs
  - str1: `'texttwisttime'`
  - str2: 'timetwisttext'
- output: `true`
