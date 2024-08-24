function cubeNumber(number) {

    let cube = Math.pow(number, 3);

    if (typeof(number)!== 'number') {
        return 'type a number';
    }

    return cube;


}

console.log(cubeNumber(true));