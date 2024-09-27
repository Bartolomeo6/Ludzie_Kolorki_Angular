export interface Osoba {
    id:number;
    imie:string;
    nazwisko:string;
    dataUr:string;
    plec: Plec;
    zdjecie:string;
    wzrost:number;
    waga:number;
}

export enum Plec {
    K = "Kobieta",
    M = "Mąż"
}
