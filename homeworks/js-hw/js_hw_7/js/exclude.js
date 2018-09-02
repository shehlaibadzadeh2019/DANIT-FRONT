function excludeBy(origin, excluded, field) {
    if (!Array.isArray(origin) || !Array.isArray(excluded)) {
        throw TypeError("The first and the second parameters must be of type Array!");
    }
    return origin.filter(el => !(excluded.some(ex => ex[field] === el[field])));
}

//testdata
const excluded = [{
        name: "Ivan",
        surname: "Ivanov",
        gender: "male",
        age: 30
},
    {
        name: "Anna",
        surname: "Ivanova",
        gender: "female",
        age: 22
}];

const origin = [
    {
        name: "Roman",
        surname: "Doe",
        gender: "male",
        age: 10
},
    {
        name: "Anna",
        surname: "Ivanova",
        gender: "female",
        age: 22
},
    {
        name: "Ivan",
        surname: "Ivanov",
        gender: "male",
        age: 30
}];

console.dir(excludeBy(origin, excluded, "name"));
