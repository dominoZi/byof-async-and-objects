import { Code } from "../components";

export const SyncVsAsyncPage = () => (
  <>
    <article className="max-w-[640px]">
      <h1>Kod synchroniczny vs asynchroniczny</h1>
      <h3 className="mt-4">Kod synchroniczny</h3>
      <p>
        Kod wykonuje się z góry do dołu, krok po kroku. W przypadku napotaknia
        złożonej operacji aplikacja będzie czekać na jej zakoczenie, co może
        doprowadzić do zawieszenia aplikacji po stronie UI i użytkownik nie jest
        wstanie wykonać operacji. Przykłady:
      </p>
      <ul className="mt-2 list-inside list-disc">
        <li>Odczyt pliku</li>
        <li>Długo wykonująca się petla for z złożonymi operacjami</li>
        <li>Hashowanie pliku (Przykład z projektu)</li>
      </ul>
      <h3 className="mt-4">Kod asynchroniczny</h3>
      <p>
        Asynchroniczność pozwala wykonywać wiele zadań na raz bez potrzeby
        oczekiwania na wyniki operacji. Przykład:
        <ul className="mt-2 list-inside list-disc">
          <li>Zapytanie do API</li>
          <li>Odczyt lub zapis danych z bazy danych (IndexedDB)</li>
          <li>Pobieranie status baterii z urządzenia</li>
        </ul>
        <Code language="javascript">
          {`     
 navigator.getBattery().then(status=>console.log(status))

`}
        </Code>
      </p>
    </article>
  </>
);
