export function multiplyAndFlatten(firstArray: Array<any>, secondArray: Array<any>) {
    let elements = [];

    firstArray.forEach(a => secondArray.forEach(b => {
        let testCase = [];

        if (Array.isArray(a)) a.forEach(elementOfA => testCase.push(elementOfA));
        else testCase.push(a);

        if (Array.isArray(b)) b.forEach(elementOfB => testCase.push(elementOfB));
        else testCase.push(b);

        elements.push(testCase)
    }))

    return elements;
}
