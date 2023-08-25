
const stringSearch = "harold said haha in hamburg";
const shortString = "haroldhahahamburgh";
const findChar= "h";
let count = 0;
const stringSearching = (string,shortString,char) => {
    // const totalLengthOfString = [...string,...shortString];
    // for(let i = 0 ;i < totalLengthOfString.length;i++) {
    //     if(totalLengthOfString[i] === char){
    //         count++;
    //     }
    // }
    //working fine but it old approach

    // for(let i = 0 ;i < string.length;i++){
    //     if(string[i] === char) count++;
    // }
    // for(let j = 0; j < shortString.length;j++) {
    //     if(shortString[j] === char) count++;
    // }

    //Doing the same thing with array methods

    const count = [...string,...shortString].reduce((arr,cu) => {
        if(cu === char){
            arr++;
        }
        return arr;
    },0)
    return count;
}
console.log(stringSearching(stringSearch,shortString,findChar));