import { Groupes } from '../Groups/groups';
import { Items } from '../Items/items';

export const People = {
    ObiWan: 0,
    Anakin: 1,
    Mace: 2,
    Palpatine: 3,
    Veers: 4,
    C3PO: 5,
    Solo: 6,
    Chewbacca: 7,
    Ahsoka: 8,
    Ackbar: 9,
    Hux: 10,
    Tarkin: 11,
    Amedda: 12,
    Stormtrooper001: 13,
    Stormtrooper002: 14,
    Stormtrooper003: 15,
    Stormtrooper004: 16,
    Stormtrooper005: 17,
    Stormtrooper006: 18,
    Stormtrooper007: 19,
    Stormtrooper008: 20,
    Stormtrooper009: 21,
    Stormtrooper010: 22,
    Stormtrooper011: 23,
    Stormtrooper012: 24,
    Stormtrooper013: 25,
    Clonetrooper001: 26,
    Clonetrooper002: 27,
    Clonetrooper003: 28,
    Clonetrooper004: 29,
    Clonetrooper005: 30,
    Clonetrooper006: 31,
    Clonetrooper007: 32,
    Clonetrooper008: 33,
    Clonetrooper009: 34,
    Clonetrooper010: 35,
    Clonetrooper011: 36,
    Clonetrooper012: 37,
    Clonetrooper013: 38,
    Clonetrooper014: 39,
};

