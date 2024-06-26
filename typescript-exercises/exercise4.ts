class Persn {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getName(): string {
        return this.name;
    }
}



class Perso2 {
    name: string;
    age: number;
    private socialSecurityNumber: string;

    constructor(name: string, age: number, ssn: string) {
        this.name = name;
        this.age = age;
        this.socialSecurityNumber = ssn;
    }

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }
}
