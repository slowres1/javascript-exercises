const findTheOldest = function(people) {
    const oldest = people.sort(function(a, b) {
        const last = getAge(a.yearOfBirth, a.yearOfDeath);
        const next = getAge(b.yearOfBirth, b.yearOfDeath);
        return last > next ? -1 : 1;
    });
    return oldest[0];
};

const getAge = function(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
