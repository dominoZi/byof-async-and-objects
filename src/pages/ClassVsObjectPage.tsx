export const ClassVsObjectPage = () => {
  return (
    <>
      <section className="max-w-3xl mb-10">
        <article>
          <h1>Klasa vs Object</h1>
          <table>
            <thead>
              <tr>
                <th>Klasa</th>
                <th>Obiekt</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Klasa to schemat obiektu. Służy do deklarowania i tworzenia
                </td>
                <td>Obiekt jest instacją klasy...</td>
              </tr>
              <tr>
                <td>Klasa nie alokuje pamięci podręcznej</td>
                <td>Pamięć jest alokowana po utworzeniu obiektu</td>
              </tr>
              <tr>
                <td>Klasa jest groupą obiektów o tym samym typie</td>
                <td>Obiekt odzwierciedla świat rzeczywisty</td>
              </tr>
              <tr>
                <td>Klasa jest jednostką logiczną</td>
                <td>Obiekt jest jednostką fizyczną</td>
              </tr>
              <tr>
                <td>Klasa może być zdeklarowana tylko raz</td>
                <td>Obiekt może być utworzony wiele razy</td>
              </tr>
            </tbody>
          </table>
        </article>
      </section>
    </>
  );
};
