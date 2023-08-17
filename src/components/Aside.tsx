import clsx from "clsx";
import { HtmlHTMLAttributes } from "react";
import { NavLink } from "react-router-dom";

const MainLink = (props: { to: string; label: string }) => {
  const { to, label } = props;
  return (
    <NavLink
      className={({ isActive }) =>
        clsx(
          "block h-[42px] leading-[42px] hover:bg-slate-50 px-2",
          isActive &&
            "border-r-4 border-yellow-600 bg-yellow-200 hover:bg-yellow-300"
        )
      }
      to={to}
    >
      {label}
    </NavLink>
  );
};

export const Aside = (props: HtmlHTMLAttributes<HTMLElement>) => {
  const { className, ...other } = props;
  return (
    <aside
      className={clsx(
        className,
        "w-[320px] bg-slate-200 min-h-full border-l border-slate-500"
      )}
      {...other}
    >
      <header className="p-2">
        <h1 className="text-[24px]">Asynchroniczność i obiekty</h1>
        <p className="text-[14px]">Dominik Zima</p>
      </header>
      <nav className="mt-4">
        <ul>
          <li>
            <span className="text-[0.75rem] p-2">CSS Nesting</span>
          </li>
          <li>
            <MainLink to="/css-nesting" label="Zagnieżdżanie selektorów" />
          </li>
          <li>
            <span className="text-[0.75rem] p-2">Asynchroniczność</span>
          </li>
          <li>
            <MainLink
              to="/sync-vs-async"
              label="Kod synchroniczny vs asynchroniczny"
            />
          </li>
          <li>
            <MainLink to="/event-loop" label="Event loop" />
          </li>
          <li>
            <MainLink to="/jwt-token" label="JWT token" />
          </li>
          <li>
            <MainLink to="/callbacks" label="Callback (funckcja zwrotna)" />
          </li>
          <li>
            <MainLink to="/promises" label="Promises (obietnice)" />
          </li>
          <li>
            <MainLink to="/async-await" label="Async await" />
          </li>
          <li>
            <MainLink to="/generators" label="Generatory*" />
          </li>
          <li>
            <span className="text-[0.75rem] p-2">Programowanie obiektowe</span>
          </li>
          <li>
            <MainLink to="/what-is-oop" label="Object-oriented programming" />
          </li>
          <li>
            <MainLink to="/prototypes" label="Prototypy i deskryptory" />
          </li>
          <li>
            <MainLink to="/spread-operator" label="Spread i rest operator" />
          </li>
          <li>
            <MainLink
              to="/copy-objects"
              label="Kopia płytka i głęboka obiektu"
            />
          </li>
          <li>
            <MainLink to="/classes" label="Klasy w JavaScript" />
          </li>
          <li>
            <MainLink to="/symbols" label="Symbole*" />
          </li>
        </ul>
      </nav>
    </aside>
  );
};
