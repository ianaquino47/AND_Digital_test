function solution(input) {
  // regex replacing non-numeric characters
  let filtered = input.replace(/\D/g,'');  
  let array_sol = [];
  input = filtered.split('');
      
  //initial checks for strings that requires no permutation
  if (filtered.length == 0) {
    return "Input error: please use a non-negative integer.";
  } else if (filtered.length == 1 || allEqual(filtered)) {
    return filtered;
  }

  //runs main function
  getAllPermutations(input, input.length);

  //filters out duplicate permutations
  let distinct = array_sol.filter((x, i, a) => a.indexOf(x) == i);

  //output
  return format(distinct);
  
  //swaps places of 2 characters as part of the algorithm
  function swap(list, index1, index2){
    const temp = list[index1];
    list[index1] = list[index2];
    list[index2] = temp;  
  } 

  //main recursive function
  function getAllPermutations(list, n) {
    if (n == 1) {
      array_sol.push(list.join(''));
    } else {
      for (let i = 0; i < n - 1; i++) {
        getAllPermutations(list, n - 1);
        if (n % 2) {
          swap(list,0, n - 1);
        } else {
          swap(list,i, n - 1);
        }
      }
      getAllPermutations(list, n - 1);
    }
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

  function format(array){
    return array.sort()
            .reverse()
            .toString();
  } 
}
  
module.exports = solution;