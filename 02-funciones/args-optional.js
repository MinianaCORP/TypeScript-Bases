"use strict";
(() => {
    const fullName = (firstname, lastName) => {
        return `${firstname} ${lastName || 'no lastName'}`;
    };
    const name = fullName('Tony');
    console.log({ name });
})();
