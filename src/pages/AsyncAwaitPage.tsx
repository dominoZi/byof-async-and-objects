import { Code } from "../components";

export const AsyncAwaitPage = () => (
  <article className="max-w-[800px]">
    <h1>ES6 Async await</h1>
    <p className="mb-8">
      Poprawa obsługi operacji asynchronicznych za pomocą <em>async</em> i{" "}
      <em>await</em> poprawia czyteleność kodu i niweluje potrzebę stosowania
      callbacków (callback hell).
    </p>
    <Code>
      {`
//Classic function version

async function loadData() {
  const typesRes = await fetch(
    "https://api-eko-bazarek.azurewebsites.net/api/products/types"
  );
  const types = await typesRes.json();
  const categoriesRes = await fetch(
    "https://api-eko-bazarek.azurewebsites.net/api/products/categories"
  );
  const categories = await categoriesRes.json();
  return [types, categories];
}

//Arrow version

const loadData = async () => {
  const typesRes = await fetch(
    "https://api-eko-bazarek.azurewebsites.net/api/products/types"
  );
  const types = await typesRes.json();
  const categoriesRes = await fetch(
    "https://api-eko-bazarek.azurewebsites.net/api/products/categories"
  );
  const categories = await categoriesRes.json();
  return [types, categories];
};

      `}
    </Code>
  </article>
);
