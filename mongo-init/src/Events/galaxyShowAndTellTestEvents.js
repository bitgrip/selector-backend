import { Items } from '../Items/items';
import { People } from '../People/people';
import { Roles } from '../Roles/roles';

export const getGalaxyShowAndTellTestEvents = (
    testRolesWithId,
    testPeopleWithId,
    testItemsWithId
) => {
    const date = new Date();
    return [
        {
            item: testItemsWithId[Items.GalaxyShowAndTell]._id,
            startDate: new Date('2022-01-02'),
            participants: [
                {
                    role: testRolesWithId[Roles.Presenter]._id,
                    person: testPeopleWithId[People.Palpatine]._id,
                },
            ],
            eventNote:
                "Death Star Disco: Get Groovy with the Empire's Ultimate Weapon!",
        },
        {
            item: testItemsWithId[Items.GalaxyShowAndTell]._id,
            startDate: date.setDate(date.getDate() + 10),
            participants: [
                {
                    role: testRolesWithId[Roles.Presenter]._id,
                    person: testPeopleWithId[People.Solo]._id,
                },
            ],
            eventNote:
                'Millennium Falcon: The Coolest Ride in the Galaxy - Rebel Style!',
        },
        {
            item: testItemsWithId[Items.GalaxyShowAndTell]._id,
            startDate: date.setDate(date.getDate() + 15),
            participants: [
                {
                    role: testRolesWithId[Roles.Presenter]._id,
                    person: testPeopleWithId[People.Veers]._id,
                },
            ],
            eventNote:
                "AT-AT: The Empire's Mighty Behemoth - Unveiling the Galactic Ground Force!",
        },
        {
            item: testItemsWithId[Items.GalaxyShowAndTell]._id,
            startDate: new Date('2022-01-02'),
            participants: [
                {
                    role: testRolesWithId[Roles.Presenter]._id,
                    person: testPeopleWithId[People.Palpatine]._id,
                },
            ],
            eventNote:
                "Death Star Disco: Get Groovy with the Empire's Ultimate Weapon!",
        },
        {
            item: testItemsWithId[Items.GalaxyShowAndTell]._id,
            startDate: new Date('2022-03-20'),
            participants: [
                {
                    role: testRolesWithId[Roles.Presenter]._id,
                    person: testPeopleWithId[People.Mace]._id,
                },
            ],
            eventNote:
                'Lightsaber Battle Royale: Who Will Be the Last Jedi Standing?',
        },
        {
            item: testItemsWithId[Items.GalaxyShowAndTell]._id,
            startDate: new Date('2022-04-01'),
            participants: [
                {
                    role: testRolesWithId[Roles.Presenter]._id,
                    person: testPeopleWithId[People.Solo]._id,
                },
            ],
            eventNote: 'Kessel Run Challenge: Who Can Make the Fastest Run?',
        },
        {
            item: testItemsWithId[Items.GalaxyShowAndTell]._id,
            startDate: new Date('2022-05-10'),
            participants: [
                {
                    role: testRolesWithId[Roles.Presenter]._id,
                    person: testPeopleWithId[People.Chewbacca]._id,
                },
            ],
            eventNote: 'Wookiee Wisdom: Life Lessons from the Furry Co-Pilot!',
        },
        {
            item: testItemsWithId[Items.GalaxyShowAndTell]._id,
            startDate: new Date('2022-06-25'),
            participants: [
                {
                    role: testRolesWithId[Roles.Presenter]._id,
                    person: testPeopleWithId[People.Ackbar]._id,
                },
            ],
            eventNote: "It's a Trap! Avoiding Common Space Pitfalls!",
        },
        {
            item: testItemsWithId[Items.GalaxyShowAndTell]._id,
            startDate: new Date('2022-07-12'),
            participants: [
                {
                    role: testRolesWithId[Roles.Presenter]._id,
                    person: testPeopleWithId[People.Solo]._id,
                },
            ],
            eventNote:
                "Smuggler's Tales: Adventures in the Shadows of the Galaxy!",
        },
        {
            item: testItemsWithId[Items.GalaxyShowAndTell]._id,
            startDate: new Date('2022-08-22'),
            participants: [
                {
                    role: testRolesWithId[Roles.Presenter]._id,
                    person: testPeopleWithId[People.Chewbacca]._id,
                },
            ],
            eventNote:
                "Warrior's Bond: The Unbreakable Connection Between Wookiees and Mon Calamari!",
        },
        {
            item: testItemsWithId[Items.GalaxyShowAndTell]._id,
            startDate: new Date('2022-10-05'),
            participants: [
                {
                    role: testRolesWithId[Roles.Presenter]._id,
                    person: testPeopleWithId[People.Veers]._id,
                },
            ],
            eventNote:
                "Empire's Droids: The Mechanical Marvels of Galactic Engineering!",
        },
        {
            item: testItemsWithId[Items.GalaxyShowAndTell]._id,
            startDate: new Date('2022-11-15'),
            participants: [
                {
                    role: testRolesWithId[Roles.Presenter]._id,
                    person: testPeopleWithId[People.Mace]._id,
                },
            ],
            eventNote: 'Jedi Masterclass: Mastering the Force with Mace Windu!',
        },
        {
            item: testItemsWithId[Items.GalaxyShowAndTell]._id,
            startDate: new Date('2022-12-20'),
            participants: [
                {
                    role: testRolesWithId[Roles.Presenter]._id,
                    person: testPeopleWithId[People.Ackbar]._id,
                },
            ],
            eventNote: 'Navigating the Cosmos: A Guide by Admiral Ackbar!',
        },
    ];
};
