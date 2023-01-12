// Modularity which holds items
var storages = (function () {

    // Private properties
    var totalNum = 0;
    var listName = [];

    // Private methods
    var privateName = function (name) {
        listName.push(name);
    }
    var privateNum = function () {
        return listName.length;
    }

    // Public methods
    return {
        publicName: function (name) {
            privateName(name);
            totalNum++;
        },
        publicNum: function () {
            return privateNum();
        },

        // public properties (Just for checking addnames)
        listName
    };
})();

// Test (1)
storages.publicName('manali');
console.log(storages.publicNum());
console.log(storages.listName);

// Test (2)
storages.publicName('arth');
console.log(storages.publicNum());
console.log(storages.listName);

// Blocking VS Non-Blocking
// blocking - consoles are blocking code because they are executed in order(1st console and after that 2nd)

console.log('start');
console.log('I am stuck');


// non-blocking - SetTimeout is non-blocking code because it allows to 2nd console to execute first and after that executing first.
setTimeout(() => {
    console.log('end');
}, 0);
console.log('I am unstuck');







