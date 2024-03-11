const country = {
    name: "Korea",
    population: "5178579",
    get_name: function () {
        return this.name;
    }
};
console.log(country.get_name()); // Korea
console.log(country.name); // Korea
country.age = 24;
console.log(country); 