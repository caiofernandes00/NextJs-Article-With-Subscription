import styled from 'styled-components'

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
  height: calc(100vh - 5rem);

  display: flex;
  align-items: center;
  justify-content: center;

  section {
    max-width: 600px;

    > span {
      font-size: 1.5rem;
      font-weight: bold;
    }

    h1 {
      font-size: 4.5rem;
      line-height: 4.5rem;
      font-weight: 900;
      margin-top: 2.5rem;

      span {
        color: var(--cyan-500);
      }
    }

    p {
      font-size: 1.5rem;
      line-height: 2.25rem;
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;

      span {
        color: var(--cyan-500);
        font-weight: bold;
      }
    }
  }
`
