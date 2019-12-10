function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const nk = readLine().split(' ');

        const n = parseInt(nk[0], 10);

        const k = parseInt(nk[1], 10);
        let sums = [],max =0
        for (let i = n; i > 0; i--){
            for (let j = i - 1; j > 0; j--){
                if ((i & j) < k && (i & j) >= max) {
                    max = (i & j)
                }
            }
        }
        console.log(max)
    }
}