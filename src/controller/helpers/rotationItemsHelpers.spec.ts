import { expect, it } from '@jest/globals';
import {
    filterByDate,
    filterByLessThenAverageAttendance,
    filterPeoplePlannedInFutureEvents,
} from './rotationItemsHelpers';

const defaultPotentialMatchesFindByDate = [
    { name: 'Person 1', latestDate: new Date('2021-01-01') },
    { name: 'Person 2', latestDate: new Date('2021-01-02') },
    { name: 'Person 3', latestDate: new Date('2021-02-03') },
    { name: 'Person 4', latestDate: new Date('2021-02-04') },
    { name: 'Person 5', latestDate: new Date('2021-05-05') },
    { name: 'Person 6', latestDate: new Date('2021-05-06') },
    { name: 'Person 7', latestDate: null },
];

const defaultPotentialMatchesAverage = [
    { name: 'Person 0', attended: 0 },
    { name: 'Person 1', attended: 1 },
    { name: 'Person 2', attended: 2 },
    { name: 'Person 3', attended: 3 },
    { name: 'Person 4', attended: 4 },
    { name: 'Person 5', attended: 5 },
    { name: 'Person 6', attended: 6 },
    { name: 'Person 7', attended: 7 },
];

const defaultPotentialMatchesFutureEvents = [
    {
        name: 'Person 1',
        dates: [new Date('2021-01-01'), new Date('2021-01-02')],
    },
    {
        name: 'Person 2',
        dates: [new Date('2021-02-01'), new Date('2021-02-05')],
    },
    {
        name: 'Person 3',
        dates: [new Date('2021-03-20'), new Date('2021-03-22')],
    },
    {
        name: 'Person 4',
        dates: [],
    },
];

describe('filterByDate', () => {
    it('should return all people when the days since are 0', () => {
        const potentialMatches = filterByDate(
            defaultPotentialMatchesFindByDate,
            0,
            new Date('2021-01-01')
        );
        expect(potentialMatches).toEqual(defaultPotentialMatchesFindByDate);
    });

    it('should return all people that have done the role at least before 10 days or not at all', () => {
        const potentialMatches = filterByDate(
            defaultPotentialMatchesFindByDate,
            10,
            new Date('2021-05-07')
        );

        expect(potentialMatches).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ name: 'Person 1' }),
                expect.objectContaining({ name: 'Person 2' }),
                expect.objectContaining({ name: 'Person 3' }),
                expect.objectContaining({ name: 'Person 4' }),
                expect.not.objectContaining({ name: 'Person 5' }),
                expect.not.objectContaining({ name: 'Person 6' }),
                expect.objectContaining({ name: 'Person 7' }),
            ])
        );
    });

    it('should return only person who has not done the role if the condition can not be met', () => {
        const potentialMatches = filterByDate(
            defaultPotentialMatchesFindByDate,
            200,
            new Date('2021-05-07')
        );

        expect(potentialMatches).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ name: 'Person 7' }),
            ])
        );
    });
});

describe('filterByLessThenAverageAttendance', () => {
    it('should return all people that attended less the average', () => {
        const potentialMatches = filterByLessThenAverageAttendance(
            defaultPotentialMatchesAverage, 4
        );

        expect(potentialMatches).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ name: 'Person 0' }),
                expect.objectContaining({ name: 'Person 1' }),
                expect.objectContaining({ name: 'Person 2' }),
                expect.objectContaining({ name: 'Person 3' }),
                expect.not.objectContaining({ name: 'Person 4' }),
                expect.not.objectContaining({ name: 'Person 5' }),
                expect.not.objectContaining({ name: 'Person 6' }),
                expect.not.objectContaining({ name: 'Person 7' }),
            ])
        );
    });
});

describe('filterPeoplePlannedInFutureEvents', () => {
    it('should return all people that has no events planned after 10.2.2021', () => {
        const potentialMatches = filterPeoplePlannedInFutureEvents(
            defaultPotentialMatchesFutureEvents,
            new Date('2021-02-10')
        );

        expect(potentialMatches).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ name: 'Person 1' }),
                expect.objectContaining({ name: 'Person 2' }),
                expect.not.objectContaining({ name: 'Person 3' }),
                expect.objectContaining({ name: 'Person 4' }),
            ])
        );
    });
    
    it('should return all people that has no events planned after 3.2.2021', () => {
        const potentialMatches = filterPeoplePlannedInFutureEvents(
            defaultPotentialMatchesFutureEvents,
            new Date('2021-02-03')
        );

        expect(potentialMatches).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ name: 'Person 1' }),
                expect.not.objectContaining({ name: 'Person 2' }),
                expect.not.objectContaining({ name: 'Person 3' }),
                expect.objectContaining({ name: 'Person 4' }),
            ])
        );
    });
});
