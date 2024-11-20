import { Items } from '../Items/items';
import { People } from '../People/people';
import { Roles } from '../Roles/roles';

export const getStormtroopersShuffleTestEvents = (
    testRolesWithId,
    testPeopleWithId,
    testItemsWithId
) => {
    return [
        {
            item: testItemsWithId[Items.StormTrooperShuffle]._id,
            startDate: new Date('2022-01-01'),
            participants: [
                {
                    role: testRolesWithId[Roles.Participant]._id,
                    person: testPeopleWithId[People.Stormtrooper001]._id,
                },
                {
                    role: testRolesWithId[Roles.Participant]._id,
                    person: testPeopleWithId[People.Stormtrooper003]._id,
                },
                {
                    role: testRolesWithId[Roles.Participant]._id,
                    person: testPeopleWithId[People.Stormtrooper010]._id,
                },
            ],
        },
        {
            item: testItemsWithId[Items.StormTrooperShuffle]._id,
            startDate: new Date('2022-07-09'),
            participants: [
                {
                    role: testRolesWithId[Roles.Participant]._id,
                    person: testPeopleWithId[People.Stormtrooper002]._id,
                },
                {
                    role: testRolesWithId[Roles.Participant]._id,
                    person: testPeopleWithId[People.Stormtrooper006]._id,
                },
                {
                    role: testRolesWithId[Roles.Participant]._id,
                    person: testPeopleWithId[People.Stormtrooper010]._id,
                },
            ],
        },
        {
            item: testItemsWithId[Items.StormTrooperShuffle]._id,
            startDate: new Date('2022-03-11'),
            participants: [
                {
                    role: testRolesWithId[Roles.Participant]._id,
                    person: testPeopleWithId[People.Stormtrooper001]._id,
                },
                {
                    role: testRolesWithId[Roles.Participant]._id,
                    person: testPeopleWithId[People.Stormtrooper003]._id,
                },
                {
                    role: testRolesWithId[Roles.Participant]._id,
                    person: testPeopleWithId[People.Stormtrooper010]._id,
                },
                {
                    role: testRolesWithId[Roles.Participant]._id,
                    person: testPeopleWithId[People.Stormtrooper013]._id,
                },
                {
                    role: testRolesWithId[Roles.Participant]._id,
                    person: testPeopleWithId[People.Stormtrooper012]._id,
                },
                {
                    role: testRolesWithId[Roles.Participant]._id,
                    person: testPeopleWithId[People.Stormtrooper006]._id,
                },
            ],
        },
        {
            item: testItemsWithId[Items.StormTrooperShuffle]._id,
            startDate: new Date('2022-03-07'),
            participants: [
                {
                    role: testRolesWithId[Roles.Participant]._id,
                    person: testPeopleWithId[People.Stormtrooper010]._id,
                },
                {
                    role: testRolesWithId[Roles.Participant]._id,
                    person: testPeopleWithId[People.Stormtrooper011]._id,
                },
                {
                    role: testRolesWithId[Roles.Participant]._id,
                    person: testPeopleWithId[People.Stormtrooper012]._id,
                },
            ],
        },
        {
            item: testItemsWithId[Items.StormTrooperShuffle]._id,
            startDate: new Date('2022-05-07'),
            participants: [
                {
                    role: testRolesWithId[Roles.Participant]._id,
                    person: testPeopleWithId[People.Stormtrooper001]._id,
                },
                {
                    role: testRolesWithId[Roles.Participant]._id,
                    person: testPeopleWithId[People.Stormtrooper002]._id,
                },
                {
                    role: testRolesWithId[Roles.Participant]._id,
                    person: testPeopleWithId[People.Stormtrooper003]._id,
                },
                {
                    role: testRolesWithId[Roles.Participant]._id,
                    person: testPeopleWithId[People.Stormtrooper009]._id,
                },
            ],
        },
        {
            item: testItemsWithId[Items.StormTrooperShuffle]._id,
            startDate: new Date('2022-01-01'),
            participants: [
                {
                    role: testRolesWithId[Roles.Participant]._id,
                    person: testPeopleWithId[People.Stormtrooper001]._id,
                },
                {
                    role: testRolesWithId[Roles.Participant]._id,
                    person: testPeopleWithId[People.Stormtrooper003]._id,
                },
                {
                    role: testRolesWithId[Roles.Participant]._id,
                    person: testPeopleWithId[People.Stormtrooper010]._id,
                },
            ],
        },
        {
            item: testItemsWithId[Items.StormTrooperShuffle]._id,
            startDate: new Date('2022-07-09'),
            participants: [
                {
                    role: testRolesWithId[Roles.Participant]._id,
                    person: testPeopleWithId[People.Stormtrooper002]._id,
                },
                {
                    role: testRolesWithId[Roles.Participant]._id,
                    person: testPeopleWithId[People.Stormtrooper006]._id,
                },
                {
                    role: testRolesWithId[Roles.Participant]._id,
                    person: testPeopleWithId[People.Stormtrooper010]._id,
                },
            ],
        },
        {
            item: testItemsWithId[Items.StormTrooperShuffle]._id,
            startDate: new Date('2022-03-11'),
            participants: [
                {
                    role: testRolesWithId[Roles.Participant]._id,
                    person: testPeopleWithId[People.Stormtrooper001]._id,
                },
                {
                    role: testRolesWithId[Roles.Participant]._id,
                    person: testPeopleWithId[People.Stormtrooper003]._id,
                },
                {
                    role: testRolesWithId[Roles.Participant]._id,
                    person: testPeopleWithId[People.Stormtrooper010]._id,
                },
                {
                    role: testRolesWithId[Roles.Participant]._id,
                    person: testPeopleWithId[People.Stormtrooper013]._id,
                },
                {
                    role: testRolesWithId[Roles.Participant]._id,
                    person: testPeopleWithId[People.Stormtrooper012]._id,
                },
                {
                    role: testRolesWithId[Roles.Participant]._id,
                    person: testPeopleWithId[People.Stormtrooper006]._id,
                },
            ],
        },
        {
            item: testItemsWithId[Items.StormTrooperShuffle]._id,
            startDate: new Date('2022-03-07'),
            participants: [
                {
                    role: testRolesWithId[Roles.Participant]._id,
                    person: testPeopleWithId[People.Stormtrooper010]._id,
                },
                {
                    role: testRolesWithId[Roles.Participant]._id,
                    person: testPeopleWithId[People.Stormtrooper011]._id,
                },
            ],
        },
    ];
};
