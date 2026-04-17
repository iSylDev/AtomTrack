export const getWeeklyDescription = (day: string | undefined) => {
    if (!day) return "Select a day to repeat this task weekly";

    return `This task will be completed every ${day}`;
};

export default getWeeklyDescription;