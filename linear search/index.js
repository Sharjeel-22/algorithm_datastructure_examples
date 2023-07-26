const states = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming"
];
const usernames = [
  "user123",
  "cool_dude",
  "gamer_girl88",
  "code_ninja",
  "musiclover42",
  "foodie101",
  "travel_bug",
  "bookworm22",
  "sportsfanatic",
  "tech_wizard",
];

//search the username with string

console.log(usernames.indexOf("user123"));
console.log(usernames.indexOf("travel_bug"));
console.log(usernames.indexOf("sportsfanatic"));
console.log(usernames.includes("user123"));

//linear search Pseudocode
/*
1.This function accepts an array and a value.
2.Loop through the array and check if the current array element is equal to the value.
3.If it is, return the index at wich the element is found.
4.If the value is never found,return -1;

Don't use indexOf to implement this function!
*/ 
function linearSearch(names,value) {
for (let i = 0 ;i < names.length;i++){
  if(names[i] === value) {
    console.log(i);
    return;
  }
}
console.log("-1");
}
linearSearch(states,"Texas");
linearSearch([10, 15, 20, 25, 30], 15) // 1
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) // 5
linearSearch([100], 100) // 0
linearSearch([1,2,3,4,5], 6) // -1
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10) // -1
linearSearch([100], 200) // -1