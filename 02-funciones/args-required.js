"use strict";
(() => {
    const fullName = (firstname, lastName) => {
        return `${firstname} ${lastName}`;
    };
    const name = fullName('Tony', 'Stark');
    console.log({ name });
})();
