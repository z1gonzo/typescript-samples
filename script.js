var person = {
    name: 'Goon',
    age: 27,
    hobbies: ['Sports', 'Cooking']
};
var favouriteActivities;
favouriteActivities = ['Sport'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    console.log("HEH");
}
