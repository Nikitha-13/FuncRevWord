function reverseWordsInSentence(sentence) {
    // Split the sentence into words
    const words = sentence.split(' ');

    // Reverse each word and store them in an array
    const reversedWords = words.map(word => {
        // Use split('') to split the word into an array of characters, reverse it, and join it back.
        return word.split('').reverse().join('');
    });

    // Join the reversed words to form the reversed sentence
    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

// Example usage:
const inputSentence = "Hello world"; // Replace with your input sentence
const reversedSentence = reverseWordsInSentence(inputSentence);
console.log(reversedSentence);
