import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LinkStyled = styled(NavLink)`
  font-family: 'Montserrat';
  text-decoration: none;
  color: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 45px;

  &.active {
    color: #5cd3a8;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 6px;

  width: 196px;
  height: 50px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  text-transform: uppercase;

  color: #373737;

  &:hover {
    background: #5cd3a8;
  }
`;
