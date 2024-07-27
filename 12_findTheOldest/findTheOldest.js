const findTheOldest = function(array) {
    let ageArray = array.reduce((ageArray, person) => {
        if (person.yearOfDeath === undefined) {
            person.yearOfDeath = new Date().getFullYear();
        }
        ageArray.push(person.yearOfDeath - person.yearOfBirth);
        return ageArray;
    }, [])

    let index = ageArray.indexOf(Math.max(...ageArray));

    return array[index];
};

// Do not edit below this line
module.exports = findTheOldest;
