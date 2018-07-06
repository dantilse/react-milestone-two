import React from 'react';
import styled from 'styled-components';

const SiteFooter = styled.footer`
  padding: 30px;
  text-align: center;
  background-color: #fafafa;
  border-top: 1px solid #eee;
`;

const Footer = () => (
  <SiteFooter>
    &copy;&nbsp;2018 Dantilse
  </SiteFooter>
);

export default Footer;
