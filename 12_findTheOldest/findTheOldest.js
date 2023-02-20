const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        const currentYear = new Date().getFullYear();
        let oldestAge = 0;
        let personAge = 0;

        if (!oldest.yearOfDeath) {
            oldestAge = currentYear - oldest.yearOfBirth;
        } else {
            oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        }

        if (!person.yearOfDeath) {
            personAge = currentYear - person.yearOfBirth;
        } else {
            personAge = person.yearOfDeath - person.yearOfBirth;
        }

        if (oldestAge > personAge) {
            return oldest;
        } else {
            return person;
        }
    })
};

// Do not edit below this line
module.exports = findTheOldest;
