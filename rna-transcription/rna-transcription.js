export const toRna = (rna) => {
    let rna_seq = rna.split("");
    let a = [];
    rna_seq.forEach(text => {
        if(text == 'C'){
            a.push('G')
        }
        if(text == 'G'){
            a.push('C')
        }
        if(text == 'T'){
            a.push('A')
        }
        if(text == 'A'){
            a.push('U')
        }
    });
    return a.join("");
};