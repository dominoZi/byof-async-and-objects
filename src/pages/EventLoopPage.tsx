import { CallStackViz, CallbackItem, EventLoop } from "./components";
import { Code } from "../components";

export const EventLoopPage = () => (
  <article className="max-w-[640px] mb-40">
    <h1>Event loop</h1>
    <p className="mt-2">
      JavaScript jest jednowątkowym językiem programowania, co oznacza, że jest
      wstanie wykonywać tylko jeden fragement kodu w danej chwili. W przypadku
      nowoczesnych aplikacji taki model nie sprawdził by się za dobrze, ponieważ
      aplikacja wykonuje wiele operacji na raz!
    </p>
    <p className="mt-4">
      Rozwiązaniem tego problemu w JavaScript jest <b>Event loop</b>, czyli
      nieskończona pętla, która wykonuje zakolejkowane operacje. Podobny model
      działania możemy spotkać w grach komputerowych.
    </p>
    <h2 className="mt-6">Składowe pamięci w JavaScript</h2>
    <EventLoop
      renderHeap={() => (
        <>
          <CallbackItem label="name" />
          <CallbackItem label="cat" />
          <CallbackItem label="doSomething1()" />
          <CallbackItem label="doSomething2()" />
        </>
      )}
      renderStack={() => (
        <>
          <CallbackItem label="doSomething1()" />
          <CallbackItem label="doSomething2()" />
        </>
      )}
    />

    <ul className="my-6">
      <li>
        <b>Call stack</b> - stos wywołań. Jak Javascript napotyka funkcję do
        wywołania trafia ona stack. W pierwszej kolejności wywoływana jest
        funkcja ostatnio odłożona (LIFO - Last In First Out).
      </li>
      <li>
        <b>Heap</b> - przechowywanie obiektów (zmiennych) i funkcji
      </li>
      <li>
        <b>Queue</b> - kolejka jest odpowiedzialna za wrzucanie nowych zadań na
        stos.
      </li>
    </ul>

    <h2 className="mt-6">Asynchroniczność, a Event loop</h2>
    <p className="mb-4">
      Przeglądarka udostępnia nam asynchroniczne funkcje, które są wykonywane
      poza Event loop. Przykłady <em>setTimeout</em>, <em>setInterval</em>,
      <em>requestAnimationFrame</em>, zdarzenia DOM i AJAX.
    </p>
    <Code language="javascript">
      {`     
 console.log("Start");

 setTimeout(function timeout() {
    console.log("Timeout callback!");
 }, 5000);    

 console.log("Done");

`}
    </Code>
    <div className="my-6">
      <CallStackViz />
    </div>

    <p>Kolejność wywołania kodu</p>

    <ul className="list-inside list-decimal">
      <li>
        Wywołanie <em>console.log("Start")</em>
      </li>
      <li>
        Wywołanie <em>setTimeout()</em>
      </li>
      <li>
        Wywołanie <em>console.log("Done")</em>. Funckja <em>setTimeout</em>{" "}
        czeka na zakończenie
      </li>
      <li>
        Skrypt wykonał się w całości, ale aplikacja czeka na zakończenie
        działania funkcji w tle.
      </li>
      <li>
        Funckja <em>setTimeout</em> kończy działanie i funkcja <em>timeout</em>{" "}
        (callback) jest przenoszona do kolejki i będzie czekać na wywołanie
        przez call stack.
      </li>
      <li>
        Wywołanie <em>console.log("Timeout callback!");</em>
      </li>
      <li>Cały kod został wykonany</li>
    </ul>

    <h3 className="mt-6 mb-2">Link zewnętrzne</h3>
    <ul>
      <li>
        <a
          className="underline"
          href="http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljazwvYnV0dG9uPg%3D%3D"
          target="_blank"
        >
          Aplikacja pokazująca zachowanie event loop
        </a>
      </li>
      <li>
        <a
          className="underline"
          href="https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif"
          target="_blank"
        >
          Wizualizacja działania Event loop
        </a>
      </li>
    </ul>
  </article>
);
