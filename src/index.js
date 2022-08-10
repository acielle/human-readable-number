module.exports = function toReadable (number) {
    const objOneToNine = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine"
    }

    const objTenToNineteen = {
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen"
    }

    const objTwentyToNinety = {
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety"
    }

    const nStr = number.toString();
    let result = 0;
    let resultH = 0;
    let resultD = 0;
    let resultS = 0;

    if (nStr === '0') return 'zero';

    if (nStr.length === 1) {
        for (let key in objOneToNine) {
            if (nStr === key) {
                result = objOneToNine[key];
                return result;
            }
        }
    }

    if (nStr.length === 2) {
        if (nStr.charAt(0) === '1') {
            for (let key in objTenToNineteen) {
                if (nStr === key) {
                    result = objTenToNineteen[key];
                    return result;
                }
            }
        }
        else if (nStr.charAt(1) === '0') {
            for (let key in objTwentyToNinety) {
                if (nStr === key) {
                    result = objTwentyToNinety[key];
                    return result;
                }
            }
        }
        else if (nStr.charAt(1) != '0') { 
            for (let key in objTwentyToNinety) {
                if (key.toString().charAt(0) === nStr.charAt(0)) {
                    resultD= objTwentyToNinety[key];
                }
            }
            for (let key in objOneToNine) {
                if (key === nStr.charAt(1)) {
                    resultS = objOneToNine[key];
                }
            }
            return result = resultD + ' ' + resultS;
        }
    }

    if (nStr.length === 3) {
        if (nStr.charAt(1) === '0' && nStr.charAt(2) === '0') {
            for (let key in objOneToNine) {
                if (key === nStr.charAt(0)) {
                    result = objOneToNine[key] + ' hundred';
                    return result;
                }
            }
        }
        else if (nStr.charAt(1) === '0' && nStr.charAt(2) != '0') {
            for (let key in objOneToNine) {
                if (key === nStr.charAt(0)) {
                    resultH = objOneToNine[key] + ' hundred ';
                }
            }
            for (let key in objOneToNine) {
                if (key === nStr.charAt(2)) {
                    resultS = objOneToNine[key];
                }
            }
            result = resultH + resultS;
            return result;
        }
        else if (nStr.charAt(1) != '0' && nStr.charAt(1) != '1' && nStr.charAt(2) === '0') {
            for (let key in objOneToNine) {
                if (key === nStr.charAt(0)) {
                    resultH = objOneToNine[key];
                }
            }
            for (let key in objTwentyToNinety) {
                if (key.charAt(0) === nStr.charAt(1)) {
                    resultD = objTwentyToNinety[key];
                }
            }
            result = resultH + ' hundred ' + resultD;
            return result;
        }
        else if (nStr.charAt(1) === '1') {
            for (let key in objOneToNine) {
                if (key === nStr.charAt(0)) {
                    resultH = objOneToNine[key];
                }
            }
            for (let key in objTenToNineteen) {
                if (nStr.includes(key, 1)) {
                    resultD = objTenToNineteen[key];
                }
            }
            result = resultH + ' hundred ' + resultD;
            return result;
        }
        else if (nStr.charAt(1) != '0' && nStr.charAt(1) != '1' && nStr.charAt(2) != '0') {
            for (let key in objOneToNine) {
                if (key === nStr.charAt(0)) {
                    resultH = objOneToNine[key];
                }
            }
            for (let key in objTwentyToNinety) {
                if (key.charAt(0) === nStr.charAt(1)) {
                    resultD = objTwentyToNinety[key];
                }
            }
            for (let key in objOneToNine) {
                if (key === nStr.charAt(2)) {
                    resultS = objOneToNine[key];
                }
            }
            result = resultH + ' hundred ' + resultD + ' ' + resultS;
            return result;
        }
    }
}
