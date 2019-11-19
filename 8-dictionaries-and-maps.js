function processData(input) {
    let arr = input.split("\n");
    let entriesLength = arr.splice(0, 1); 
    let queries = arr.splice(entriesLength); 

  for (let i = 0; i < entriesLength; i++) {
    arr[i] = arr[i].split(" ");
  }
  
  let phoneBookMap = new Map(arr);
  
  for (let i = 0; i < queries.length; i++) {
    if (phoneBookMap.has(queries[i])) {
      console.log(queries[i] + "=" + phoneBookMap.get(queries[i]));
    } else {
      console.log("Not found");
    }
  }
} 
