import { Code } from "../components";
import { ExampleButton } from "./components";

export const CSSNestingPage = () => {
  return (
    <>
      <article className="max-w-[800px]">
        <h1>CSS Nesting</h1>
        <p>
          Nesting pozwala zwiększyć w czytelny sposób selektywność i stworzyć
          komponent z wieloma stanami i wariantami.
        </p>

        <ExampleButton>Example nesting button</ExampleButton>

        <p>CSS bez nestingu</p>
        <Code language="css">
          {`
.ExampleButton-root {
  margin: 16px 0;
  padding: 12px 24px;
  border: 1px solid #999;
}

.ExampleButton-root.disabled {
  pointer-events: none;
  cursor: none;
  filter: grayscale(1);
}

.ExampleButton-root.gray {
  border: 1px solid #999;
  color: black;
}

.ExampleButton-root.gray:hover {
  background-color: #eee;
}

.ExampleButton-root.red {
  border: 1px solid #b91c1c;
  background-color: #f87171;
}

.ExampleButton-root.red:hover {
  background-color: #fecaca;
}

.ExampleButton-root.green {
  border: 1px solid #15803d;
  background-color: #22c55e;
}

.ExampleButton-root.green:hover {
  background-color: #bbf7d0;
}

.ExampleButton-root.yellow {
  border: 1px solid #a16207;
  background-color: #facc15;
}

.ExampleButton-root.yellow:hover {
  background-color: #fef08a;
}
            `}
        </Code>

        <p className="mt-8">CSS z nestingiem</p>
        <Code language="css">
          {`
.ExampleButton-root {
  margin: 16px 0;
  padding: 12px 24px;
  border: 1px solid #999;

  & .disabled {
    pointer-events: none;
    cursor: none;
    filter: grayscale(1);
  }

  & .gray {
    border: 1px solid #999;
    color: black;

    &:hover {
      background-color: #eee;
    }
  }

  & .red {
    border: 1px solid #b91c1c;
    background-color: #f87171;

    & :hover {
      background-color: #fecaca;
    }
  }

  & .green {
    border: 1px solid #15803d;
    background-color: #22c55e;

    & :hover {
      background-color: #bbf7d0;
    }
  }

  & .yellow {
    border: 1px solid #a16207;
    background-color: #facc15;

    & :hover {
      background-color: #fef08a;
    }
  }
}
            `}
        </Code>

        <h3 className="mt-6 mb-2">Link zewnętrzne</h3>
        <ul>
          <li>
            <a
              className="underline"
              href="https://developer.chrome.com/articles/css-nesting/"
              target="_blank"
            >
              CSS Nesting
            </a>
          </li>
        </ul>
      </article>
    </>
  );
};
