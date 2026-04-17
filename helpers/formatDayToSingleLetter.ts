import {Day} from '@/types/days'

export const formatDayToSingleLetter = (day: Day) => {
    switch (day) {
        case "Monday": return 'M';
        case "Tuesday": return 'T';
        case "Wednesday": return 'W';
        case "Thursday": return 'TH';
        case "Friday": return 'F';
        case "Saturday": return 'SA';
        case "Sunday": return 'SU';
    }
}