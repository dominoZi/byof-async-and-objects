import { Code } from "../components";

export const JWTTokenPage = () => {
  return (
    <article className="max-w-[800px]">
      <h1 className="mb-2">JWT Token (JSON Web token)</h1>
      <p>
        Token sieciowy JSON (JWT), wymawiany jako „jot”, to otwarty standard (
        <a
          className="underline"
          href="https://datatracker.ietf.org/doc/html/rfc7519"
          target="_blank"
        >
          RFC 7519
        </a>
        ), który definiuje zwarty i samodzielny sposób bezpiecznego przesyłania
        informacji między stronami jako obiekt JSON. Ponownie, JWT jest
        standardem, co oznacza, że wszystkie JWT są tokenami, ale nie wszystkie
        tokeny są JWT.
      </p>
      <h2 className="my-2">Budowa tokena</h2>
      <div className="flex flex-row m-[-0.25rem]">
        <div className="w-[33%] bg-yellow-100 m-1 p-2">
          <div>Header</div>
          <p className="text-sm text-slate-500">
            Zawiera typ token i algorytm szyfrujący służący do zabezpieczenia
            tokenu
          </p>
        </div>
        <div>.</div>
        <div className="w-[33%] bg-blue-100 m-1 p-2">
          <div>Payload</div>
          <p className="text-sm text-slate-500">Zawiera dane i claims</p>
        </div>
        <div>.</div>
        <div className="w-[33%] bg-green-100 m-1 p-2">
          <div>Signartura</div>
          <p className="text-sm text-slate-500">
            podpis tokenu służący do validacji
          </p>
        </div>
      </div>
      <div className="flex flex-row m-[-0.25rem] mt-6 text-sm break-words">
        <div className="w-[33%] bg-yellow-100 m-1 p-2 ">
          eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
        </div>
        <div>.</div>
        <div className="w-[33%] bg-blue-100 m-1 p-2 ">
          eyJpZCI6ImQ4N2FhZGI5LWYxNDctNDVkMi05YzhhLTIxOTcyYmVhMDM5NCIsImVtYWlsIjoiZG9taW5pay56aW1hQGF2ZW5nYS5jb20iLCJmaXJzdE5hbWUiOiJEb21pbmlrIiwibGFzdE5hbWUiOiJaaW1hIiwiaWF0IjoxNjkwMDg5NDExfQ
        </div>
        <div>.</div>
        <div className="w-[33%] bg-green-100 m-1 p-2">
          VwrftYQ9UCx3H6iP2RQ6SFlxR6aVNxjEq4CqGAFBvFo
        </div>
      </div>
      <p className="my-4">Cały token</p>
      <Code language="jwt">
        {`
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQ4N2FhZGI5LWYxNDctNDVkMi05YzhhLTIxOTcyYmVhMDM5NCIsImVtYWlsIjoiZG9taW5pay56aW1hQGF2ZW5nYS5jb20iLCJmaXJzdE5hbWUiOiJEb21pbmlrIiwibGFzdE5hbWUiOiJaaW1hIiwiaWF0IjoxNjkwMDg5NDExfQ.VwrftYQ9UCx3H6iP2RQ6SFlxR6aVNxjEq4CqGAFBvFo
                `}
      </Code>
      <p className="my-4">Odczytywanie headera i payload</p>
      <Code language="javascript">
        {`
// Parse header
JSON.parse(atob("eyJpZCI6ImQ4N2FhZGI5LWYxNDctNDVkMi05YzhhLTIxOTcyYmVhMDM5NCIsImVtYWlsIjoiZG9taW5pay56aW1hQGF2ZW5nYS5jb20iLCJmaXJzdE5hbWUiOiJEb21pbmlrIiwibGFzdE5hbWUiOiJaaW1hIiwiaWF0IjoxNjkwMDg5NDExfQ"))

// Parse payload
JSON.parse(atob("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"))

`}
      </Code>
      <h3 className="my-4">Przykładowy Header</h3>
      <Code language="json">
        {`
{
  "alg": "HS256",
  "typ": "JWT"
}
                `}
      </Code>
      <h3 className="my-4">Przykładowy Payload</h3>
      <Code language="json">
        {`
{
  "id": "d87aadb9-f147-45d2-9c8a-21972bea0394",
  "email": "dominik.zima@avenga.com",
  "firstName": "Dominik",
  "lastName": "Zima",
  "iat": 1690089411
}
                `}
      </Code>
      <h2 className="my-4">Przykładowe claimy</h2>

      <ul>
        <li>
          <b>iss (issuer)</b> - kto wystawił token
        </li>
        <li>
          <b>sub (subject)</b> - użytkownik
        </li>
        <li>
          <b>aud (audience)</b> - odbiorca, dla którego token został wystawiony
        </li>
        <li>
          <b>exp (expiration time)</b> - data i czas wygaśnięcia tokenu
        </li>
        <li>
          <b>nbf (not before time)</b> - data i czas przed którym nie można
          używać tokenu
        </li>
        <li>
          <b>iat (issued at time)</b> - data i czas wystawienia tokenu
        </li>
        <li>
          <b>jti (jwt token id)</b> - unikalny identyfikator tokena
        </li>
      </ul>

      <h2 className="my-4">Zastosowanie</h2>
      <ul className="list-disc list-inside">
        <li>Authentication - proces sprawdzania tożsamości użytkownika</li>
        <li>
          Authorization - proces udzielania dostępu do danego zasobu na serwerze
        </li>
        <li>Wymian informacji, między stronami</li>
      </ul>
      <h2 className="my-4">Zalety</h2>
      <ul className="list-disc list-inside">
        <li>Niewielkie rozmiary</li>
        <li>Bezstanowość (Stateless)</li>
        <li>Skalowalność</li>
        <li>Szybkość</li>
      </ul>
      <h3 className="mt-6 mb-2">Link zewnętrzne</h3>
      <ul>
        <li>
          <a
            className="underline"
            href="https://auth0.com/docs/secure/tokens/json-web-tokens"
            target="_blank"
          >
            JWT Token
          </a>
        </li>
        <li>
          <a className="underline" href="https://jwt.io/" target="_blank">
            Strona do parsowania tokena
          </a>
        </li>
        <li>
          <a
            className="underline"
            href="https://developer.mozilla.org/en-US/docs/Web/API/atob"
            target="_blank"
          >
            atob()
          </a>
        </li>
        <li>
          <a
            className="underline"
            href="https://developer.mozilla.org/en-US/docs/Web/API/btoa"
            target="_blank"
          >
            btoa()
          </a>
        </li>
      </ul>
    </article>
  );
};
