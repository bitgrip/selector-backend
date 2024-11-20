export const Roles = {
    MainAssasin: 0,
    SupportAssasin: 1,
    Presenter: 2,
    Cleaner: 3,
    Inspector: 4,
    Participant: 5,
};

const testRoles = [];

testRoles[Roles.MainAssasin] = {
    name: 'Main Assasin',
    description: 'Leads the mission',
    icon: 'faUserNinja',
    canHaveMultipleParticipants: false,
};
testRoles[Roles.SupportAssasin] = {
    name: 'Support Assasin',
    description: 'Supports the mission',
    icon: 'faUserNinja',
    canHaveMultipleParticipants: true,
};
testRoles[Roles.Presenter] = {
    name: 'Presenter',
    description: 'Talks about stuff',
    icon: 'faMicrophone',
    canHaveMultipleParticipants: false,
};
testRoles[Roles.Cleaner] = {
    name: 'Cleaner',
    description: 'Cleans the mess',
    icon: 'faBroom',
    canHaveMultipleParticipants: true,
};
testRoles[Roles.Inspector] = {
    name: 'Inspector',
    description: 'Checks the stuff',
    icon: 'faClipboardCheck',
    canHaveMultipleParticipants: false,
};
testRoles[Roles.Participant] = {
    name: 'Participant',
    description: 'Takes a role',
    icon: 'faPerson',
    canHaveMultipleParticipants: true,
};

export const getRoles = () => {
    return testRoles;
};
