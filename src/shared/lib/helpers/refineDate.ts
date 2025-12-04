export const refineDate = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    const dateAfterNewYear = new Date(currentYear, 0, 15);
    const dateBeforeNewYear = new Date(currentYear, 11, 1);
    
    return currentDate < dateAfterNewYear || currentDate > dateBeforeNewYear;
};