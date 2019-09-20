class Sejour {

    constructor(private _nom: string, private _prix: number) {
        this._nom = _nom;
        this._prix = _prix;
    }

    public get nom(): string {
        return this._nom;
    }

    public get prix(): number {
        return this._prix;
    }

}

class SejourService {

    private listeSejours: Sejour[] = [];

    constructor() {
        this.listeSejours.push(new Sejour('Londres', 100));
        this.listeSejours.push(new Sejour('Paris', 80));
        this.listeSejours.push(new Sejour('Nice', 70));
    }

    rechercherParNom(nomSejour: string): Sejour | null {
        let sejourTrouve = null;
        this.listeSejours.forEach((sejour) => {
            if (sejour.nom === nomSejour) {
                sejourTrouve = sejour;
            }
        });
        return sejourTrouve;
    }

}

const recherche = new SejourService().rechercherParNom('Paris');
console.log(recherche);