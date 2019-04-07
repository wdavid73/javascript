
export const value = ([val1, val2]) => {
    const colors = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
    return parseInt(colors.indexOf(val1) + "" + colors.indexOf(val2));
}