import { Objava } from '../objava/objava';
export class Pes {
  ime: String;
  pasma: String;
  datRoj: Date;
  imaRodovnik: Boolean;
  rodovnik: String;
  slika: String;
  _id: String;
}

export class Uporabnik {
  ime: String;
  priimek: String;
  uporIme: String;
	geslo: String;
	email: String;
  kraj: String;
  datRoj: Date;
  kratekOpis: String;
  uporSkupina: String;
	id:String;
  slika:String;
  steviloSlik:Number;
  friends: Uporabnik[];
  psi: Pes[];
  objave: Objava[];
  opravljene: Objava[];
}





/*friends: [{ type : mongoose.Schema.Types.ObjectId, ref: 'Uporabnik' }],
psi: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pes'}]*/
//TODO requests (array: kdo, kaj, kdaj)
