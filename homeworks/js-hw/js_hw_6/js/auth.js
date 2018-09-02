function createNewUser() {
    
    function User() {
        Object.defineProperty(this, "firstName", {
            get: function () {
                return firstName;
            },
            set: function (value) {
                if (value == null){
                    throw Error("User cancelled!");
                }
                if (value.match(/^[A-Za-z]+$/)){
                    firstName = value;
                }else{
                 this.firstName = prompt("Please input your firstname... Only A-Z and a-z letters are allowed!");   
                }            }
        });
        Object.defineProperty(this, "lastName", {
            get: function () {
                return lastName;
            },
            set: function (value) {
                if (value == null){
                    throw Error("User cancelled!");
                }
                if (value.match(/^[A-Za-z]+$/)){
                    lastName = value;
                }else{
                 this.lastName = prompt("Please input your lastname... Only A-Z and a-z letters are allowed!");   
                }
            }
        });
        this.getLogin = function () {
            return firstName && lastName ?
                firstName.charAt(0).toLocaleLowerCase().concat(lastName.toLocaleLowerCase()) :
                undefined;
        };
    }
    
    let newUser = new User();
    newUser.firstName = prompt("Please input your fistname...");
    newUser.lastName = prompt("Please input your lastname...");
    return newUser;
}

let user = createNewUser();
console.log(user.getLogin());