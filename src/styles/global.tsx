import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  font-size: 3em;

  @media (min-width: 768px) {
    font-size: 4em;
  }

  @media (min-width: 1024px) {
    font-size: 7em;
  }
`

export default Global;