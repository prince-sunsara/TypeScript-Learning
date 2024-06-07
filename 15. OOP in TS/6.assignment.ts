//? CHECK BANK BALANCE --> full question is in video no. 28 (thapa)

class BankAccount {
  constructor(private _balance: number = 0) {}

  public get balance(): number {
    return this._balance;
  }

  public set balance(b: number) {
    if (b < 0) throw new Error("Balance cannot be less then 0.");
    this._balance = b;
  }
}

const b = new BankAccount(10);
b.balance = 1000;
console.log(b.balance);

//? TEMPRATURE CONVERTER --> full question is in video no. 28 (thapa)

class Temprature {
  private _celsius: number = 0;

  public get celsius(): number {
    return this._celsius;
  }

  public set celsius(t: number) {
    this._celsius = t;
  }

  public get ctof(): number {
    let f: number = (this._celsius * 9) / 5 + 32;
    return f;
  }

  public set ftoc(f: number) {
    this._celsius = ((f - 32) * 5) / 9;
  }
}

const t = new Temprature();
t.celsius = 10;

console.log(t.celsius);
console.log(t.ctof);
t.ftoc = 50;
console.log(t.celsius);
