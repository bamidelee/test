export function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

export function reverse(word) {
    return word.split('').reverse().join('');
}

export const calculator = {
    add: (fir, sec) => {
        return fir + sec;
    },
    subtract: (fir, sec) => {
        return fir - sec;
    },
    multiply: (fir, sec) => {
        return fir * sec;
    },
    divide: (fir, sec) => {
        return fir / sec;
    }
};

export function ceaser(word) {
    let newWord = '';
    for (let i = 0; i < word.length; i++) {
        let ascii = word.charCodeAt(i);
        ascii++;
        newWord += String.fromCharCode(ascii);
    }
    return newWord;
}

export function analyze(array) {
    let object = {};
    let total = array.reduce((total, val) => {
        return total + val;
    }, 0);
    object.average = total / array.length;
    let min = () => {
        let temp = array[0];
        for (let i = 0; i < array.length; i++) {
            if (temp > array[i]) {
                temp = array[i];
            }
        }
        return temp;
    };
    object.min = min();
    let max = () => {
        let temp = array[0];
        for (let i = 0; i < array.length; i++) {
            if (temp < array[i]) {
                temp = array[i];
            }
        }
        return temp;
    };
    object.max = max();
    object.length = array.length;
    return object;
}