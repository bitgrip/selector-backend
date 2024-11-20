import { Groupes } from '../Groups/groups';
import { Roles } from '../Roles/roles';

export const Items = {
    // longer then one day, has fixed length of 2 days, doesnt happen regularly
    RegularDarthVaderAttack: 0,
    // takes only one day
    GalaxyShowAndTell: 1,
    // longer then one day, has fixed length of 7 days, happens regularly
    CleaningDuty: 2,
    // longer then one day, doesnt have fixed length, doesnt happen regularly
    DeathStarInspection: 3,
    // one day, doesnt happen regularly, has random number of participants
    StormTrooperShuffle: 4,
    // one day, doesnt happen regularly, has random number of participants
    CloneTrooperTalentShow: 5,
};

export const getItems = (testRolesWithId, testGroupsWithId) => {
    const testItems = [];
    testItems[Items.RegularDarthVaderAttack] = {
        name: 'Regular alliance attack on Darth Vader',
        description: 'Regular attack to keep him on his toes',
        longDescription:
            'Happens in the middle of the night, takes two days, irregularly',
        roles: [
            testRolesWithId[Roles.MainAssasin]._id,
            testRolesWithId[Roles.SupportAssasin]._id,
        ],
        isLongerThenOneDay: true,
        usualLength: 2,
        hasAutomaticStartDate: false,
        groupes: [testGroupsWithId[Groupes.Alliance]._id],
    };
    testItems[Items.GalaxyShowAndTell] = {
        name: 'Galaxy Show-And-Tell',
        description:
            'Everyone from the galaxy is welcomed! One person gives a presentation about their topic of choice.',
        longDescription:
            "Join us on the fascinating planet of AstraNova for our regular meetups where curious minds unite. Leave your weapons behind, and embrace the peaceful and inclusive atmosphere as we share wisdom and discoveries in a casual setting. Make sure to add yourself to the guest list on time to secure your spot in our cosmic community of knowledge enthusiasts. Let's come together, learn from one another, and have fun exploring the wonders of the universe! See you at our next event!",
        roles: [testRolesWithId[Roles.Presenter]._id],
        isLongerThenOneDay: false,
        groupes: [testGroupsWithId[Groupes.GalacticKnowledgeEnthusiasts]._id],
    };
    testItems[Items.CleaningDuty] = {
        name: 'Cleaning duty',
        description: 'Cleans the Millennium Falcon',
        longDescription:
            'For one week the crew cleans kitchen, bathroom, living room, nuclear reactor, etc.',
        roles: [testRolesWithId[Roles.Cleaner]._id],
        isLongerThenOneDay: true,
        hasAutomaticStartDate: true,
        usualLength: 7,
        groupes: [],
    };
    testItems[Items.CleaningDuty] = {
        name: 'Falcon cleaning duty',
        description: 'Cleans the Millennium Falcon',
        longDescription:
            'For one week clean kitchen, bathroom, living room, nuclear reactor, etc.',
        roles: [testRolesWithId[Roles.Cleaner]._id],
        isLongerThenOneDay: true,
        hasAutomaticStartDate: true,
        usualLength: 7,
        groupes: [testGroupsWithId[Groupes.Alliance]._id],
    };
    testItems[Items.DeathStarInspection] = {
        name: 'Death Start Inspection',
        description: 'When the red LED blinks, check the Death Star',
        longDescription:
            'Take as much time as you need, but make sure everything is working properly',
        roles: [testRolesWithId[Roles.Inspector]._id],
        isLongerThenOneDay: true,
        hasAutomaticStartDate: false,
        groupes: [testGroupsWithId[Groupes.Empire]._id],
    };

    testItems[Items.StormTrooperShuffle] = {
        name: 'Stormtrooper Shuffle',
        description:
            'A humorous dance-off, where Stormtroopers attempt to hit a moving target while performing goofy dance moves.',
        longDescription: 'Lets embrace our iconic reputation',
        roles: [testRolesWithId[Roles.Participant]._id],
        isLongerThenOneDay: false,
        hasAutomaticStartDate: false,
        groupes: [testGroupsWithId[Groupes.Clone]._id],
    };

    testItems[Items.CloneTrooperTalentShow] = {
        name: 'Clonetrooper Talent Show',
        description:
            'A lighthearted event to showcase our hidden talents, such as singing, dancing, or telling jokes.',
        longDescription:
            'This is a chance for us to relax and have fun but also an opportunity for camaraderie and team building. It will boost morale and foster a sense of unity among us, reminding us that we are not just soldiers but individuals with unique skills and personalities.',
        roles: [testRolesWithId[Roles.Participant]._id],
        isLongerThenOneDay: false,
        hasAutomaticStartDate: false,
        groupes: [testGroupsWithId[Groupes.Clone]._id],
    };

    return testItems;
};
