//not es6
// function bubbleSorting(arr) {
//     for(let i =0;i < arr.length;i++) {
//         for(let j = 0;j < arr.length;j++) {
//             if(arr[j] > arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr;
// }
//use es6 syntax
// function bubbleSorting(arr) {
//     //es6 syntax

//     const swap = (arr,idx1,idx2) => {
//         [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]];
//     }

//     for (let i  = arr.length;i > 0;i--) {
//         for(let j = 0 ;j < i - 1;j++) {
//             console.log(arr,arr[j],arr[j+1]);
//             //swapping
//             if(arr[j] > arr[j+1]) {
//               swap(arr,j,j+1);
//             }
//         }
//     }
//     return arr;
// }



console.log(bubbleSorting([37,45,29,8,-2]))