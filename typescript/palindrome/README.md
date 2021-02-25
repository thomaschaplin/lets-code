# Palindrome

Let's learn how to code a function which returns if a string is a `palindrome`.

## What is a palindrome?

> A palindrome is a word, number, phrase, or other sequence of characters which
> reads the same backward as forward, such as madam or racecar. There are also
> numeric palindromes, including date/time stamps using short digits 11/11/11
> 11:11 and long digits 02/02/2020.

## What will our code do?

```gherkin
Feature: Palindrome

    As a user
    I want to know if a string is a palindrome
    So that I can tell if a string is a palindrome

    Scenario Outline: Returns true or false if a string is a palindrome

        GIVEN I input the string <value>
        WHEN I execute the isPalindrome function
        THEN the result will be <result>

        Examples:
            | value               | result |
            | dad                 | true   |
            | racecar             | true   |
            | no lemon, no melon  | true   |
            | hannah              | true   |
            | sweets              | false  |
            | boat                | false  |
            | the meaning of life | false  |
            | jake                | false  |
```

Valid Examples:

- `"dad"`
- `"racecar"`
- `"no lemon, no melon"`
- `"hannah"`

Invalid Examples:

- `"sweets"`
- `"boat"`
- `"the meaning of life"`
- `"jake"`

### But what is the code actually doing?

We first need to choose a value to check if it's a palindrome, let's pick
`boat`.

The code will first split the string into an array of characters, like so...

```json
["b","o","a","t"]
```

Next, the code will reverse the arrary, like so...

```json
["t","a","o","b"]
```

After reversing the array, the code will join the array and turn it into a
string, like so...

```
taob
```

Finally, the code will check if the original value (`boat`) is equal to the
manipulated string (`taob`).

As those two strings do **NOT** match, a `false` value will be returned.

## Setup

Ensure you have [Deno](https://deno.land/) installed on your machine.

- `git clone https://github.com/thomaschaplin/lets-code.git`
- `cd lets-code/typescript/palindrome`
- `deno run palindrome.ts`

Expected output:

```
true
false
```

### Further Learning

Why not try editing the code? Or try changing the string to something else!

#### Bonus Points

- What's the longest palindrome string you can find?
- Try and implement the same function but for the type `number` instead of
  `string`

## Resources

- [YouTube]()
