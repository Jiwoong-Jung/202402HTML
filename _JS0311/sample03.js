function outer() {
    const a = 'A';
    const b = 'B';

    function inner() {
        const a = 'AA';
        console.log(b);
    }
    return inner;
}

const outerFunc = outer();
outerFunc(); // B