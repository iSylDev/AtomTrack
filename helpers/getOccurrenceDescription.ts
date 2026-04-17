import {Day, DAYS_OF_THE_WEEK} from "@/types/days";


const getOccurrenceDescription = (days: Day[]) => {
    if (days.length === 0) return "Select days for this task";
    if (days.length === 7) return "This task will be completed every day";

    // 1. Sort the days based on the 'real life' order (Monday first)
    const sortedDays = [...days].sort((a, b) =>
        DAYS_OF_THE_WEEK.indexOf(a) - DAYS_OF_THE_WEEK.indexOf(b)
    );

    // 2. Handle single day
    if (sortedDays.length === 1) return `This task will be completed every ${sortedDays[0]}`;

    // 3. Use Intl.ListFormat for perfect "Monday, Tuesday, and Wednesday" formatting
    const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
    return `This task will be completed every ${formatter.format(sortedDays)}`;
};

export default getOccurrenceDescription;