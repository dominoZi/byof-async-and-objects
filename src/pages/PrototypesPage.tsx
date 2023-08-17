import { BlockCode, Code } from "../components";

export const PrototypesPage = () => {
  return (
    <>
      <article className="max-w-[800px] mt-12">
        <h1 className="my-8">Prototypy i deskryptory</h1>
        <img
          src="https://refactoring.guru/images/patterns/content/prototype/prototype.png"
          alt="prototyp"
        />
        <p className="my-8">
          <b>Prototyp</b> to kreacyjny wzorzec projektowy, który umożliwia
          kopiowanie już istniejących obiektów bez tworzenia zależności pomiędzy
          twoim kodem, a klasami obiektów.
        </p>
        <a
          className="text-xs"
          target="_blank"
          href="https://refactoring.guru/pl/design-patterns/prototype"
        >
          Źródło: https://refactoring.guru/pl/design-patterns/prototype
        </a>

        <h3 className="mt-8">
          Tworzenie obiektów z wykorzystaniem prototypów i funckcji tworzącej
        </h3>
        <Code>{`
// Konstruktor 
function Person () {
    this.firstName = 'John',
    this.lastName = 'Js'
    this.age = 23
}

//Dodajemy do prototypu nową funkcję
Person.prototype.getName = function() {
  return this.firstName + " " + this.lastName;
};

//Dodajemy do prototypu właściwość
Person.prototype.height = 180

// Tworzenie obiektów
const person1 = new Person();
// Inny sposób tworzenia prototypów
const person2 = Object.create(Student);
        `}</Code>

        <h3 className="mt-8">
          Sprawdzanie prototypów obiektów{" "}
          <BlockCode>Object.getPrototypeOf()</BlockCode>
        </h3>
        <Code>{`
// Konstruktor 
function Person () {
    this.firstName = 'John',
    this.lastName = 'Js'
    this.age = 23
}

// Tworzenie obiektów
const person1 = new Person();
const person2 = new Person();

Object.getPrototypeOf(person1) === Object.getPrototypeOf(person2)
        `}</Code>
      </article>
      <article className="mt-12">
        <h2>Deskryptory właściwości</h2>
        <p className="my-6">
          Każda właściwość obiektu poza kluczem i wartością posiada również
          desktryptory, które opisują dodatkowo zachowanie danej właściwości.
          <BlockCode>Object.getOwnPropertyDescriptor()</BlockCode>
        </p>
        <Code>{`
// Konstruktor 
function Person () {
    this.firstName = 'John',
    this.lastName = 'Js'
    this.age = 23
}

// Tworzenie obiektów
const person1 = new Person();

Object.getOwnPropertyDescriptor(person1, "age")

//Output {value: 23, writable: true, enumerable: true, configurable: true}

//Zmiana deskryptorów 
Object.defineProperty(person1, "age", {
  value: 42,
  writable: false,
  enumerable: false,
  configurable: false,
});
        `}</Code>

        <table className="mt-12 w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">Deskryptor</th>
              <th className="px-6 py-3">Opis</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4">value</td>
              <td className="px-6 py-4">
                <div>
                  Określa wartość danej właściwości. Dostęp do danych możem
                  uzyskać przez operator{" "}
                  <Code>
                    {`
const person1 = {};
person1['firstName'] = 'Mario';
person1['lastName'] = 'Rossi';

console.log(person1.firstName);
// Expected output: "Mario"

const person2 = {
firstName: 'John',
lastName: 'Doe',
};
                    `}
                  </Code>
                </div>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4">configurable</td>
              <td className="px-6 py-4">
                <div>
                  Gdy wartość jest ustawiona na <em>false</em>:
                  <ul className="list-disc list-inside">
                    <li>Nie możemy zmieniać desktryptorów</li>
                    <li>Właściwość nie może zostać usunięta</li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4">enumerable</td>
              <td className="px-6 py-4">
                Jeśli wartość jest <em>false</em> to właściwość nie znajduje się
                w wyliczeniach kluczy obiektu.
                <Code>
                  {`
Object.keys(person1) // ["firstName", "lastName", "age"]

for(const key in person1){
  console.log(key)
}
`}
                </Code>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4">writable</td>
              <td className="px-6 py-4">
                Jeśli wartość jest <em>false</em> nie można modyfikować wartości
                (readonly)
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4">
                get <em>(optional)</em>
              </td>
              <td className="px-6 py-4">
                Getter wartości domyślnie <em>undefined</em>
                <Code>
                  {`
Object.defineProperty(person1, "age", {
 get: function(){ return this.firstName }
});
`}
                </Code>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4">
                set <em>(optional)</em>
              </td>
              <td className="px-6 py-4">
                Setter wartości domyślnie <em>undefined</em>
                <Code>
                  {`
Object.defineProperty(person1, "age", {
 set: function(value){ this.firstName = value }
});
`}
                </Code>
              </td>
            </tr>
          </tbody>
        </table>

        <h3 className="mt-6 mb-2">Link zewnętrzne</h3>
        <ul>
          <li>
            <a
              className="underline"
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty"
              target="_blank"
            >
              <BlockCode>Object.defineProperty()</BlockCode>
            </a>
          </li>
        </ul>
      </article>
    </>
  );
};
