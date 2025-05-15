function getInitial(nomeCompleto) {
    const parole = nomeCompleto.split(" ");
    let iniziali = "";
    for (const p of parole) {
        iniziali += p.charAt(0);
    }
    return iniziali;
}

module.exports = {getInitial}
