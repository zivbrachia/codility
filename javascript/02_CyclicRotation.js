/*
Task description
A zero-indexed array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is also moved to the first place.

For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7]. The goal is to rotate array A K times; that is, each element of A will be shifted to the right by K indexes.

Write a function:

function solution(A, K);

that, given a zero-indexed array A consisting of N integers and an integer K, returns the array A rotated K times.

For example, given array A = [3, 8, 9, 7, 6] and K = 3, the function should return [9, 7, 6, 3, 8].

Assume that:

N and K are integers within the range [0..100];
each element of array A is an integer within the range [−1,000..1,000].
In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.
*/
solution([3, 5, 1, 1, 2], 42); // [3, 5, 1, 1, 2]

function solution(A, K) {
    // write your code in JavaScript (Node.js 6.4.0)
    K = K % A.length;
    let B = A.slice((A.length - K), A.length);
    A.splice((A.length - K), A.length);
    for (let i = (B.length-1); i >= 0; i--) {
        A.unshift(B[i]);
    }
    return A;
}