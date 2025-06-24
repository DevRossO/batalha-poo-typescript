export class Personagem {
    constructor(
        private _nome: string,
        private _forca: number,
        private _habilidadeMental: number,
        private _poderAtaque: number,
        private _esquiva: number,
        private _resistencia: number,
        private _vidaAtual: number,
        private _vidaMaxima: number
    ) {}

    public get nome(): string {
        return this._nome;
    }

    public get forca(): number {
        return this._forca;
    }

    public get habilidadeMental(): number {
        return this._habilidadeMental;
    }

    public get poderAtaque(): number {
        return this._poderAtaque;
    }

    public get esquiva(): number {
        return this._esquiva;
    }

    public get resistencia(): number {
        return this._resistencia;
    }

    public get vidaAtual(): number {
        return this._vidaAtual;
    }

    public get vidaMaxima(): number {
        return this._vidaMaxima;
    }

    public set nome(nome: string) {
        this._nome = nome;
    }

    public set forca(forca: number) {
        this._forca = forca;
    }

    public set habilidadeMental(habilidadeMental: number) {
        this._habilidadeMental = habilidadeMental;
    }

    public set poderAtaque(poderAtaque: number) {
        this._poderAtaque = poderAtaque;
    }

    public set esquiva(esquiva: number) {
        this._esquiva = esquiva;
    }

    public set resistencia(resistencia: number) {
        this._resistencia = resistencia;
    }

    public set vidaAtual(vidaAtual: number) {
        this._vidaAtual = vidaAtual;
    }

    public set vidaMaxima(vidaMaxima: number) {
        this._vidaMaxima = vidaMaxima;
    }

    public atacar(inimigo: Personagem): string {
        return "";
    }

    public contraAtacar(inimigo: Personagem): string {
        return "";
    }

    public aprimorarHabilidadePrincipal(): string {
        return "";
    }

    public regenerarVida(): string {
        return "";
    }
}
