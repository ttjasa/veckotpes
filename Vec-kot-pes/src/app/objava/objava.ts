export class Komentar{
  komentar: String;
  uporabnik:  String;
  imePriimek: String;
  datOddaje: Date;
}

export class Objava {
  naslov: String;
  uporabnik: String;
  imePriimek: String;
  opis: String;
  slika: String;
  profilna: String;
  ocena: Number;
  datOddaje: Date;
  izziv: String;
  _id: String;
  komentarji: Komentar[];
}
