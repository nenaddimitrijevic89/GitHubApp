const convertDate = (date) => {

    const dateOf = new Date(date);
    const y = dateOf.getFullYear();
    const m = dateOf.getMonth() + 1;
    const d = dateOf.getDate();

    return (
        `${d}-${m}-${y}`
    )
}

export { convertDate };