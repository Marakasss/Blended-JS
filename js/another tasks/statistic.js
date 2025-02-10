function analyzeText(text) {
  let wordsArr = text.split(" ");
  const wordcount = wordsArr.length
  let uniqueWords = new Set();
  let longestWord = "";
  
  for (word of wordsArr) {
    uniqueWords.add(word)
    if (word.length > longestWord.length) {
      longestWord = word;
    }
    }
  
  uniqueWords = uniqueWords.size

  let statistic = { wordcount: wordcount, uniqueWords: uniqueWords, longestWord: longestWord};
return statistic
}

console.log(analyzeText("hello world hello universe"));