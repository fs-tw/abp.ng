let ora=require('ora')
let kleur=require('kleur')
kleur.enabled = require('color-support').level;

export class Log {
  static log(text:any, color:any) {
    console.log(kleur[color]().bold(text));
  }

  static info(text:any) {
    this.log(text, 'cyan');
  }

  static primary(text:any) {
    this.log(text, 'blue');
  }

  static success(text:any) {
    this.log(text, 'green');
  }

  static error(text:any) {
    this.log(text, 'red');
  }

  static spinner(text:any) {
    const spinner = ora(kleur.white().bold(text));
    spinner.color = 'yellow';
    return spinner;
  }
}
