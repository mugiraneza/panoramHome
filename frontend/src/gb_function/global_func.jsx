export const  hrefUseless = (e) => {
    e.preventDefault()
}

export const roundDecimal = (nombre, taille) => {
    let precision = taille || 2;
    let tmp = Math.pow(10, precision);
    return Math.round(nombre * tmp) / tmp;
}