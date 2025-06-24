const prompt = require('prompt-sync')();
import { Warrior } from './Warrior';
import { Priest } from './Priest';
import { Personagem } from './Personagem';

const w1 = new Warrior("Ragnar");
const w2 = new Warrior("Jon Snow");
const p1 = new Priest("Fabio de Melo");
const p2 = new Priest("Marcelo Rossi");

let personagens: Personagem[] = [w1, w2, p1, p2];

function escolherDoisAleatorios(personagens: Personagem[]): [Personagem, Personagem] {
    let atacante: Personagem;
    let defensor: Personagem;

    do {
        atacante = personagens[Math.floor(Math.random() * personagens.length)];
        defensor = personagens[Math.floor(Math.random() * personagens.length)];
    } while (atacante === defensor || atacante.vidaAtual <= 0 || defensor.vidaAtual <= 0);

    return [atacante, defensor];
}

function exibirStatus(personagens: Personagem[]) {
    console.log("===== Personagens vivos (" + personagens.length + ") =====");
    personagens.forEach(p => {
        console.log(`${p.nome}: ${p.vidaAtual.toFixed(1)} / ${p.vidaMaxima.toFixed(1)}`);
    });
    console.log("========================================\n");
}

function batalhar(personagensInput: Personagem[]) {
    let personagens = [...personagensInput];
    let rodada = 1;

    while (personagens.length > 1) {
        prompt("Tecle ENTER para rodar o próximo round");
        console.log(`\n========== Rodada ${rodada} ==========\n`);

        const [atacante, defensor] = escolherDoisAleatorios(personagens);

        if (atacante instanceof Priest) {
            console.log(`${atacante.nome} tentou converter ${defensor.nome}`);
            const resultado = atacante.atacar(defensor);
            console.log(resultado);

            if (resultado.includes("foi convertido")) {
                personagens = personagens.filter(p => p !== defensor);
            }

            const regenMsg = atacante.regenerarVida();
            console.log(regenMsg);
        } else {
            const resultado = atacante.atacar(defensor);
            console.log(resultado);

            if (defensor.vidaAtual > 0 && defensor instanceof Warrior) {
                const contra = defensor.contraAtacar(atacante);
                console.log(`${defensor.nome} contra-atacou ${atacante.nome}`);
                console.log(contra);
            }

            if (defensor.vidaAtual <= 0) {
                console.log(`${defensor.nome} foi derrotado e removido da batalha.`);
                personagens = personagens.filter(p => p !== defensor);
            }
        }

        exibirStatus(personagens);
        rodada++;
    }

    const vencedor = personagens[0];
    console.log(`🏆 O vencedor foi ${vencedor.nome} com ${vencedor.vidaAtual.toFixed(1)} de vida restante!`);
}
batalhar(personagens);