import { Code } from "../components";

export const SpreadAndRestPage = () => {
  return (
    <>
      <article className="max-w-[800px]">
        <h1>Spread operator</h1>
        <p>
          Spread operator pozwalają na rozbijanie obiektów na miejsze składowe
          oraz scalanie obiektów.
        </p>
        <Code>{`
const obj = {
  isbn: "123-456-222",
  author: {
    lastName: "Doe",
    firstName: "Jane",
  },
  editor: {
    lastName: "Smith",
    firstName: "Jane",
  },
  title: "The Ultimate Database Study Guide",
  category: ["Non-Fiction", "Technology"],
};

// Rozbicie elementu na mniejsze składowe
const {
  isbn,
  author,
  editor: { lastName, firstName },
  title: bookTitle, // Zmiana nazwy właściwości
  category,
} = obj;

// Tworzenie nowego obiektu
const newObj = { ...author, lastName: "", booksCount: 0 };

const arr = ["Ala", "ma", "kota"];

//Kopiowanie elementów tablicy
const newArr = [...arr, "!", "😃"];
        `}</Code>
      </article>
      <article className="max-w-[800px] my-8">
        <h1>Rest operator</h1>
        <p>
          Pozwala na zbieranie wielu parametrów funkcji w jedną tablicę, co
          umożliwia elastyczne przekazywanie parametrów do funkcji.
        </p>
        <Code>{`
const obj2 = {
  isbn: "123-456-222",
  author: "Dominik Lato",
  editor: "Jacek Wiosna",
  title: "The Ultimate Database Study Guide",
  category: "Technology",
};

function toCSV(...param) {
    console.log(param.join(","));
}

toCSV(...Object.values(obj2))
        `}</Code>
      </article>
    </>
  );
};
