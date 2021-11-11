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

    async create(data) {
        const newFaction = {
            id_faction: this.factions.length + 1,
            ...data,
        };
        this.factions.push(newFaction);
        return newFaction;
    };

    async find() {
        return this.factions;
    };

    async findOne(id_faction) {
        const index = this.factions.findIndex(item => item.id_faction == id_faction);
        if (index === -1) {
            throw new Error('Faction not found or lost in the times....')
        };
        return this.factions[index];
    };

    
    async update(id_faction, changes) {
        const index = this.factions.findIndex(item => item.id_faction == id_faction)
        if (index === -1) {
            throw new Error('Faction not found or lost in the times....')
        };
        const faction = this.factions[index];
        this.factions[index] = {
            ...faction,
            ...changes,
        };
        return this.factions[index];
    };

    async delete(id_faction) {
        const index = this.factions.findIndex(item => item.id_faction == id_faction)
        if (index === -1) {
            throw new Error('Faction not found or lost in the times....')
        };
        this.factions.splice(index, 1);
        return {id_faction};
    };
   
};

module.exports = FactionServices;