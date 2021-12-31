import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};
  justify-content: flex-start;
  padding: 30px 0;
`;

export const Logo = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;
  h1 {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.white};
    text-align: right;
    margin-right: 20px;
  }
`;

export const StyledLink = styled(NavLink)`
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-align: right;
  margin: 15px 20px 15px auto;
  padding: 0 10px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 100%;
    width: 15px;
    height: 5px;
    background-color: ${({ theme }) => theme.colors.darkGrey};
    border-radius: 5px;
    transform: translateY(-50%);
    transition: 0.2s;
    opacity: 0;
  }

  &.active::after {
    opacity: 1;
  }
`;
