class CharactersServices {

    constructor() {
        this.characters = [
            {
            id_name: 1,
            name: 'Paul Atreides',
            faction: 'Atreides',
            planet: 'Caladan'
            },
            {
            id_name: 2,
            name: 'Duncan Idaho',
            faction: 'Atreides',
            planet: 'Ginaz'
            }, 
            {
            id_name: 3,
            name: 'Jessica Atreides',
            faction: 'Bene Gesserit',
            planet: 'Caladan'
            },
            {
                id_name: 4,
                name: 'Alia Atreides',
                faction: 'Atreides',
                planet: 'Arrakis',
            },
            {
                id_name: 5,
                name: 'Duque Leto I Atreides',
                faction: 'Atreides',
                planet: 'Caladan',
            },
            {
                id_name: 6,
                name: 'Leto II Atreides',
                faction: 'Atreides',
                planet: 'Arrakis',
            },
            {
                id_name: 7,
                name: 'Gurney Halleck',
                faction: 'Atreides',
                planet: 'Giedi Prime',
            },
            {
                id_name: 8,
                name: 'Thufir Hawat',
                faction: 'Atreides',
                planet: 'Desconocido',
            },
            {
                id_name: 9,
                name: 'Dr. Wellington Yueh',
                faction: 'Suk',
                planet: 'Giedi Prime',
            },
            {
                id_name: 10,
                name: 'Barón Vladimir Harkonnen',
                faction: 'Harkonnen',
                planet: 'Giedi Prime',
            },
            {
                id_name: 11,
                name: 'Feyd-Rautha Raban Harkonnen',
                faction: 'Harkonnen',
                planet: 'Giedi Prime',
            },
            {
                id_name: 12,
                name: 'Piter De Vries',
                faction: 'Harkonen',
                planet: 'Giedi Prime'
            },
            {
                id_name: 13,
                name: 'Glossu Rabban Harkonnen',
                faction: 'Harkonnen',
                planet: 'Giedi Prime',
            },
            {
                id_name: 14,
                name: 'Shaddam IV',
                faction: 'Corrino',
                planet: 'Kaitain',
            },
            {
                id_name: 15,
                name:'Princesa Irulan',
                faction: 'Corrino',
                planet: 'Kaitain',
            },
            {
                id_name: 16,
                name: 'Reverenda Madre Gaius Helen Mohiam',
                faction: 'Bene Gesserit',
                planet: 'Wallach IX',
            },
            {
                id_name: 17,
                name:'Liet-Kynes',
                faction: 'Corrino',
                planet: 'Arrakis',
            },
        
        ];
    };
    

    async create(data) {
        const newCharacter = {
            id_name: this.characters.length + 1,
            ...data,
        };
        this.characters.push(newCharacter);
        return newCharacter;
    };

    async find() {
        return this.characters;

    };

    async findOne(id_name) {
        return this.characters.find(item => item.id_name == id_name);
    };

    async update(id_name, changes) {
        const index = this.characters.findIndex(item => item.id_name == id_name)
        if (index === -1) {
            throw new Error('Character not found or lost in the desert....')
        };
        const character = this.characters[index];
        this.characters[index] = {
            ...character,
            ...changes,
        };
        return this.characters[index];
    };

    async delete(id_name) {
        const index = this.characters.findIndex(item => item.id_name == id_name)
        if (index === -1) {
            throw new Error('Character not found or lost in the desert....')
        };
        this.characters.splice(index, 1);
        return {id_name};
    };

};
module.exports = CharactersServices;
