const boom = require('@hapi/boom');

class CharactersServices {

    constructor() {
        this.characters = [
            {
            id: 1,
            name: 'Paul Atreides',
            faction: 'Atreides',
            planet: 'Caladan'
            },
            {
            id: 2,
            name: 'Duncan Idaho',
            faction: 'Atreides',
            planet: 'Ginaz'
            }, 
            {
            id: 3,
            name: 'Jessica Atreides',
            faction: 'Bene Gesserit',
            planet: 'Caladan'
            },
            {
                id: 4,
                name: 'Alia Atreides',
                faction: 'Atreides',
                planet: 'Arrakis',
            },
            {
                id: 5,
                name: 'Duque Leto I Atreides',
                faction: 'Atreides',
                planet: 'Caladan',
            },
            {
                id: 6,
                name: 'Leto II Atreides',
                faction: 'Atreides',
                planet: 'Arrakis',
            },
            {
                id: 7,
                name: 'Gurney Halleck',
                faction: 'Atreides',
                planet: 'Giedi Prime',
            },
            {
                id: 8,
                name: 'Thufir Hawat',
                faction: 'Atreides',
                planet: 'Desconocido',
            },
            {
                id: 9,
                name: 'Dr. Wellington Yueh',
                faction: 'Suk',
                planet: 'Giedi Prime',
            },
            {
                id: 10,
                name: 'Barón Vladimir Harkonnen',
                faction: 'Harkonnen',
                planet: 'Giedi Prime',
            },
            {
                id: 11,
                name: 'Feyd-Rautha Raban Harkonnen',
                faction: 'Harkonnen',
                planet: 'Giedi Prime',
            },
            {
                id: 12,
                name: 'Piter De Vries',
                faction: 'Harkonen',
                planet: 'Giedi Prime'
            },
            {
                id: 13,
                name: 'Glossu Rabban Harkonnen',
                faction: 'Harkonnen',
                planet: 'Giedi Prime',
            },
            {
                id: 14,
                name: 'Shaddam IV',
                faction: 'Corrino',
                planet: 'Kaitain',
            },
            {
                id: 15,
                name:'Princesa Irulan',
                faction: 'Corrino',
                planet: 'Kaitain',
            },
            {
                id: 16,
                name: 'Reverenda Madre Gaius Helen Mohiam',
                faction: 'Bene Gesserit',
                planet: 'Wallach IX',
            },
            {
                id: 17,
                name:'Liet-Kynes',
                faction: 'Corrino',
                planet: 'Arrakis',
            },
        
        ];
    };
    

    async create(data) {
        const newCharacter = {
            id: this.characters.length + 1,
            ...data,
        };
        this.characters.push(newCharacter);
        return newCharacter;
    };

    async find() {
        return this.characters;

    };

    async findOne(id) {
        const character = this.characters.find(item => item.id == id);
        if (!character) {
            throw boom.notFound('Character not found or lost in the desert....');
         };
        return character;
    };

    async update(id, changes) {
        const index = this.characters.findIndex(item => item.id == id)
        if (index === -1) {
            throw boom.notFound('Character not found or lost in the desert....');

        };
        const character = this.characters[index];
        this.characters[index] = {
            ...character,
            ...changes,
        };
        return this.characters[index];
    };

    async delete(id) {
        const index = this.characters.findIndex(item => item.id == id)
        if (index === -1) {
            throw boom.notFound('Character not found or lost in the desert....');

        };
        this.characters.splice(index, 1);
        return {id};
    };

};
module.exports = CharactersServices;
