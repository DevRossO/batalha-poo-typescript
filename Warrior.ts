import { Personagem } from "./Personagem";
import { Util } from "./Util";

export class Warrior extends Personagem {
  constructor(nome: string) {
    super(nome + " Warrior", 0, 0, 0, 0, 0, 0, 0);
    this.forca = Util.randomizar(1, 1000);
    this.habilidadeMental = 0;
    this.poderAtaque = this.forca * 10;
    this.resistencia = Util.randomizar(0, 90);
    this.esquiva = Util.randomizar(0, 50);
    this.vidaMaxima = 40000;
    this.vidaAtual = Util.randomizar(1, 40000);
  }

  public atacar(inimigo: Personagem): string {
    const chanceEsquiva = Util.randomizar(0, 100);
    if (chanceEsquiva < inimigo.esquiva) {
      return `${inimigo.nome} esquivou do ataque de ${this.nome}!`;
    }

    const danoBase = this.poderAtaque;
    const danoReduzido = danoBase * (1 - inimigo.resistencia / 100);
    const danoFinal = Math.max(0, Math.floor(danoReduzido));

    inimigo.vidaAtual = Math.max(0, inimigo.vidaAtual - danoFinal);

    return `${this.nome} atacou ${inimigo.nome} causando ${danoFinal} de dano.\n${inimigo.nome} agora tem ${inimigo.vidaAtual} de vida.`;
  }

  public contraAtacar(inimigo: Personagem): string {
    return this.atacar(inimigo);
  }

  public aprimorarHabilidadePrincipal(): string {
    const aumento = this.forca * 0.10;
    this.forca = this.forca + aumento;
    this.poderAtaque = this.forca * 10;
    return `${this.nome} aprimorou sua habilidade principal e agora tem ${this.forca.toFixed(2)} de força.`;
  }

  public regenerarVida(): string {
    const regenerar = this.vidaAtual * 0.05;
    this.vidaAtual = Math.min(this.vidaAtual + regenerar, this.vidaMaxima);
    return `Recuperou 5% de vida e ficou com ${this.vidaAtual.toFixed(2)}!`;
  }
}
