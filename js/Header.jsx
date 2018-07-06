// @flow

import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SiteHeader = styled.header`
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: #fafafa;
  border-bottom: 1px solid #eee;
`;

const SiteNav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding-right: 30px;
  padding-left: 30px;
  margin-right: auto;
  margin-left: auto;
`;

const HomeLink = styled((NavLink: any))`
  margin-right: auto;

  svg {
    display: block;
    width: 40px;
    padding: 0;
    fill: #999;
  }

  &.active {
    svg {
      fill: #333;
    }
  }
`;

const PageLink = styled((NavLink: any))`
  padding: 10px;
  color: #4a4a4d;
  text-decoration: none;

  &.active {
    background-color: #e6e6e6;
  }
`;

const Header = () => (
  <SiteHeader>
    <SiteNav>
      <HomeLink activeClassName="active" to="/" exact>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 442 335.86"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M442,85V304c-8.47,25.55-17.24,31.81-44.53,31.81H67c-10.33,0-20.67.12-31,0C19.24,335.53,5.57,325,1.42,309.25,1,307.49.47,305.75,0,304V85a6.15,6.15,0,0,0,.67-1.33C5.45,63.17,18,53.17,38.91,53.16c18,0,35.93.05,53.89,0,8.91,0,14.68-4.2,17.66-12.63C112.4,35,114.11,29.46,116,24c2.93-8.33,8.15-15,16-19,4.36-2.23,9.29-3.37,14-5H296a9.24,9.24,0,0,0,1.84.72c14.69,2.55,24.05,11.22,28.82,25.13,1.51,4.4,2.9,8.83,4.37,13.24,3.39,10.11,8.88,14,19.67,14.06,18.29,0,36.59-.07,54.89,0,17,.1,30.83,10.69,35,26.57C441.05,81.51,441.53,83.25,442,85ZM221.14,300.33a97,97,0,0,0,96.91-97.42c-.12-53.3-43.85-96.85-97.19-96.77-53.54.08-97.07,43.9-96.91,97.55A97,97,0,0,0,221.14,300.33ZM326.88,88.65A17.68,17.68,0,0,0,309.23,106a17.68,17.68,0,1,0,35.35-.09A17.55,17.55,0,0,0,326.88,88.65Z"/><path d="M44.89,18c5.5,0,11-.07,16.48,0,5.65.1,9.53,3.71,9.56,8.71,0,4.83-3.53,8.72-9,8.83q-17.46.36-34.95,0c-5.7-.12-9.26-4.14-9-9.24.24-4.83,4-8.22,9.39-8.31C33.24,17.89,39.07,18,44.89,18Z"/><path d="M221.12,141.59a61.73,61.73,0,1,1-62,61.35A61.81,61.81,0,0,1,221.12,141.59Z"/></g></g></svg></HomeLink>
      <PageLink activeClassName="active" to="/about">About</PageLink>
      <PageLink activeClassName="active" to="/contact">Contact</PageLink>
    </SiteNav>
  </SiteHeader>
);

export default Header;
