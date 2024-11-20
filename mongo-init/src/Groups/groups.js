export const Groupes = {
    Alliance: 0,
    GalacticKnowledgeEnthusiasts: 1,
    Empire: 2,
    Clone: 3,
};

const testGroups = [];
testGroups[Groupes.Alliance] = {
    name: 'Alliance',
    description:
        'Also includes Jedis. There is no ignorance, there is knowledge.',
};
testGroups[Groupes.GalacticKnowledgeEnthusiasts] = {
    name: 'Galactic Knowledge Enthusiasts',
    description: 'Everyone who loves to share knowledge is welcomed!',
};
testGroups[Groupes.Empire] = {
    name: 'Empire',
    description: 'LONG LIVE THE EMPIRE!"',
};
testGroups[Groupes.Clone] = {
    name: 'Clone',
    description: 'For all clones',
    icon: 'faClone',
    canHaveMultipleParticipants: false,
};

export const getGroups = () => {
    return testGroups;
};
