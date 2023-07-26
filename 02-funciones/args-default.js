"use strict";
(() => {
    const fullName = (firstname, lastName, upper = false) => {
        if (upper) {
            return `${firstname} ${lastName || 'no lastName'}`.toUpperCase();
        }
        return `${firstname} ${lastName || 'no lastName'}`;
    };
    const name = fullName('Tony', 'Stark', true);
    console.log({ name });
})();
