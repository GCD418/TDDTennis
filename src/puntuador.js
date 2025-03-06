function obtenerScore(score1, score2) {
    if (score1 === 0 && score2 === score1)
        return "Love-Love";
    if(score1 === 1 && score2 === 0)
        return "15-0";
    return "30-0";
}

export default obtenerScore;