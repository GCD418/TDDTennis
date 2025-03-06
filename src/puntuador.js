const scores = {
        0: "0",
        1: "15",
        2: "30",
        3: "40"
    }

obtenerPuntuacion = (score) => {
    return scores[score];
}

function obtenerScore(score1, score2) {
    if (score1 === 0 && score2 === score1)
        return "Love-Love";
    return `${obtenerPuntuacion(score1)}-${obtenerPuntuacion(score2)}`;
}

export default obtenerScore;