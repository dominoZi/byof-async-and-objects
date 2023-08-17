import { Code } from "../components";

export const PromisesPage = () => (
  <article className="max-w-[800px] mb-40">
    <h1>Promises (obietnice)</h1>
    <p className="mb-4">
      Promises pozwala nam wykonywać operacje asynchronicznych. Przy tworzeniu
      Promises dostajemy zapewnienie (obiekt), że dana wartość zostanie nam
      zwrócona po zakończeniu zadania (lub otrzymamy błąd).
    </p>
    <Code>
      {`
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(100);
}, 30000);
});
      `}
    </Code>

    <h3 className="mt-4">Statusy:</h3>
    <ul>
      <li>
        <b>pending</b> - promise wykonuje zadanie🚀
      </li>
      <li>
        <b>fulfilled</b> - zadanie zakończyło się poprawnie🎉
      </li>
      <li>
        <b>rejected</b> - zadanie zakończyło się błędem🚨
      </li>
    </ul>

    <h3 className="mt-8">XMLHttpRequest opakowany w promise</h3>
    <Code>{`
var getTypesAsync = () =>
  new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("load", () => {
    if (xhr.status === 200) {
      resolve({ status: xhr.status, body: JSON.parse(xhr.response) });
    } else {
      reject({ status: xhr.status, body: JSON.parse(xhr.response) });
    }
  });

  xhr.addEventListener("error", () => {
    reject();
  });

  xhr.open(
    "GET",
    "https://api-eko-bazarek.azurewebsites.net/api/products/types",
    true
  );
  xhr.setRequestHeader("Authorization", "Bearer");
  xhr.send();
});
    `}</Code>
    <section className="mt-4 p-2 border border-yellow-600 bg-yellow-100">
      <p>
        Axios - najpopularniejszy klient HTTP, który jest wraperem na{" "}
        <em>XMLHttpRequest</em>
      </p>

      <ul>
        <li>
          <a className="underline" href="https://github.com/axios/axios">
            https://github.com/axios/axios
          </a>
        </li>
      </ul>
    </section>
    <h3 className="mt-4">Promise chaning</h3>
    <ul>
      <li>
        <b>then(onFulfilled, onRejected)</b> - funkcja wywołuje się jak promise
        zakończy swoje działanie i przejdzie w stan <em>fulfilled</em>🚀 Funkcja{" "}
        <em>onRejected</em> wywoła się w przypadku błędu!.
      </li>
      <li>
        <b>catch(onRejected)</b> - funkcja wywołuje się w przypadku wystąpienia
        błędu <em>rejected</em>
      </li>
      <li>
        <b>finally(onFinally)</b> - funkcja wykonuje się zawsze po zakończeniu
        operacji asynchronicznej niezależnie od wyniku
      </li>
    </ul>

    <h3 className="mt-4">Promise statyczne metody</h3>
    <ul>
      <li>
        <div className="mt-8">
          <p className="mb-2">
            <b>Promise.all()</b> - zwraca status <em>fulfilled</em>, kiedy
            wszystkie promise zwracają status <em>fulfilled</em>
          </p>
          <Code>
            {`
Promise.all([
  fetch("https://api-eko-bazarek.azurewebsites.net/api/products/types")
    .then((res) => res.json()),
  fetch("https://api-eko-bazarek.azurewebsites.net/api/products/categories")
    .then((res) => res.json()),
]);

// Array(2)
            `}
          </Code>
        </div>
      </li>
      <li>
        <div className="mt-8">
          <p className="mb-2">
            <b>Promise.allSettled()</b> - zwraca status <em>fulfilled</em>, nie
            zależnie od statusu zadań
          </p>
        </div>
      </li>
      <li>
        <div className="mt-8">
          <p className="mb-2">
            <b>Promise.race()</b> - zwraca pierwszą zakończoną obietnicę nie
            zależnie od statusu
          </p>
          <Code>
            {`
Promise.race([
  fetch("https://api-eko-bazarek.azurewebsites.net/api/products/types")
    .then((res) => res.json()),
  fetch("https://api-eko-bazarek.azurewebsites.net/api/products/categories")
    .then((res) => res.json()),
]);

// Array(1)
            `}
          </Code>
        </div>
      </li>
      <li>
        <div className="mt-8">
          <p className="mb-2">
            <b>Promise.any()</b> - zwraca pierwszą zakończoną pozytywnie
            obietnicę
          </p>
          <Code>
            {`
Promise.race([
  fetch("https://api-eko-bazarek.azurewebsites.net/api/products/types")
    .then((res) => res.json()),
  fetch("https://api-eko-bazarek.azurewebsites.net/api/products/categories")
    .then((res) => res.json()),
]);

// Array(1)
            `}
          </Code>
        </div>
      </li>
    </ul>
  </article>
);
