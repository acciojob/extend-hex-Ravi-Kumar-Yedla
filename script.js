// const extendHex = (shortHex) => {
//   // write your code here
	
// 	//remove # symbol
// 	shortHex = shortHex.replace('#','');
// 	//check if the input is correct 
// 	  if (/^[0-9a-fA-F]{1,3}$/.test(shortHex)) {
	  
// 	  }
// };
function extendHex(shortHex) {
  // Remove the '#' symbol if present
  shortHex = shortHex.replace('#', '');

  // Check if the input is a valid short hex code
  if (/^[0-9a-fA-F]{1,3}$/.test(shortHex)) {
    // Extend each character to create a full hex code
    const fullHex = shortHex
      .split('')
      .map(char => char.repeat(2))
      .join('');

    // Add '#' and return the full hex code
    return '#' + fullHex.toLowerCase(); // Convert to lowercase for consistency
  } else {
    // Handle invalid input
    return "Invalid short hex code";
  }
}

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
