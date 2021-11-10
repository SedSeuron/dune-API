class FactionServices{

    constructor () {
        this.factions = [
            {
                id_faction: 1,
                faction: 'Bene Gesserit',
            },
            {
                id_faction: 2, 
                faction: 'Bene Tleilax',
            },
            {
                id_faction: 3,
                faction: 'Cofradía Espacial',
            },
            {
                id_faction: 4,
                faction: 'Fremen',
            },
            {
                id_faction: 5,
                faction: 'Combine Honnete Ober Advancer Mercantiles (CHOAM)',
            },
            {
                id_faction: 6,
                faction: 'Sardaukar',
            },
            {
                id_faction: 7,
                faction: 'Mentats',
            },
            {
                id_faction: 8,
                faction: 'Landsraad',
            },
            {
                id_faction: 9,
                faction: 'Escuela Suk',
            },
        
        ];
    };

    create() {

    };

    find() {
        return this.factions;
    };

    findOne(id_faction) {
        return this.factions.find(item => item.id_faction == id_faction);
    };

    update() {

    };

    delete() {

    };

};

module.exports = FactionServices;