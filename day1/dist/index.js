"use strict";
// Sample TypeScript code demonstrating types and basic functionality
function greetPerson(person) {
    const greeting = `Hello, ${person.name}! You are ${person.age} years old.`;
    if (person.email) {
        return `${greeting} Email: ${person.email}`;
    }
    return greeting;
}
function calculateSum(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
// Main execution
function main() {
    console.log('TypeScript Node.js Environment Setup Complete!\n');
    const user = {
        name: 'Alice',
        age: 30,
        email: 'alice@example.com'
    };
    console.log(greetPerson(user));
    const numbers = [1, 2, 3, 4, 5];
    const sum = calculateSum(numbers);
    console.log(`\nSum of ${numbers.join(', ')}: ${sum}`);
    console.log('\nTypeScript features working correctly!');
}
main();
