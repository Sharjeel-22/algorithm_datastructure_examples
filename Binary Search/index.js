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

  /* 
Binary Search Exercise
Write a function called binarySearch which accepts a sorted array
and a value and returns the index at which the value exists.Otherwise, return -1.
This algorithm should be more efficient than linearSearch - 
you can read how to implement it here - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/
*/

function binarySearch(arrays,value) {
    let start = 0;
    let end = arrays.length -1;
    let middle = Math.floor((start + end) / 2)

    while(arrays[middle] !== value) {
        console.log(start,middle,end)
        if(value < arrays[middle]) {
            end = middle -1;
        }else{
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    console.log(start,middle,end);
    return middle;
}
binarySearch([1,2,3,4,5],2)