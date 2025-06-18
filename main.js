let bowling = {
        'players': [
            {'name': 'Livio', 'scores': [], 'img': 'https://cdn-icons-png.flaticon.com/512/194/194938.png'},
            {'name': 'Paola', 'scores': [], 'img': 'https://cdn-icons-png.flaticon.com/512/194/194935.png'},
            {'name': 'Filippo', 'scores': [], 'img': 'https://cdn-icons-png.flaticon.com/512/194/194936.png'},
            {'name': 'Giuseppe', 'scores': [], 'img': 'https://cdn-icons-png.flaticon.com/512/194/194937.png'}
        ],
        lista: function() {
            for (let player of this.players) {
                for (let i = 0; i < 10; i++) {
                    const scor = Math.floor(Math.random() * 10) + 1;
                    player.scores.push(scor);
                }
            }
        },
        FinalScores: function() {
            for (let player of this.players) {
                const totalScore = player.scores.reduce((acc, score) => acc + score, 0);
                player.finalScore = totalScore;
            }
        },
        getWinner: function() {
            const sortedPlayers = this.players.slice().sort((a, b) => b.finalScore - a.finalScore);
            return sortedPlayers[0].name;
        }
    };

    bowling.lista();
    bowling.FinalScores();

    // Visualizza i giocatori e i punteggi
    const playersDiv = document.getElementById('players');
    bowling.players.forEach(player => {
        const div = document.createElement('div');
        div.className = 'player';
        div.innerHTML = `
            <img src="${player.img}" alt="${player.name}">
            <div>
                <strong>${player.name}</strong><br>
                Punteggi: ${player.scores.join(', ')}<br>
                Totale: <span>${player.finalScore}</span>
            </div>
        `;
        playersDiv.appendChild(div);
    });

    // Mostra il vincitore
    const winnerName = bowling.getWinner();
    document.getElementById('winner').innerHTML = `Vincitore: <span class="winner">${winnerName}</span>`;