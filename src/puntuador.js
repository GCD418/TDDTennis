function puntuador(a, b) {
    if (a === 0 && b === a)
        return "Love-Love";
    if(a === 1 && b === 0)
        return "15-0";
    return "30-0";
}

export default puntuador;