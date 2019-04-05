export const twoFer = (X) => {
    if (X == null) {
        return "One for you, one for me.";
    } else if (X) {
        return "One for "+X+", one for me.";
    }
};