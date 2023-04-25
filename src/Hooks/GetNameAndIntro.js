export const GetNameAndIntro = (rowName) => {
    const regex = /\[([^\]]+)\]/;

    const getName = (rowName) => {
        const match = rowName.match(regex);
        return match ? match[1] : '';
    }

    const getIntro = (rowName) => {
        return rowName.replace(regex, '');
    }

    const name = getName(rowName);
    const intro = getIntro(rowName);

    return {name ,intro};
}
