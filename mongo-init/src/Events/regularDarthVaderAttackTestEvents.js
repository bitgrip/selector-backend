import { Items } from '../Items/items';
import { People } from '../People/people';
import { Roles } from '../Roles/roles';

export const getRegularDarthVaderAttackTestEvents = (
    testRolesWithId,
    testPeopleWithId,
    testItemsWithId
) => {
    const date = new Date();

    return [
        {
            item: testItemsWithId[Items.RegularDarthVaderAttack]._id,
            startDate: new Date('2022-01-01'),
            endDate: new Date('2022-01-03'),
            participants: [
                {
                    role: testRolesWithId[Roles.MainAssasin]._id,
                    person: testPeopleWithId[People.Mace]._id,
                },
                {
                    role: testRolesWithId[Roles.SupportAssasin]._id,
                    person: testPeopleWithId[People.ObiWan]._id,
                },
                {
                    role: testRolesWithId[Roles.SupportAssasin]._id,
                    person: testPeopleWithId[People.Chewbacca]._id,
                },
            ],
        },
        {
            item: testItemsWithId[Items.RegularDarthVaderAttack]._id,
            startDate: new Date('2022-02-02'),
            endDate: new Date('2022-02-04'),
            participants: [
                {
                    role: testRolesWithId[Roles.MainAssasin]._id,
                    person: testPeopleWithId[People.Solo]._id,
                },
                {
                    role: testRolesWithId[Roles.SupportAssasin]._id,
                    person: testPeopleWithId[People.Chewbacca]._id,
                },
                {
                    role: testRolesWithId[Roles.SupportAssasin]._id,
                    person: testPeopleWithId[People.ObiWan]._id,
                },
            ],
        },
        {
            item: testItemsWithId[Items.RegularDarthVaderAttack]._id,
            startDate: new Date('2022-04-06'),
            endDate: new Date('2022-04-08'),
            participants: [
                {
                    role: testRolesWithId[Roles.MainAssasin]._id,
                    person: testPeopleWithId[People.Chewbacca]._id,
                },
                {
                    role: testRolesWithId[Roles.SupportAssasin]._id,
                    person: testPeopleWithId[People.Solo]._id,
                },
            ],
        },
        {
            item: testItemsWithId[Items.RegularDarthVaderAttack]._id,
            startDate: new Date('2022-06-08'),
            endDate: new Date('2022-06-10'),
            participants: [
                {
                    role: testRolesWithId[Roles.MainAssasin]._id,
                    person: testPeopleWithId[People.Solo]._id,
                },
                {
                    role: testRolesWithId[Roles.SupportAssasin]._id,
                    person: testPeopleWithId[People.Mace]._id,
                },
                {
                    role: testRolesWithId[Roles.SupportAssasin]._id,
                    person: testPeopleWithId[People.ObiWan]._id,
                },
                {
                    role: testRolesWithId[Roles.SupportAssasin]._id,
                    person: testPeopleWithId[People.Chewbacca]._id,
                },
            ],
        },
        {
            item: testItemsWithId[Items.RegularDarthVaderAttack]._id,
            startDate: new Date('2022-06-11'),
            endDate: new Date('2022-06-13'),
            participants: [
                {
                    role: testRolesWithId[Roles.MainAssasin]._id,
                    person: testPeopleWithId[People.Chewbacca]._id,
                },
                {
                    role: testRolesWithId[Roles.SupportAssasin]._id,
                    person: testPeopleWithId[People.Mace]._id,
                },
            ],
        },
        {
            item: testItemsWithId[Items.RegularDarthVaderAttack]._id,
            startDate: new Date('2022-08-20'),
            endDate: new Date('2022-08-22'),
            participants: [
                {
                    role: testRolesWithId[Roles.MainAssasin]._id,
                    person: testPeopleWithId[People.Mace]._id,
                },
                {
                    role: testRolesWithId[Roles.SupportAssasin]._id,
                    person: testPeopleWithId[People.Solo]._id,
                },
            ],
        },
        {
            item: testItemsWithId[Items.RegularDarthVaderAttack]._id,
            startDate: new Date('2022-08-25'),
            endDate: new Date('2022-08-27'),
            participants: [
                {
                    role: testRolesWithId[Roles.MainAssasin]._id,
                    person: testPeopleWithId[People.ObiWan]._id,
                },
                {
                    role: testRolesWithId[Roles.SupportAssasin]._id,
                    person: testPeopleWithId[People.Chewbacca]._id,
                },
            ],
        },
        {
            item: testItemsWithId[Items.RegularDarthVaderAttack]._id,
            startDate: new Date('2022-07-10'),
            endDate: new Date('2022-07-12'),
            participants: [
                {
                    role: testRolesWithId[Roles.MainAssasin]._id,
                    person: testPeopleWithId[People.Mace]._id,
                },
                {
                    role: testRolesWithId[Roles.SupportAssasin]._id,
                    person: testPeopleWithId[People.ObiWan]._id,
                },
            ],
        },
        {
            item: testItemsWithId[Items.RegularDarthVaderAttack]._id,
            startDate: new Date('2022-08-06'),
            endDate: new Date('2022-08-08'),
            participants: [
                {
                    role: testRolesWithId[Roles.MainAssasin]._id,
                    person: testPeopleWithId[People.Ackbar]._id,
                },
                {
                    role: testRolesWithId[Roles.SupportAssasin]._id,
                    person: testPeopleWithId[People.Ahsoka]._id,
                },
            ],
        },
        {
            item: testItemsWithId[Items.RegularDarthVaderAttack]._id,
            startDate: new Date('2022-08-10'),
            endDate: new Date('2022-08-12'),
            participants: [
                {
                    role: testRolesWithId[Roles.MainAssasin]._id,
                    person: testPeopleWithId[People.ObiWan]._id,
                },
                {
                    role: testRolesWithId[Roles.SupportAssasin]._id,
                    person: testPeopleWithId[People.Ahsoka]._id,
                },
            ],
        },
        {
            item: testItemsWithId[Items.RegularDarthVaderAttack]._id,
            startDate: new Date('2022-08-16'),
            endDate: new Date('2022-08-18'),
            participants: [
                {
                    role: testRolesWithId[Roles.MainAssasin]._id,
                    person: testPeopleWithId[People.ObiWan]._id,
                },
                {
                    role: testRolesWithId[Roles.SupportAssasin]._id,
                    person: testPeopleWithId[People.Chewbacca]._id,
                },
            ],
        },
        {
            item: testItemsWithId[Items.RegularDarthVaderAttack]._id,
            startDate: new Date('2022-08-20'),
            endDate: new Date('2022-08-22'),
            participants: [
                {
                    role: testRolesWithId[Roles.MainAssasin]._id,
                    person: testPeopleWithId[People.Chewbacca]._id,
                },
                {
                    role: testRolesWithId[Roles.SupportAssasin]._id,
                    person: testPeopleWithId[People.Ahsoka]._id,
                },
            ],
        },
        {
            item: testItemsWithId[Items.RegularDarthVaderAttack]._id,
            startDate: new Date('2022-04-06'),
            endDate: new Date('2022-04-08'),
            participants: [
                {
                    role: testRolesWithId[Roles.MainAssasin]._id,
                    person: testPeopleWithId[People.ObiWan]._id,
                },
                {
                    role: testRolesWithId[Roles.SupportAssasin]._id,
                    person: testPeopleWithId[People.Solo]._id,
                },
            ],
        },
        {
            item: testItemsWithId[Items.RegularDarthVaderAttack]._id,
            startDate: new Date('2022-03-12'),
            endDate: new Date('2022-03-14'),
            participants: [
                {
                    role: testRolesWithId[Roles.MainAssasin]._id,
                    person: testPeopleWithId[People.Mace]._id,
                },
                {
                    role: testRolesWithId[Roles.SupportAssasin]._id,
                    person: testPeopleWithId[People.Ahsoka]._id,
                },
            ],
        },
        {
            item: testItemsWithId[Items.RegularDarthVaderAttack]._id,
            startDate: new Date('2022-02-19'),
            endDate: new Date('2022-02-21'),
            participants: [
                {
                    role: testRolesWithId[Roles.MainAssasin]._id,
                    person: testPeopleWithId[People.Chewbacca]._id,
                },
                {
                    role: testRolesWithId[Roles.SupportAssasin]._id,
                    person: testPeopleWithId[People.Ackbar]._id,
                },
                {
                    role: testRolesWithId[Roles.SupportAssasin]._id,
                    person: testPeopleWithId[People.Chewbacca]._id,
                },
            ],
        },
        {
            item: testItemsWithId[Items.RegularDarthVaderAttack]._id,
            startDate: new Date('2021-12-04'),
            endDate: new Date('2021-12-06'),
            participants: [
                {
                    role: testRolesWithId[Roles.MainAssasin]._id,
                    person: testPeopleWithId[People.Ahsoka]._id,
                },
                {
                    role: testRolesWithId[Roles.SupportAssasin]._id,
                    person: testPeopleWithId[People.Chewbacca]._id,
                },
                {
                    role: testRolesWithId[Roles.SupportAssasin]._id,
                    person: testPeopleWithId[People.Mace]._id,
                },
            ],
        },
        {
            item: testItemsWithId[Items.RegularDarthVaderAttack]._id,
            startDate: new Date('2022-03-01'),
            endDate: new Date('2022-03-03'),
            participants: [
                {
                    role: testRolesWithId[Roles.MainAssasin]._id,
                    person: testPeopleWithId[People.Mace]._id,
                },
                {
                    role: testRolesWithId[Roles.SupportAssasin]._id,
                    person: testPeopleWithId[People.Solo]._id,
                },
                {
                    role: testRolesWithId[Roles.SupportAssasin]._id,
                    person: testPeopleWithId[People.Chewbacca]._id,
                },
            ],
        },
        {
            item: testItemsWithId[Items.RegularDarthVaderAttack]._id,
            startDate: new Date('2022-04-06'),
            endDate: new Date('2022-04-08'),
            participants: [
                {
                    role: testRolesWithId[Roles.MainAssasin]._id,
                    person: testPeopleWithId[People.ObiWan]._id,
                },
                {
                    role: testRolesWithId[Roles.SupportAssasin]._id,
                    person: testPeopleWithId[People.Solo]._id,
                },
            ],
        },
        {
            item: testItemsWithId[Items.RegularDarthVaderAttack]._id,
            startDate: new Date('2022-03-12'),
            endDate: new Date('2022-03-14'),
            participants: [
                {
                    role: testRolesWithId[Roles.MainAssasin]._id,
                    person: testPeopleWithId[People.Mace]._id,
                },
                {
                    role: testRolesWithId[Roles.SupportAssasin]._id,
                    person: testPeopleWithId[People.Ahsoka]._id,
                },
                {
                    role: testRolesWithId[Roles.SupportAssasin]._id,
                    person: testPeopleWithId[People.Solo]._id,
                },
            ],
        },
        {
            item: testItemsWithId[Items.RegularDarthVaderAttack]._id,
            startDate: new Date('2022-05-15'),
            endDate: new Date('2022-05-17'),
            participants: [
                {
                    role: testRolesWithId[Roles.MainAssasin]._id,
                    person: testPeopleWithId[People.ObiWan]._id,
                },
                {
                    role: testRolesWithId[Roles.SupportAssasin]._id,
                    person: testPeopleWithId[People.Chewbacca]._id,
                },
                {
                    role: testRolesWithId[Roles.SupportAssasin]._id,
                    person: testPeopleWithId[People.Solo]._id,
                },
            ],
        },
        {
            item: testItemsWithId[Items.RegularDarthVaderAttack]._id,
            startDate: new Date('2022-08-20'),
            endDate: new Date('2022-08-22'),
            participants: [
                {
                    role: testRolesWithId[Roles.MainAssasin]._id,
                    person: testPeopleWithId[People.ObiWan]._id,
                },
                {
                    role: testRolesWithId[Roles.SupportAssasin]._id,
                    person: testPeopleWithId[People.Chewbacca]._id,
                },
                {
                    role: testRolesWithId[Roles.SupportAssasin]._id,
                    person: testPeopleWithId[People.Solo]._id,
                },
                {
                    role: testRolesWithId[Roles.SupportAssasin]._id,
                    person: testPeopleWithId[People.Ahsoka]._id,
                },
            ],
        },
        {
            item: testItemsWithId[Items.RegularDarthVaderAttack]._id,
            startDate: new Date('2022-09-01'),
            endDate: new Date('2022-09-03'),
            participants: [
                {
                    role: testRolesWithId[Roles.MainAssasin]._id,
                    person: testPeopleWithId[People.Mace]._id,
                },
                {
                    role: testRolesWithId[Roles.SupportAssasin]._id,
                    person: testPeopleWithId[People.Ahsoka]._id,
                },
                {
                    role: testRolesWithId[Roles.SupportAssasin]._id,
                    person: testPeopleWithId[People.Solo]._id,
                },
            ],
        },
        {
            item: testItemsWithId[Items.RegularDarthVaderAttack]._id,
            startDate: new Date('2022-09-15'),
            endDate: new Date('2022-09-17'),
            participants: [
                {
                    role: testRolesWithId[Roles.MainAssasin]._id,
                    person: testPeopleWithId[People.Chewbacca]._id,
                },
                {
                    role: testRolesWithId[Roles.SupportAssasin]._id,
                    person: testPeopleWithId[People.Mace]._id,
                },
                {
                    role: testRolesWithId[Roles.SupportAssasin]._id,
                    person: testPeopleWithId[People.Solo]._id,
                },
            ],
        },
        {
            // one event running
            item: testItemsWithId[Items.RegularDarthVaderAttack]._id,
            startDate: date.setDate(date.getDate() + 0),
            endDate: date.setDate(date.getDate() + 1),
            participants: [
                {
                    role: testRolesWithId[Roles.MainAssasin]._id,
                    person: testPeopleWithId[People.Mace]._id,
                },
                {
                    role: testRolesWithId[Roles.SupportAssasin]._id,
                    person: testPeopleWithId[People.ObiWan]._id,
                },
            ],
        },
        // some events in the future
        {
            item: testItemsWithId[Items.RegularDarthVaderAttack]._id,
            startDate: date.setDate(date.getDate() + 10),
            endDate: date.setDate(date.getDate() + 2),
            participants: [
                {
                    role: testRolesWithId[Roles.MainAssasin]._id,
                    person: testPeopleWithId[People.Ahsoka]._id,
                },
                {
                    role: testRolesWithId[Roles.SupportAssasin]._id,
                    person: testPeopleWithId[People.Chewbacca]._id,
                },
            ],
        },
        // some events in the future
        {
            item: testItemsWithId[Items.RegularDarthVaderAttack]._id,
            startDate: date.setDate(date.getDate() + 10),
            endDate: date.setDate(date.getDate() + 2),
            participants: [
                {
                    role: testRolesWithId[Roles.MainAssasin]._id,
                    person: testPeopleWithId[People.Ahsoka]._id,
                },
                {
                    role: testRolesWithId[Roles.SupportAssasin]._id,
                    person: testPeopleWithId[People.Ackbar]._id,
                },
            ],
        },
    ];
};
