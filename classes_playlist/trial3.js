class Person {

    static species() {
        return 'Homo Sapiens';
    }

    static speciesSentence() {
        return `Humans are classified as ${this.species()}`;
    }

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.hasJob = false;
    }
    
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    
    setFirstName(firstName) {
        this.firstName = firstName;
    }

    setLastName(lastName) {
        this.lastName = lastName;
    }
    
}
