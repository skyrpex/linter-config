const testVeryLongMethodName = (...args: any[]) => {
    console.log(args)
};

testVeryLongMethodName(
    testVeryLongMethodName,
    testVeryLongMethodName,
    testVeryLongMethodName
);

class Test {
protected age: number = "test";

    public static getInstance(): Test {
        return this
    }
}
