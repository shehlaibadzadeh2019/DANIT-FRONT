function createNewUser() {

    function User() {
        let firstName;
        let lastName;
        this.setFirstName = function (value) {
            firstName = value;
        };
        this.setLastName = function (value) {
            lastName = value;
        };
        this.getFirstName = function () {
            return firstName;
        }
        this.getLastName = function () {
            return lastName;
        }
        this.getLogin = function () {
            return firstName && lastName ?
                firstName.charAt(0).toLocaleLowerCase().concat(lastName.toLocaleLowerCase()) :
                undefined;
        };
    }
    let newUser = new User();
    newUser.setFirstName(prompt("Please input your fistname..."));
    newUser.setLastName(prompt("Please input your lastname..."));
    return Object.freeze(newUser);
}

let user = createNewUser();
console.log(user.getLogin());
user.firstName = "test";
user.lastName = "test";
console.log (user.firstName);
console.log (user.lastName);
user.setFirstName("test2")
user.lastName = "test";
console.log (user.firstName);
console.log (user.getFirstName());
