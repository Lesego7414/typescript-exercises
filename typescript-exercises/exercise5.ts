class Calculator {
    add(a: number, b: number): number {
        this.validateNumber(a, b);
        return a + b;
    }

    subtract(a: number, b: number): number {
        this.validateNumber(a, b);
        return a - b;
    }

    multiply(a: number, b: number): number {
        this.validateNumber(a, b);
        return a * b;
    }

    divide(a: number, b: number): number {
        this.validateNumber(a, b);
        if (b === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return a / b;
    }

    private validateNumber(...numbers: number[]): void {
        for (const num of numbers) {
            if (typeof num !== "number") {
                throw new Error("Invalid number input");
            }
        }
    }
}
