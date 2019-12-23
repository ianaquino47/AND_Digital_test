/**
* The following is the function where the solution shall be written
*/

function solution (input) {
    // regex replacing non-numeric characters
    let filtered = input.replace(/\D/g,''); 
    
    //initial checks for strings that requires no permutation
    if (filtered.length == 0) {
        return "Input error: please use a non-negative integer.";
    } else if (filtered.length == 1 || allEqual(filtered)) {
        return filtered;
    } 

    //runs main function
    let array_sol = getAllPermutations(filtered);

    //filters out duplicate permutations
    let distinct = array_sol.filter((x, i, a) => a.indexOf(x) == i);

    //output 
    return format(distinct);

    //main recursive function
    function getAllPermutations(string) {
        let arrayOfPermutations = [];

        if (string.length === 1) {
          arrayOfPermutations.push(string);
          return arrayOfPermutations;
        }
      
        for (let i = 0; i < string.length; i++) {
          let leadingChar = string[i];
          let remainingChars = string.substring(0, i) + string.substring(i + 1);
          let permutedChars = getAllPermutations(remainingChars);

          for (let j = 0; j < permutedChars.length; j++) {
            arrayOfPermutations.push(leadingChar + permutedChars[j]);
          }
        }
        return arrayOfPermutations;
    }

    //function that checks if string given is just repeated characters
    function allEqual(string) {
        for (let i = 1; i < string.length; i++) {
            if (string[i] != string[0]) {
                return false;
            }
        }
        return true;
    }

    //function that formats our output in required form
    function format(array){
        return array.sort()
                .reverse()
                .toString();
    } 
}

module.exports = solution;