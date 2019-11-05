export default class Player {
  constructor({ name, power, weapon, hp = 150 }) {
    this.name = name;
    this.power = power;
    this.hp = hp;
    this.weapon = weapon;
  }

  attack(target) {
    const power = this.weapon ? this.weapon.power : this.power;
    target.hp -= power;
  }
}
