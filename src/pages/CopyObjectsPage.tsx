import { Code } from "../components";

export const CopyObjectsPage = () => {
  return (
    <>
      <article className="max-w-[800px]">
        <h1>Kopia płytka i głęboka obiektu</h1>
        <ul className="mt-10">
          <li>
            <div className="mb-6">
              <b>Kopia płytka obiektu (shallow copy)</b> - kopiuje tylko
              najwyższy poziom zagnieżdzenia właściwości.
            </div>
            <Code>{`
const data = {
  isbn: "123-456-222",
  author: {
    lastname: "Doe",
    firstname: "Jane",
  },
  editor: {
    lastname: "Smith",
    firstname: "Jane",
  },
  title: "The Ultimate Database Study Guide",
  category: ["Non-Fiction", "Technology"],
};

//Spread operator
const shallowCopy = {...data}
        `}</Code>
          </li>
          <li>
            <div className="my-6">
              <b>Kopia głęboka obiektu (deep copy)</b> - kopiuje cały obiekt
            </div>
            <Code>{`
const data = {
  isbn: "123-456-222",
  author: {
    lastname: "Doe",
    firstname: "Jane",
  },
  editor: {
    lastname: "Smith",
    firstname: "Jane",
  },
  title: "The Ultimate Database Study Guide",
  category: ["Non-Fiction", "Technology"],
};

// Stary sposób przez serializację do JSON'a
const deepCopy1 = JSON.parse(JSON.stringify(data));

// Nowy sposób
const deepCopy2 = structuredClone(data);
        `}</Code>
          </li>
        </ul>
      </article>
    </>
  );
};
