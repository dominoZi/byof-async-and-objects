import { Code } from "../components";

export const ClassesPage = () => {
  return (
    <>
      <article className="max-w-[800px]">
        <h1>Klasy w JavaScript</h1>
      </article>
      <ul>
        <li>
          <div className="py-6">
            <b>Konstruktor</b> - każda klasa musi zawierać konstruktor. W
            przypadku jego braku zostanie wywołany konstruktor podstawowy.
            <Code>{`
//Stara składnia
function User(name, age) {
  this.name = name;
  this.age = age;
}


//Nowa składnia
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
            `}</Code>
          </div>
        </li>

        <li>
          <div className="py-6">
            <b>Właściwości i metody</b> (Z przykładem implementacji interfejsu)
            <Code language="typescript">{`
interface IUser {
  age: number;
  name: string;
  sayHello: () => string;
}

class User implements IUser {
  age: number = 18;
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sayHello() {
    return "Cześć, Jestem " + this.name;
  }
}
            `}</Code>
          </div>
        </li>

        <li>
          <div className="py-6">
            <b>Prywatne pola i metody</b>
            <Code language="typescript">{`
class User {
  #age: number;
  name: string;
  constructor(name: string, age: number = 18) {
    this.#age = age;
    this.name = name;
  }
  sayHello() {
    return "Cześć, Jestem " + this.name + " i mam " + this.#age;
  }
}
            `}</Code>
          </div>
        </li>

        <li>
          <div className="py-6">
            <b>Getter i setter</b> - sposób na kontrolę dostępu do danych
            zwartych w klasie
            <Code language="typescript">{`
class User {
  #age = 18;
  get age() {
    return this.#age;
  }
  set age(val: number) {
    if (18 < val) {
      throw new Error("Jesteś za młody");
    }
    this.#age = val;
  }
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sayHello() {
    return "Cześć, Jestem " + this.name;
  }
}
            `}</Code>
          </div>
        </li>

        <li>
          <div className="py-6">
            <b>Metody statyczne</b> - dana metoda należy do klasy, a nie
            konkretnego obiektu.
            <Code language="typescript">{`
class User {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  static isAdult(user: User) {
    return 18 <= user.age;
  }
}
            `}</Code>
          </div>
        </li>

        <li>
          <div className="py-6">
            <b>Dziedziczenie</b> - dziedziczenie może zachodzić tylko po jednej
            klasie. klasa może implementować wiele interfejsów.
            <Code language="typescript">{`
class MyError extends Error {
  constructor(m: string) {
    super(m);
  }
  sayHello() {
    return "hello " + this.message;
  }
}
            `}</Code>
          </div>
        </li>
      </ul>
      <h3 className="mt-6 mb-2">Link zewnętrzne</h3>
      <ul>
        <li>
          <a
            className="underline"
            href="https://www.typescriptlang.org/docs/handbook/2/classes.html"
            target="_blank"
          >
            TypeScript Classes
          </a>
        </li>
      </ul>
    </>
  );
};
