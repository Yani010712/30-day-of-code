function processData(input) {

    let arr = input.split("\n"); 
    let even = "";
    let odd = "";
 
    for (let i = 1; i < arr.length; i++){ 
        for (let j = 0; j < arr[i].length; j++) {
            if (j%2 == 0) { 
                even += arr[i][j]; 
            } else {
                odd += arr[i][j]; 
            }
        }
        console.log(`${even} ${odd}`);
        even = "";
        odd = "";
    }
} 
