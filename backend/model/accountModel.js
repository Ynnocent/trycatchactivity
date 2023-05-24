const accounts = [];
const dateId = new Date();

module.exports = class AccountModel {
    constructor(firstName, lastName, age, email)
    {
        this.id = dateId.getTime();
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    };

    save() {
        accounts.push(this);
    }

    static fetchAccounts() {
        return accounts;
    }
}