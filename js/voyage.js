"use strict";
var Sejour = /** @class */ (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
        this._nom = _nom;
        this._prix = _prix;
    }
    Object.defineProperty(Sejour.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Sejour.prototype, "prix", {
        get: function () {
            return this._prix;
        },
        enumerable: true,
        configurable: true
    });
    return Sejour;
}());
var SejourService = /** @class */ (function () {
    function SejourService() {
        this.listeSejours = [];
        this.listeSejours.push(new Sejour('Londres', 100));
        this.listeSejours.push(new Sejour('Paris', 80));
        this.listeSejours.push(new Sejour('Nice', 70));
    }
    SejourService.prototype.rechercherParNom = function (nomSejour) {
        var sejourTrouve = null;
        this.listeSejours.forEach(function (sejour) {
            if (sejour.nom === nomSejour) {
                sejourTrouve = sejour;
            }
        });
        return sejourTrouve;
    };
    return SejourService;
}());
var recherche = new SejourService().rechercherParNom('Paris');
console.log(recherche);
