// @flow

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardLink = styled((Link: any))`
  position: relative;
  display: block;

  &:hover {
    .card-info {
      opacity: 1;
    }
  }
`;

const CardImage = styled.figure`
  position: relative;

  img {
    display: block;
  }
`;

const CardInfo = styled.section`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  color: white;
  padding: 15px;
  text-decoration: none;
  background: rgba(0, 0, 0, 0.25);
  transition: opacity 250ms ease-in-out;

  @media (min-width: 768px) {
    opacity: 0;
    background: rgba(0, 0, 0, 0.5);
  }
`;

const Card = (props: {
  id: string,
  title: string,
  description: string,
  country: string,
  photographer: string,
  handle: string
}) => {
  let hasDescription;
  if (props.description) {
    hasDescription = (<p>{props.description}</p>);
  }

  let hasCountry;
  if (props.country) {
    hasCountry = (<p>{props.country}</p>);
  }

  return (
    <CardLink to={`/details/${props.id}`}>
      <CardImage>
        <img src={`//images.unsplash.com/${props.id}`} alt={props.title} />
      </CardImage>
      <CardInfo>
        <h2>{props.title}</h2>
        {hasDescription}
        <p>by {props.photographer} <em>{props.handle}</em></p>
        {hasCountry}
      </CardInfo>
    </CardLink>
  )
}

export default Card;
