module.exports = function multiply(one, two) {
    //split string and reverse array
    let arrOne = one.split('').reverse(),
        arrTwo = two.split('').reverse();
    // console.log('arrOne', arrOne);
    // console.log('arrTwo', arrTwo);

    /*
                55
   *            55
   ---------------
               275
            + 275
            ------
             3025      
    */
    let arrMult = [];
    arrOne.forEach((elem1, i) => {
        arrTwo.forEach((elem2, j) => {
            let mult = elem1 * elem2;
            if (arrMult[i + j]) { // if exist then sum
                arrMult[i + j] += mult;
            } else {
                arrMult[i + j] = mult;
            }
        });
    });
    // console.log('arrMult', arrMult);

    arrMult.forEach((elem, i) => {
        let rem = Math.floor(elem / 10); // remainder of the devision
        arrMult[i] = elem % 10; // get and write simple number
        if (arrMult[i + 1]) {
            arrMult[i + 1] += rem;
        } else if (rem != 0) {
            arrMult[i + 1] = rem;
        }
    });
    // console.log('arrMult', arrMult);

    let res = arrMult.reverse().join('');
    return res;
}