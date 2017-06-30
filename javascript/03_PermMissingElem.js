/*
Task description
A zero-indexed array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.
Your goal is to find that missing element.
Write a function:
function solution(A);
that, given a zero-indexed array A, returns the value of the missing element.
For example, given array A such that:
  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.
Assume that:
N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)].
Complexity:
expected worst-case time complexity is O(N);
expected worst-case space complexity is O(1), beyond input storage (not counting the storage required for input arguments).
Elements of input arrays can be modified.
*/
//solution([2, 3, 1, 5]);
console.log(solution([1, 2]));

function solution(A) {
  // write your code in JavaScript (Node.js 6.4.0)
  let sum_values = 0;
  let sum_indecies = 0;
  let missing_value = 0;

  if (A.length === 0) {
    return 1;
  }
  if ((A.length === 1) && (A[0] === 1)){ 
    return A.length + 1;
  }
  if ((A.length === 1) && (A[0]!==1)) {
    return 1;
  }

  for(let i=0; i < A.length; i++) {
    sum_indecies += (i+1);
    sum_values += A[i];
  }
  
  if (sum_values === sum_indecies) {
    missing_value = A.length + 1;
  } else {
    missing_value = sum_indecies - (sum_values - (A.length+1));
  }

  return missing_value;
}