export const getpeople = (testItemsWithId, testGroupsWithId) => {
    const testPeople = [];
    testPeople[People.ObiWan] = {
        name: 'Obi-Wan Kenobi',
        active: true,
        itemsCanBeAttended: [
            testItemsWithId[Items.RegularDarthVaderAttack]._id,
            testItemsWithId[Items.GalaxyShowAndTell]._id,
            testItemsWithId[Items.CleaningDuty]._id,
        ],
        groupes: [
            testGroupsWithId[Groupes.Alliance]._id,
            testGroupsWithId[Groupes.GalacticKnowledgeEnthusiasts]._id,
        ],
    };

    testPeople[People.Anakin] = {
        name: 'Anakin Skywalker',
        active: false,
        itemsCanBeAttended: [
            testItemsWithId[Items.GalaxyShowAndTell]._id,
            testItemsWithId[Items.CleaningDuty]._id,
        ],
        groupes: [
            testGroupsWithId[Groupes.Alliance]._id,
            testGroupsWithId[Groupes.GalacticKnowledgeEnthusiasts]._id,
        ],
    };

    testPeople[People.Mace] = {
        name: 'Mace Windu',
        active: true,
        itemsCanBeAttended: [
            testItemsWithId[Items.RegularDarthVaderAttack]._id,
            testItemsWithId[Items.GalaxyShowAndTell]._id,
            testItemsWithId[Items.CleaningDuty]._id,
        ],
        groupes: [
            testGroupsWithId[Groupes.Alliance]._id,
            testGroupsWithId[Groupes.GalacticKnowledgeEnthusiasts]._id,
        ],
    };

    testPeople[People.Palpatine] = {
        name: 'Palpatine',
        active: true,
        itemsCanBeAttended: [
            testItemsWithId[Items.GalaxyShowAndTell]._id,
            testItemsWithId[Items.DeathStarInspection]._id,
        ],
        groupes: [
            testGroupsWithId[Groupes.Empire]._id,
            testGroupsWithId[Groupes.GalacticKnowledgeEnthusiasts]._id,
        ],
    };

    testPeople[People.Veers] = {
        name: 'General Veers',
        active: true,
        itemsCanBeAttended: [
            testItemsWithId[Items.GalaxyShowAndTell]._id,
            testItemsWithId[Items.DeathStarInspection]._id,
        ],
        groupes: [
            testGroupsWithId[Groupes.Empire]._id,
            testGroupsWithId[Groupes.GalacticKnowledgeEnthusiasts]._id,
        ],
    };

    testPeople[People.C3PO] = {
        name: 'C-3PO',
        active: true,
        itemsCanBeAttended: [testItemsWithId[Items.CleaningDuty]._id],
        groupes: [testGroupsWithId[Groupes.Alliance]._id],
    };

    testPeople[People.Solo] = {
        name: 'Han Solo',
        active: true,
        itemsCanBeAttended: [
            testItemsWithId[Items.RegularDarthVaderAttack]._id,
            testItemsWithId[Items.GalaxyShowAndTell]._id,
        ],
        groupes: [
            testGroupsWithId[Groupes.Alliance]._id,
            testGroupsWithId[Groupes.GalacticKnowledgeEnthusiasts]._id,
        ],
    };

    testPeople[People.Chewbacca] = {
        name: 'Chewbacca',
        active: true,
        itemsCanBeAttended: [
            testItemsWithId[Items.RegularDarthVaderAttack]._id,
            testItemsWithId[Items.GalaxyShowAndTell]._id,
        ],
        groupes: [
            testGroupsWithId[Groupes.Alliance]._id,
            testGroupsWithId[Groupes.GalacticKnowledgeEnthusiasts]._id,
        ],
    };

    testPeople[People.Ahsoka] = {
        name: 'Ahsoka',
        active: true,
        itemsCanBeAttended: [
            testItemsWithId[Items.RegularDarthVaderAttack]._id,
            testItemsWithId[Items.CleaningDuty]._id,
        ],
        groupes: [testGroupsWithId[Groupes.Alliance]._id],
    };

    testPeople[People.Ackbar] = {
        name: 'Ackbar',
        active: true,
        itemsCanBeAttended: [
            testItemsWithId[Items.RegularDarthVaderAttack]._id,
            testItemsWithId[Items.GalaxyShowAndTell]._id,
        ],
        groupes: [
            testGroupsWithId[Groupes.Alliance]._id,
            testGroupsWithId[Groupes.GalacticKnowledgeEnthusiasts]._id,
        ],
    };

    testPeople[People.Hux] = {
        name: 'General Hux',
        active: true,
        itemsCanBeAttended: [testItemsWithId[Items.DeathStarInspection]._id],
        groupes: [testGroupsWithId[Groupes.Empire]._id],
    };

    testPeople[People.Tarkin] = {
        name: 'Grand Moff Tarkin',
        active: true,
        itemsCanBeAttended: [
            testItemsWithId[Items.GalaxyShowAndTell]._id,
            testItemsWithId[Items.DeathStarInspection]._id,
        ],
        groupes: [
            testGroupsWithId[Groupes.Empire]._id,
            testGroupsWithId[Groupes.GalacticKnowledgeEnthusiasts]._id,
        ],
    };

    testPeople[People.Amedda] = {
        name: 'Grand Vizier Mas Amedda',
        active: true,
        itemsCanBeAttended: [
            testItemsWithId[Items.DeathStarInspection]._id,
            testItemsWithId[Items.GalaxyShowAndTell]._id,
        ],
        groupes: [
            testGroupsWithId[Groupes.Empire]._id,
            testGroupsWithId[Groupes.GalacticKnowledgeEnthusiasts]._id,
        ],
    };

    testPeople[People.Boba] = {
        name: 'Boba Fett',
        active: true,
        itemsCanBeAttended: [
            testItemsWithId[Items.DeathStarInspection]._id,
            testItemsWithId[Items.GalaxyShowAndTell]._id,
        ],
        groupes: [
            testGroupsWithId[Groupes.Empire]._id,
            testGroupsWithId[Groupes.GalacticKnowledgeEnthusiasts]._id,
        ],
    };

    testPeople[People.Stormtrooper001] = {
        name: 'Stormtrooper 001',
        active: true,
        itemsCanBeAttended: [testItemsWithId[Items.StormTrooperShuffle]._id],
        groupes: [
            testGroupsWithId[Groupes.Empire]._id,
            testGroupsWithId[Groupes.Clone]._id,
        ],
    };

    testPeople[People.Stormtrooper002] = {
        name: 'Stormtrooper 002',
        active: true,
        itemsCanBeAttended: [testItemsWithId[Items.StormTrooperShuffle]._id],
        groupes: [
            testGroupsWithId[Groupes.Empire]._id,
            testGroupsWithId[Groupes.Clone]._id,
        ],
    };

    testPeople[People.Stormtrooper003] = {
        name: 'Stormtrooper 003',
        active: false,
        itemsCanBeAttended: [testItemsWithId[Items.StormTrooperShuffle]._id],
        groupes: [
            testGroupsWithId[Groupes.Empire]._id,
            testGroupsWithId[Groupes.Clone]._id,
        ],
    };

    testPeople[People.Stormtrooper004] = {
        name: 'Stormtrooper 004',
        active: true,
        itemsCanBeAttended: [testItemsWithId[Items.StormTrooperShuffle]._id],
        groupes: [
            testGroupsWithId[Groupes.Empire]._id,
            testGroupsWithId[Groupes.Clone]._id,
        ],
    };

    testPeople[People.Stormtrooper005] = {
        name: 'Stormtrooper 005',
        active: true,
        itemsCanBeAttended: [testItemsWithId[Items.StormTrooperShuffle]._id],
        groupes: [
            testGroupsWithId[Groupes.Empire]._id,
            testGroupsWithId[Groupes.Clone]._id,
        ],
    };

    testPeople[People.Stormtrooper006] = {
        name: 'Stormtrooper 006',
        active: true,
        itemsCanBeAttended: [testItemsWithId[Items.StormTrooperShuffle]._id],
        groupes: [
            testGroupsWithId[Groupes.Empire]._id,
            testGroupsWithId[Groupes.Clone]._id,
        ],
    };

    testPeople[People.Stormtrooper007] = {
        name: 'Stormtrooper 007',
        active: true,
        itemsCanBeAttended: [testItemsWithId[Items.StormTrooperShuffle]._id],
        groupes: [
            testGroupsWithId[Groupes.Empire]._id,
            testGroupsWithId[Groupes.Clone]._id,
        ],
    };

    testPeople[People.Stormtrooper008] = {
        name: 'Stormtrooper 008',
        active: false,
        itemsCanBeAttended: [testItemsWithId[Items.StormTrooperShuffle]._id],
        groupes: [
            testGroupsWithId[Groupes.Empire]._id,
            testGroupsWithId[Groupes.Clone]._id,
        ],
    };

    testPeople[People.Stormtrooper009] = {
        name: 'Stormtrooper 009',
        active: true,
        itemsCanBeAttended: [testItemsWithId[Items.StormTrooperShuffle]._id],
        groupes: [
            testGroupsWithId[Groupes.Empire]._id,
            testGroupsWithId[Groupes.Clone]._id,
        ],
    };

    testPeople[People.Stormtrooper010] = {
        name: 'Stormtrooper 010',
        active: false,
        itemsCanBeAttended: [testItemsWithId[Items.StormTrooperShuffle]._id],
        groupes: [
            testGroupsWithId[Groupes.Empire]._id,
            testGroupsWithId[Groupes.Clone]._id,
        ],
    };
    testPeople[People.Stormtrooper011] = {
        name: 'Stormtrooper 011',
        active: true,
        itemsCanBeAttended: [testItemsWithId[Items.StormTrooperShuffle]._id],
        groupes: [
            testGroupsWithId[Groupes.Empire]._id,
            testGroupsWithId[Groupes.Clone]._id,
        ],
    };

    testPeople[People.Stormtrooper012] = {
        name: 'Stormtrooper 012',
        active: true,
        itemsCanBeAttended: [testItemsWithId[Items.StormTrooperShuffle]._id],
        groupes: [
            testGroupsWithId[Groupes.Empire]._id,
            testGroupsWithId[Groupes.Clone]._id,
        ],
    };
    testPeople[People.Stormtrooper013] = {
        name: 'Stormtrooper 013',
        active: true,
        itemsCanBeAttended: [testItemsWithId[Items.StormTrooperShuffle]._id],
        groupes: [
            testGroupsWithId[Groupes.Empire]._id,
            testGroupsWithId[Groupes.Clone]._id,
        ],
    };

    testPeople[People.Clonetrooper001] = {
        name: 'Clonetrooper 001',
        active: true,
        itemsCanBeAttended: [testItemsWithId[Items.CloneTrooperTalentShow]._id],
        groupes: [
            testGroupsWithId[Groupes.Empire]._id,
            testGroupsWithId[Groupes.Clone]._id,
        ],
    };

    testPeople[People.Clonetrooper002] = {
        name: 'Clonetrooper 002',
        active: true,
        itemsCanBeAttended: [testItemsWithId[Items.CloneTrooperTalentShow]._id],
        groupes: [
            testGroupsWithId[Groupes.Empire]._id,
            testGroupsWithId[Groupes.Clone]._id,
        ],
    };

    testPeople[People.Clonetrooper003] = {
        name: 'Clonetrooper 003',
        active: true,
        itemsCanBeAttended: [testItemsWithId[Items.CloneTrooperTalentShow]._id],
        groupes: [
            testGroupsWithId[Groupes.Empire]._id,
            testGroupsWithId[Groupes.Clone]._id,
        ],
    };

    testPeople[People.Clonetrooper004] = {
        name: 'Clonetrooper 004',
        active: true,
        itemsCanBeAttended: [testItemsWithId[Items.CloneTrooperTalentShow]._id],
        groupes: [
            testGroupsWithId[Groupes.Empire]._id,
            testGroupsWithId[Groupes.Clone]._id,
        ],
    };

    testPeople[People.Clonetrooper005] = {
        name: 'Clonetrooper 005',
        active: true,
        itemsCanBeAttended: [testItemsWithId[Items.CloneTrooperTalentShow]._id],
        groupes: [
            testGroupsWithId[Groupes.Empire]._id,
            testGroupsWithId[Groupes.Clone]._id,
        ],
    };

    testPeople[People.Clonetrooper006] = {
        name: 'Clonetrooper 006',
        active: true,
        itemsCanBeAttended: [testItemsWithId[Items.CloneTrooperTalentShow]._id],
        groupes: [
            testGroupsWithId[Groupes.Empire]._id,
            testGroupsWithId[Groupes.Clone]._id,
        ],
    };

    testPeople[People.Clonetrooper007] = {
        name: 'Clonetrooper 007',
        active: true,
        itemsCanBeAttended: [testItemsWithId[Items.CloneTrooperTalentShow]._id],
        groupes: [
            testGroupsWithId[Groupes.Empire]._id,
            testGroupsWithId[Groupes.Clone]._id,
        ],
    };

    testPeople[People.Clonetrooper008] = {
        name: 'Clonetrooper 008',
        active: true,
        itemsCanBeAttended: [testItemsWithId[Items.CloneTrooperTalentShow]._id],
        groupes: [
            testGroupsWithId[Groupes.Empire]._id,
            testGroupsWithId[Groupes.Clone]._id,
        ],
    };

    testPeople[People.Clonetrooper009] = {
        name: 'Clonetrooper 009',
        active: true,
        itemsCanBeAttended: [testItemsWithId[Items.CloneTrooperTalentShow]._id],
        groupes: [
            testGroupsWithId[Groupes.Empire]._id,
            testGroupsWithId[Groupes.Clone]._id,
        ],
    };

    testPeople[People.Clonetrooper010] = {
        name: 'Clonetrooper 010',
        active: true,
        itemsCanBeAttended: [testItemsWithId[Items.CloneTrooperTalentShow]._id],
        groupes: [
            testGroupsWithId[Groupes.Empire]._id,
            testGroupsWithId[Groupes.Clone]._id,
        ],
    };

    testPeople[People.Clonetrooper011] = {
        name: 'Clonetrooper 011',
        active: true,
        itemsCanBeAttended: [testItemsWithId[Items.CloneTrooperTalentShow]._id],
        groupes: [
            testGroupsWithId[Groupes.Empire]._id,
            testGroupsWithId[Groupes.Clone]._id,
        ],
    };

    testPeople[People.Clonetrooper012] = {
        name: 'Clonetrooper 012',
        active: true,
        itemsCanBeAttended: [testItemsWithId[Items.CloneTrooperTalentShow]._id],
        groupes: [
            testGroupsWithId[Groupes.Empire]._id,
            testGroupsWithId[Groupes.Clone]._id,
        ],
    };

    return testPeople;
};
