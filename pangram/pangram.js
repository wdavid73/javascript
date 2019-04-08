let abc = 'abcdefghijklmnopqrstuvwxyz'
export const isPangram = (text) => {
    let phare = text.toLowerCase().trim().split("");
    let alphabet = abc.toLowerCase().split("");
    if (alphabet.every(x => (phare).includes(x)) === true) {
        return true;
    } else {
        return false;
    }
}