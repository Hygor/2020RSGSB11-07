import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 100%;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      font-size: 16px;

      ul {
        display: flex;
        list-style: none;
      }

      li + li {
        margin-left: 32px;
      }

      a {
        color: #fff;
        text-decoration: none;
        transition: opacity 0.2s;

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;
