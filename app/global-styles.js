import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Lato', sans-serif;
  }
  .page-link {
    border-radius: 0 !important;
  }
  .es-highlight {
    font-weight: bold;
    font-style: italic;
  }
`;
