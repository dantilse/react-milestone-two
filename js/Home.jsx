// @flow
import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0 -15px;
  list-style: none;
`;

const CardItem = styled.li`
  flex-basis: 33.3333333333%;
  flex-grow: 1;
  min-width: 330px;
  padding-right: 15px;
  padding-left: 15px;
  margin-bottom: 30px;
`;

const Home = (props: { image: Image }) => (
  <CardList>
    {props.image.map(image => <CardItem key={image.id}><Card {...image} /></CardItem>)}
  </CardList>
);

export default Home;
