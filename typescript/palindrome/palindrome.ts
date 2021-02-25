const splitTheString = (value: string): string[] => {
    return value.split('')
}

const reverseTheString = (value: string[]): string[] => {
    return value.reverse()
}

const joinTheString = (value: string[]): string => {
    return value.join('')
}

const isPalindrome = (value: string): boolean => {
    const splitString = splitTheString(value)
    const reversedString = reverseTheString(splitString)
    const joinedString = joinTheString(reversedString)
    const result = joinedString === value
    return result
}

const isPalindromeSimple = (value: string): boolean => {
    return value.split('').reverse().join('') === value
}

const answer = isPalindrome("dad")
const simpleAnswer = isPalindromeSimple("boat")

console.log(answer)
console.log(simpleAnswer)
