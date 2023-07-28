"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (test) => {
        return (test.length > 3) ? true : false;
    };
    Validations.validateDate = (myDate) => {
        return (isNaN(myDate.valueOf())) ? false : true;
    };
})(Validations || (Validations = {}));
console.log(Validations.validateText('Yoel'));
//# sourceMappingURL=main.js.map