// @flow
class MyClass {
    prop: number;

    method() {
        this.prop = "123";
    }
}

const myClass = new MyClass();
myClass.method();
