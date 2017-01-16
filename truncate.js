// This is the file where you will write the Truncate Words function and related code.

// TODO: Create a Function called truncateWords() that accepts two arguments: 
  function truncateWords(longText, numWords)
{
// TODO: Within the truncateWords() Function, complete the following steps:
// 1. Use the split() function to split the String into an Array
  var longTextArray = longText.split(' ');
  console.log(longTextArray);
// 2. Use the length attribute to find the number of words in the Array
  var textLength = longTextArray.length;
  console.log(textLength);
// 3. Determine how many words should be removed from the String
  var textRemove = textLength - numWords;
  console.log(textRemove);
// 4. Remove those words from the Array
  longTextArray.splice(numWords,textRemove);
  console.log(longTextArray);
// 5. Add an additional String item to the Array to put an ellipses in: "..."
  longTextArray.push('...');
  console.log(longTextArray);
// 6. Use the join() function to convert the Array back into a String
  var textJoin = longTextArray.join(' ');
  console.log(textJoin);  
// 7. Return the truncated String from the Function
return textJoin;
}


// This portion of the script is meant to call and display the result of your Function.
// You do not need to change the following lines, but you may change them if you 
// are experimenting further or pursuing stretch goals.
var originalText = "There are two hard things in Computer Science: Cach invalidation, naming things, and off-by-one errors.";
var wordLimit = 8;
var shortText = truncateWords(originalText, wordLimit);
console.log('originalText: ' + originalText);
console.log('shortText: ' + shortText);
