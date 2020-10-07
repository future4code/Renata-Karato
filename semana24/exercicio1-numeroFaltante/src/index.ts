const findMissingNumber = (array: number[]): number => {
    const expectedSum = 55;
    let sum = 0;

    for (const item of array) {
        sum += item;
    }
    return expectedSum - sum;
}

console.log(findMissingNumber([1, 2, 3, 4, 5, 6, 7, 8, 10]))