export class Util {
    static randomizar(a: number, b: number){
        return Math.round(a + Math.random() * b - a)
    }
}