// Helper to find the start of the week for any given date
 const getStartOfWeek = (date: Date) => {
    const day = date.getDay();
    // Adjusting so Monday is the first day (0)
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(date.setDate(diff));
};

export default getStartOfWeek