import { BlockCode, Code } from "../components";

export const SymbolsPage = () => {
  return (
    <>
      <article className="max-w-[800px]">
        <h1>Symbole*</h1>
        <p className="my-6">
          Symbole to typy proste, które zawsze zwracją unikalną wartość.
        </p>
        <Code>
          {`
const log = Symbol();
console.log(typeof log); //symbol
          `}
        </Code>
        <p className="my-6">
          Podczas tworzenia Symboli możemy podać klucz, który ułatwi debugowanie
          kodu, ale nie wpływa na unkalność kodu.
        </p>
        <Code>
          {`
const logger1 = Symbol("log");
const logger2 = Symbol("log");
console.log(logger1 === logger2); //false
          `}
        </Code>
        <h2 className="my-6">Zastosowanie</h2>
        <p className="mb-6">
          Dodawanie właściwości do danego obiektu. Właściwości dodane w ten
          sposób nie są iterowalne, dlatego są "ukryte".
        </p>
        <Code>
          {`
const lastName = Symbol("name");

const ob = {
  firstName: "Dominik",
  [lastName]: "Lato",
};

Object.keys(ob) // ["firstName"]
          `}
        </Code>

        <p className="my-6">
          Listowanie wszystkich Symboli dostępnych dla obiektu{" "}
          <BlockCode>Object.getOwnPropertySymbols(ob)</BlockCode>
        </p>
        <h3>Globalny rejestr symboli</h3>

        <Code>
          {`
Symbol.for("Symbol 1");
Symbol.for("Other Symbol");

console.log(Symbol.for("Symbol 1"));

const symbol2 = Symbol.for("Symbol 2");
const testSymbol = Symbol("test");

console.log(Symbol.keyFor(symbol2));
console.log(Symbol.keyFor(testSymbol));
  `}
        </Code>

        <h2 className="my-6">Wbudowane Symbole</h2>
        <ul className="list-inside">
          <li>
            <div>
              <b>Symbol.hasInstance</b> - testuje czy dany obiekt należy do
              danego typu.
              <Code>
                {`
class Cat {
  static [Symbol.hasInstance](obj) {
    console.log("Testujemy sobie")
    return false;
  }
}

console.log([] instanceof Cat); 
                `}
              </Code>
            </div>
          </li>
          <li>
            <div>
              <b>Symbol.toPrimitive</b> - mapuje obiekt na dany typ
              <Code>
                {`
const someValue = {
  value: 321,

  [Symbol.toPrimitive](hint) {
    switch (hint) {
      case "boolean":
        return false;
        case "string":
        case "default":
            return this.value.toString();
        break;
        case "number":
            return this.value;
        break;
    }
  }
}

console.log(someValue + "PLN"); //"321PLN"
console.log(Number(someValue)); //321
console.log(Boolean(someValue)); //false
                `}
              </Code>
            </div>
          </li>
          <li>
            <div>
              <b>Symbol.iterator</b> - dodaje iterację do obiektu
              <Code>
                {`
const iterable1 = {};

iterable1[Symbol.iterator] = function* () {
  yield "Ala";
  yield "ma";
  yield "kota";
};

console.log([...iterable1]);
// Expected output: Array ["Ala", "ma", "kota"]
                `}
              </Code>
            </div>
          </li>
        </ul>
      </article>
    </>
  );
};
