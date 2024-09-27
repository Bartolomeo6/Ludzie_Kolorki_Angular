import { Injectable } from '@angular/core';
import { Osoba, Plec } from './osoba';

@Injectable({
  providedIn: 'root'
})
export class OsobyService {
  bmi=0
  listaOsob:Osoba[]=[
  {id:1,
    imie:"Ola",
    nazwisko:"Nowak",
    dataUr:"2012-02-25",
    plec: Plec.K,
    zdjecie:"assets/ola.jpg",
    wzrost:156,
    waga:45
  },
  {id:2,
    imie:"Ela",
    nazwisko:"Kowalska",
    dataUr:"2016-03-25",
    plec: Plec.K,
    zdjecie:"assets/ela.jpg",
    wzrost:145,
    waga:42
  },
  {id:3,
    imie:"Roman",
    nazwisko:"Robo",
    dataUr:"2012-02-25",
    plec: Plec.M,
    zdjecie:"assets/romek.jpg",
    wzrost:156,
    waga:45
  },
  {id:4,
    imie:"Alicja",
    nazwisko:"Piotrowska",
    dataUr:"2012-02-25",
    plec: Plec.K,
    zdjecie:"assets/ala.jpg",
    wzrost:156,
    waga:45
  },
  {id:5,
    imie:"Paweł",
    nazwisko:"Daszczyński",
    dataUr:"2016-03-25",
    plec: Plec.M,
    zdjecie:"assets/pawel.jpg",
    wzrost:145,
    waga:42
  },
  {id:6,
    imie:"Magdalena",
    nazwisko:"True-man",
    dataUr:"2012-02-25",
    plec: Plec.K,
    zdjecie:"assets/magda.jpg",
    wzrost:156,
    waga:45
  }
 ];
 getListaOsob():Osoba[]{
  return this.listaOsob
 } 

 getOsobaById(id:number):Osoba|undefined{
  return this.listaOsob.find((osoba)=>osoba.id===id)
 }
 
}
