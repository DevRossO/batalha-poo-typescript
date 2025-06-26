import { Personagem } from "./Personagem";
import { Util } from "./Util";

export class Priest extends Personagem {
    constructor(nome: string) {
        super(nome, 0, 0, 0, 0, 0, 0, 0);
        this.nome = nome + " Priest";
        this.forca = 0;
        this.habilidadeMental = 0;
        this.poderAtaque = 0;
        this.esquiva = 0;
        this.resistencia = 0;
        this.vidaMaxima = 8000;
        this.vidaAtual = Util.randomizar(1, 4000);
    }

   public atacar(inimigo: Personagem): string {
    const tentarConverter = Util.randomizar(1, 100);
    if (tentarConverter <= 40) {
        inimigo.vidaAtual = 0;
        return `${inimigo.nome} foi convertido!`;
    } else {
        return `${inimigo.nome} não foi convertido!`;
    }
}


    public contraAtacar(inimigo: Personagem): string {
        return this.atacar(inimigo);
    }

    public aprimorarHabilidadePrincipal(): string {
        throw new Error("Este personagem não pode executar esta ação");
    }

    public regenerarVida(): string {
        const vidaRecuperada = this.vidaAtual * 0.10;
        this.vidaAtual += vidaRecuperada;
        return `${this.nome} regenerou 10% da vida e agora tem ${this.vidaAtual.toFixed(1)} de vida.`;
    }
}
