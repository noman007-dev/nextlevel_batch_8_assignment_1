** Type Aliases vs Interfaces in TypeScript **

Introduction:
Type and interface both are used to defined types in typescript. They can do the same kind of task  but both served for different perposed most of the time. so a developer should know when to use which one.

interface generally used for objects. it can also extend other interface. multiple interface can have same name but type can't do that.
Interface code:
    interface Animal {
        species: string;
    }

    interface Cat extends Animal {
        breed: string;
    }

interface IEmployee { name: string }
interface IEmployee { id: number }  

const employee: IEmployee = { id: 123, name: "ABC" };

On the otherhand type used literals, unions, tuples, primitives. it also can be used for objects. Unlike interfaces, type aliases can combine object types using the & operator. 
Type code:
    type ID = number;
    type Role = "admin" | "member";
    type Vehicle = { brand: string };
    type Car = Vehicle & { model: string };

Conclusion:
Use interfaces mainly for object  and class , especially when inheritance or merging is needed. Choose type aliases for primitives, unions, tuples, and intersections. Both are useful depends on the requirements of the project.


