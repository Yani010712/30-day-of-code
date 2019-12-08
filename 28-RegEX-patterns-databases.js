function main() {
    const N = parseInt(readLine(), 10);
    let patt = new RegExp("@gmail.com");
    let names = []; //Creating the array of first names

    for (let NItr = 0; NItr < N; NItr++) {
        const firstNameEmailID = readLine().split(' ');

        const firstName = firstNameEmailID[0];

        const emailID = firstNameEmailID[1];
        if(patt.test(emailID)){
            names.push(firstName);
        }
    }
        //Sorting names in alphabetical order, then printing them to console.
        names.sort().forEach(function(name){
        console.log(name);
    }); 
    
}