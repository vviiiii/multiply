module.exports = function multiply(one, two) {
    //split string and reverse array
    let arrOne = one.split('').reverse();
    let arrTwo = two.split('').reverse();
    // console.log(arrOne);
    // console.log(arrTwo);

    let arrMult = [];

    //mult all elements in arrOne with all elements arrTwo 
    for (let i = 0; i < arrOne.length; i++) {

        for (let j = 0; j < arrTwo.length; j++) {
            let mult = arrOne[i] * arrTwo[j];

            if (arrMult[i + j]) { // if exist then sum
                arrMult[i + j] += mult;
            } else { 
                arrMult[i + j] = mult;
            }

        }
    }
    // console.log('arrMult', arrMult);

    //check elements, if element is composite then move a remainder of the division to  the next position
    for (let i = 0; i < arrMult.length; i++) {
        let rem = Math.floor(arrMult[i] / 10); // remainder of the devision

        arrMult[i] = arrMult[i] % 10; // get and write simple number

        if (arrMult[i + 1]) {
            arrMult[i + 1] += rem;
        } else if (rem != 0) {
            arrMult[i + 1] = rem;
        }
        // console.log('rem', rem);

    }

    // console.log('arrMult', arrMult);

    let res = arrMult.reverse().join('');
    return res;
}