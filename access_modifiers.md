** Access Modifiers in TypeScript OOP **
Introduction:
Access modifiers controls how class properties and methods can be accessed. they are mainly used for protect data and implement encapsulation. TypeScript provides public, private, protected, and readonly access modifiers.

Public modifier allows property or method access anywhere, even it also allow it to go outside the class. private modifier restricts access to the class where the property or method is declared. It helps protect internal data from direct access. protected modifier allows access inside the declaring class and its child classes, but not directly from outside.

Code:

     class Employee {
        constructor(
            public name: string,
            private _baseSalary: number
        ) {}
    }
    class Manager extends Employee {
        describe(): string {
            return `${this.name} earns ${this._baseSalary}`;
        }
    }
readonly modifier can stop a property from being reassigned after initialization. The id value cannot be reassigned after the object is created. you can only view the value but can't edit it.
Code:
    class User {
    constructor(public readonly id: number) {}
    }

Conclusion:
In summary, public allowed general access. private restricted access to the class.However protected allowed access to child classes and readonly prevented reassignment. Choosing the appropriate modifier helps maintain encapsulation and protect class data.
