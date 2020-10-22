import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  width: 160px;

  display: flex;
  flex: 1;
  flex-direction: column;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  position: fixed;
  right: 0;

  .button-home {
    background: #707070;
    height: 100%;

    cursor: pointer;

    svg {
      height: 100%;
      width: 100%;

      padding: 40px;
    }

    &:hover {
      background: ${shade(0.1, '#707070')};
    }
  }

  .button-map {
    background: #222a36;
    height: 100%;

    cursor: pointer;

    svg {
      height: 100%;
      width: 100%;

      padding: 40px;
    }

    &:hover {
      background: ${shade(0.1, '#222a36')};
    }
  }

  .button-search {
    background: #31d08e;
    height: 100%;

    cursor: pointer;

    svg {
      height: 100%;
      width: 100%;

      padding: 40px;
    }

    &:hover {
      background: ${shade(0.1, '#31d08e')};
    }
  }

  .button-report {
    background: #7ba8ff;
    height: 100%;

    cursor: pointer;

    svg {
      height: 100%;
      width: 100%;

      padding: 40px;
    }

    &:hover {
      background: ${shade(0.1, '#7ba8ff')};
    }
  }
`;
