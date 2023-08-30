/*
=========Selection Sort Pseudocode=============
1.Store the first element the smallest value you've seen so far.
2.Compare this item to the next item in the array until you find a smaller number.
3.If a smaller number is found, designate that smaller number to be the new minimum and continue until the end of the array.
4.If the minimum is not the value (index) you initially began with, swap the two values.
5.Repeat this with the next element until the array is sorted.
*/
//not use es6 syntax;
// function selectionSorting(arr) {
//     for(let i=0;i < arr.length;i++) {
//         let lowest=i;
//         for(let j = i +1;j < arr.length;j++) {
//             if(arr[j] < arr[lowest]){
//                 lowest = j;
//             }
//         }
//         if(i !== lowest) {
//             let temp = arr[i];
//             arr[i] = arr[lowest];
//             arr[lowest] = temp;
//         }
//     }
//     return arr;
// }
//using es6 syntax
const selectionSorting = (arr) => {
    let swap = (arr,idx1,idx2) => [arr[idx1] ,arr[idx2]] = [arr[idx2],arr[idx1]];
    for(let i =0;i< arr.length;i++) {
        let lowest = i;
        for(let j = i ; j < arr.length;j++) {
        if(arr[lowest] > arr[j]) lowest = j;
        }
        if(i !== lowest) swap(arr,i,lowest);
    }
    return arr;
}
console.log(selectionSorting([0,2,10,19,17,34,22]));