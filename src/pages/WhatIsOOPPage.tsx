import { Code } from "../components";

export const WhatIsOOPPage = () => {
  return (
    <>
      <article className="max-w-[800px] mb-8">
        <h1 className="mb-8">Object-oriented programming</h1>
        <img
          src="https://cdn.ttgtmedia.com/rms/onlineimages/whatis-object_oriented_programming.png"
          alt="OOP image"
        />
        <h2 className="my-8">Elementy składowe programowania obiektowego</h2>
        <ul>
          <li>
            Klasy - szablon do tworzenia obiektów o określonych właściwościach i
            metodach
          </li>
          <li>Obiekty - instancje klasy</li>
          <li>Metody</li>
          <li>Właściwości</li>
          <li>
            Pola - zmienne dostępne tylko z poziomu klasy. W JavaScript ta
            funkcja została dodana ostatnio 😎
          </li>
        </ul>
        <h2 className="my-8">Klasa vs Object</h2>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">Klasa</th>
              <th className="px-6 py-3">Obiekt</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4">
                Klasa to schemat obiektu. Służy do deklarowania i tworzenia
              </td>
              <td className="px-6 py-4">Obiekt jest instacją klasy...</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4">
                Klasa nie alokuje pamięci podręcznej
              </td>
              <td className="px-6 py-4">
                Pamięć jest alokowana po utworzeniu obiektu
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4">
                Klasa jest groupą obiektów o tym samym typie
              </td>
              <td className="px-6 py-4">
                Obiekt odzwierciedla świat rzeczywisty
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4">Klasa jest jednostką logiczną</td>
              <td className="px-6 py-4">Obiekt jest jednostką fizyczną</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4">
                Klasa może być zdeklarowana tylko raz
              </td>
              <td className="px-6 py-4">
                Obiekt może być utworzony wiele razy
              </td>
            </tr>
          </tbody>
        </table>
        <h2 className="my-8">Zasady w OOP</h2>
        <ul>
          <li>
            <b>Enkapsulacja</b> - dany obiekt udostępnia na zewnątrz tylko
            wybrane informacje lub metody. Właściwości i metody
            <em>publiczne</em>
          </li>
          <li>
            <b>Inheritance</b> - rozszerzanie klasy bazowej o kolejne nowe
            funkcjonalności lub ich modyfikacja.
          </li>
          <li>
            <div>
              <b>Abstrakcja</b> - ogólny opis obiektu bez zdradzania jakiś
              szczegółów implementacyjnych. W JavaScript ten mechanizm
              praktycznie nie istniej dopiero rozszerzenie języka przez
              TypeScript daje nam ten mechanizm.
              <Code language="typescript">
                {`
// Interfejs klasy/obiektu
interface Person {
  firstName: string;
  lastName: string;
  age: number | null;
}

//Komentarz wykonany z wykorzystaniem JSDoc

/**
 * @see https://www.typescriptlang.org/docs/handbook/utility-types.html#capitalizestringtype
 */
type GetNameFunction = (
  firstName: Capitalize<string>,
  lastName: Capitalize<string>
) => Capitalize<string>;


                `}
              </Code>
            </div>
          </li>
          <li>
            <b>Polymorphism</b> - wielopostaciowość. Tą koncepcję można
            zrozumieć jako jeden interface, wiele metod. Zadaniem interpretera
            jest wybranie odpowiedniej metody do wykonania.
          </li>
        </ul>
      </article>
    </>
  );
};
