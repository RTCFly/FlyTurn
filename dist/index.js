"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var inversify_1 = require("inversify");
require("reflect-metadata");
var TYPES = {
    Warrior: Symbol.for("Warrior"),
    Weapon: Symbol.for("Weapon"),
    ThrowableWeapon: Symbol.for("ThrowableWeapon")
};
var Katana = (function () {
    function Katana() {
    }
    Katana.prototype.hit = function () {
        return "cut!";
    };
    Katana = __decorate([
        inversify_1.injectable()
    ], Katana);
    return Katana;
}());
var Shuriken = (function () {
    function Shuriken() {
    }
    Shuriken.prototype.throw = function () {
        return "hit!";
    };
    Shuriken = __decorate([
        inversify_1.injectable()
    ], Shuriken);
    return Shuriken;
}());
var Ninja = (function () {
    function Ninja(katana, shuriken) {
        this._katana = katana;
        this._shuriken = shuriken;
    }
    Ninja.prototype.fight = function () { return this._katana.hit(); };
    Ninja.prototype.sneak = function () { return this._shuriken.throw(); };
    Ninja = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(TYPES.Weapon)),
        __param(1, inversify_1.inject(TYPES.ThrowableWeapon))
    ], Ninja);
    return Ninja;
}());
var myContainer = new inversify_1.Container();
myContainer.bind(TYPES.Warrior).to(Ninja);
myContainer.bind(TYPES.Weapon).to(Katana);
myContainer.bind(TYPES.ThrowableWeapon).to(Shuriken);
var ninja = myContainer.get(TYPES.Warrior);
console.log(ninja.fight());
