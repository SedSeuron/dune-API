class PlanetsServices {

    constructor() {
        this.planets = [
            {
                id_planet: 1,
                name: 'Arrakis',
            },
            {
                id_planet: 2,
                name: 'Bela Tegeuse',
            },
            {
                id_planet: 3,
                name: 'Caladan',
            },
            {
                id_planet: 4,
                name: 'Corrin',
            },
            {
                id_planet: 5,
                name: 'Ecaz',
            },
            {
                id_planet: 6,
                name: 'Giedi Prime',
            },
            {
                id_planet: 7,
                name: 'Ix',
            },  {
                id_planet: 8, 
                name: 'Kaitain'
            },
            {
                id_planet: 9,
                name: 'Richese',
            },
            {
                id_planet: 10,
                name: 'Salusa Secundus',
            },
            {
                id_planet: 11,
                name: 'Tleilax',
            },
            {
                id_planet: 12,
                name: 'Wallach IX'
            },
        ];
    };

    create() {

    };

    find() {
        return this.planets;
    };

    findOne(id_planet) {
        return this.planets.find(item => item.id_planet == id_planet);
    };

    update() {

    };

    delete() {

    };

} ;

module.exports = PlanetsServices;
