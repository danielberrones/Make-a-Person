let Person = function(fullName) {
    let first,last;

    function updateName(str) {
        first = str.split(' ')[0];
        last = str.split(' ')[1];
    }
    updateName(fullName);

    this.getFirstName = function() {
        return first;
    };

    this.getLastName = function() {
        return last;
    };

    this.getFullName = function() {
        return `${first} ${last}`;
    };

    this.setFirstName = function(str) {
        first = str;
    };

    this.setLastName = function(str) {
        last = str;
    };

    this.setFullName = function(str) {
        updateName(str);
    }
};

let bob = new Person('Bob Smith');

bob.setFullName('Steve Jones');
console.log(bob.getFullName());
