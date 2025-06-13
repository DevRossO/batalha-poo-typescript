import { Warrior } from './Warrior';
import { Priest } from './Priest';
import { Personagem } from './Personagem';
import { Util } from './Util';

const w1 = new Warrior("Darius")
const w2 = new Warrior("Kayn")
const p1 = new Priest("Milio")
const p2 = new Priest("Neeko")

const personagens = [w1, w2, p1, p2];



function escolherDoisAleatorios(personagens: Personagem[]){
    let atacante: Personagem;
    let defensor: Personagem;

    do {
        atacante = personagens[Math.floor(Math.random() * personagens.length)];
        defensor = personagens[Math.floor(Math.random() * personagens.length)];
    } while (atacante === defensor || atacante.vidaAtual <= 0 || defensor.vidaAtual <= 0);

    return [atacante, defensor];
}

function batalhar(personagens: Personagem[]) {
    let rodadas = 1;

    while (personagens.filter(p => p.vidaAtual > 0).length > 1) {
        console.log(`\n--- Rodada ${rodadas} ---`);
        const [atacante, defensor] = escolherDoisAleatorios(personagens);

        console.log(`${atacante.nome} vai atacar ${defensor.nome}`);

        // Executa o ataque e exibe o resultado
        const resultadoAtaque = atacante.atacar(defensor);
        console.log(resultadoAtaque);

        // Se o atacante for um Priest, tenta regenerar vida
        if (atacante instanceof Priest) {
            atacante.regenerarVida();
            console.log(`${atacante.nome} regenerou vida e agora tem ${atacante.vidaAtual} de vida.`);
        }

        // Se o defensor for um Warrior e ainda estiver vivo, realiza um contra-ataque
        if (defensor instanceof Warrior && defensor.vidaAtual > 0) {
            const resultadoContraAtaque = defensor.contraAtacar(atacante);
            console.log(resultadoContraAtaque);
        }

        console.log(`${defensor.nome} agora tem ${defensor.vidaAtual} de vida.`);
        rodadas++;
    }

    // Determina o vencedor
    const vencedor = personagens.find(p => p.vidaAtual > 0);
    if (vencedor) {
        console.log(`\n🏆 Vencedor: ${vencedor.nome} com ${vencedor.vidaAtual} de vida restante!`);
    } else {
        console.log("Todos os personagens foram derrotados.");
    }
}

batalhar(personagens);
