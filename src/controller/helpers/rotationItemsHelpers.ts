export const filterByDate = (
    potentialMatches: any,
    daysSince: any,
    referenceDate: Date
) => {
    if (daysSince > 0) {
        let filteredMatches: any = [];
        let dateNow = referenceDate;
        let dateNowMinusDays = referenceDate;
        dateNowMinusDays.setDate(dateNow.getDate() - daysSince);
        console.log("today's date: " + dateNow);
        console.log('days since: ' + daysSince);
        console.log(
            'looking for people who have not done the role since: ' +
                dateNowMinusDays
        );
        potentialMatches.forEach((match: any) => {
            if (match.latestDate < dateNowMinusDays) {
                filteredMatches.push(match);
            } else if (match.latestDate === null) {
                filteredMatches.push(match);
            }
        });
        return filteredMatches;
    } else {
        return potentialMatches;
    }
};

export const getAverageAttendance = (potentialMatches: any) => {
    const averageAttendance = Math.ceil(
        potentialMatches.reduce(
            (acc: any, curr: any) => acc + curr.attended,
            0
        ) / potentialMatches.length
    );
    return averageAttendance;
};

export const filterByLessThenAverageAttendance = (
    potentialMatches: any,
    averageAttendance: number
) => {
    let filteredMatches: any = [];

    potentialMatches.forEach((match: any) => {
        if (match.attended < averageAttendance) {
            filteredMatches.push(match);
        }
    });
    return filteredMatches;
};

export const filterPeoplePlannedInFutureEvents = (
    potentialMatches: any,
    referenceDate: Date
) => {
    let filteredMatches: any = [];
    potentialMatches.forEach((match: any) => {
        if (match.dates.find((date: any) => date > referenceDate)) {
        } else {
            filteredMatches.push(match);
        }
    });
    return filteredMatches;
};

export const filterOutExcludedPeople = (
    potentialMatches: any,
    excludedPeople: any
) => {
    let filteredMatches: any = [];
    potentialMatches.forEach((match: any) => {
        if (!excludedPeople.includes(match._id.toString())) {
            filteredMatches.push(match);
        }
    });
    return filteredMatches;
};

export const filterNonActivePeople = (potentialMatches: any) => {
    let filteredMatches: any = [];
    potentialMatches.forEach((match: any) => {
        if (match.active) {
            filteredMatches.push(match);
        }
    });
    return filteredMatches;
};

export const filterPeopleWhoHasNotDoneTheRole = (potentialMatches: any) => {
    let filteredMatches: any = [];
    potentialMatches.forEach((match: any) => {
        if (match.attended !== 0) {
            filteredMatches.push(match);
        }
    });

    return filteredMatches;
};

export const filterPeopleWhoHasDoneTheRole = (potentialMatches: any) => {
    let filteredMatches: any = [];
    potentialMatches.forEach((match: any) => {
        if (match.attended === 0) {
            filteredMatches.push(match);
        }
    });

    return filteredMatches;
};

export const shuffleArray = (array: any) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
};
