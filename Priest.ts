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
        this.vidaAtual =  Util.randomizar(1, 4000);
    }

    public atacar(inimigo: Personagem): string {
        const tentarConverter = Util.randomizar(1, 100)
        if (tentarConverter > 1 && tentarConverter <= 40) {
            return `O ${inimigo} foi convertido!`;
        } else {
            return `O ${inimigo} não foi convertido!`;
        }
    }


    public contraAtacar(inimigo: Personagem): void {
        this.atacar(inimigo)
    }

    aprimorarHabilidadePrincipal() {
        console.error('Este Personagem não pode executar esta ação');
    }

    public regenerarVida(): void {
        this.vidaAtual += this.vidaAtual * 1.10;
    }

}