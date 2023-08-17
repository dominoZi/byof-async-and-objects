import { Button, Code } from "../components";

export const CallbacksPage = () => {
  const callApiExample = () => {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener("load", () => {
      if (xhr.status === 200) {
        console.log("Odpowiedź");
        console.log(xhr.response);
      } else {
        console.log(xhr.status);
      }
    });

    xhr.addEventListener("error", () => {
      alert("Błąd");
    });

    xhr.open(
      "GET",
      "https://api-eko-bazarek.azurewebsites.net/api/products/types",
      true
    );
    xhr.setRequestHeader("Authorization", "Bearer");
    xhr.send();
  };
  return (
    <article className="max-w-[800px]">
      <h1>Callback (funkcja zwrotna)</h1>
      <p className="my-2">
        Funkcja wywołania zwrotnego to funkcja przekazywana jako argument do
        innej funkcji, która jest następnie wywoływana wewnątrz funkcji
        zewnętrznej w celu wykonania jakiejś procedury lub działania. Przykłady:
      </p>
      <h3 className="my-4">Iterowanie po elementach tablicy</h3>
      <Code>
        {`
function callback(x){
    console.log(x)
}

[1, 2, 3].forEach(callback)
        `}
      </Code>
      <h3 className="my-4">AJAX - wykonanie zapytania do API</h3>
      <Code>
        {`
const xhr = new XMLHttpRequest();

xhr.addEventListener("load", () => {
    if (xhr.status === 200) {
    console.log("Odpowiedź");
    console.log(xhr.response);
    } else {
    console.log(xhr.status);
    }
});

xhr.addEventListener("error", () => {
    alert("Błąd");
});

xhr.open(
    "GET",
    "https://api-eko-bazarek.azurewebsites.net/api/products/types",
    true
);
xhr.setRequestHeader("Authorization", "Bearer {token}");
xhr.send();
        `}
      </Code>
      <Button className="mt-2" onClick={callApiExample}>
        Test
      </Button>

      <h2 className="my-4">Callback hell!!!</h2>
      <img
        src="https://res.cloudinary.com/practicaldev/image/fetch/s--c0aEZX7m--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/b8euo2n7twvgh3dbuatd.jpeg"
        alt="Callback hell"
      />
    </article>
  );
};
