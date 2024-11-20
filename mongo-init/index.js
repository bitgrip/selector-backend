import { getRegularDarthVaderAttackTestEvents } from './src/Events/regularDarthVaderAttackTestEvents';
import { getGalaxyShowAndTellTestEvents } from './src/Events/galaxyShowAndTellTestEvents';
import { getGroups } from './src/Groups/groups';
import { mapIds } from './src/helpers';
import { getItems } from './src/Items/items';
import { getpeople } from './src/People/people';
import { getRoles } from './src/Roles/roles';
import { getStormtroopersShuffleTestEvents } from './src/Events/stormtroopersShuffleTestEvents';
import { getCloneTrooperTalentShowTestEvents } from './src/Events/cloneTrooperTalentShowTestEvents';

const testRolesWithoutId = getRoles();
const rolesRes = db.roles.insertMany(testRolesWithoutId);
const testRolesWithId = mapIds(rolesRes, testRolesWithoutId);

const testGroupsWithoutId = getGroups();
const groupsRes = db.groups.insertMany(testGroupsWithoutId);
const testGroupsWithId = mapIds(groupsRes, testGroupsWithoutId);

const testItemsWithoutId = getItems(testRolesWithId, testGroupsWithId);
const itemsRes = db['rotation-items'].insertMany(testItemsWithoutId);
const testItemsWithId = mapIds(itemsRes, testItemsWithoutId);

const testPeopleWithoutId = getpeople(testItemsWithId, testGroupsWithId);
const peopleRes = db.people.insertMany(testPeopleWithoutId);
const testPeopleWithId = mapIds(peopleRes, testPeopleWithoutId);

const testEvents = [
    ...getRegularDarthVaderAttackTestEvents(
        testRolesWithId,
        testPeopleWithId,
        testItemsWithId
    ),
    ...getGalaxyShowAndTellTestEvents(
        testRolesWithId,
        testPeopleWithId,
        testItemsWithId
    ),
    ...getStormtroopersShuffleTestEvents(
        testRolesWithId,
        testPeopleWithId,
        testItemsWithId
    ),
    ...getCloneTrooperTalentShowTestEvents(
        testRolesWithId,
        testPeopleWithId,
        testItemsWithId
    ),
];
const eventsRes = db['rotation-events'].insertMany(testEvents);
