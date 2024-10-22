export class Person {
    constructor(
        protected name: string,
        protected age: number
    ) {}

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }
}