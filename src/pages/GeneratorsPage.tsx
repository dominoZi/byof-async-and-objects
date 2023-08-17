import { Code } from "../components";

export const GeneratorsPage = () => (
  <article className="max-w-[800px]">
    <h1>Generatory</h1>
    <p className="my-8">
      Generatory są nową funkcją w JavaScript i pozwalają na tworzenie
      iteratorów. Metoda <em>next()</em> przesuwa kursor do następnego kroku, a
      metod <em>return()</em> kończy iterowanie. Generatory nie mogą być
      funckcjami strzałkowymi (arrow functions)
    </p>
    <Code>
      {`
function* test() {
  yield 'a';
  yield 'b';
  yield 'c';
};

const iterator = test()
console.log(iterator.next()) //{ "value": "a", "done": false }
console.log(iterator.next()) //{ "value": "b", "done": false }
console.log(iterator.next()) //{ "value": "c", "done": false }
console.log(iterator.next()) //{ "value": undefined, "done": true }
        `}
    </Code>
  </article>
);
