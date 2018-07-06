// @flow

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BackLink = styled((Link: any))`
  position: relative;
  display: inline-block;
  padding-top: .5em;
  padding-bottom: .5em;
  margin-top: .5em;
  margin-bottom: .5em;
  color: inherit;
  text-decoration: none;

  &:before {
    content: "\00ab";
    position: relative;
    display: inline-block;
    margin-right: .25em;
    transition: all 250ms ease-in-out;
  }

  &:hover {
    &:before {
      transform: translateX(-5px);
    }
  }
`;

const Detail = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 20px;
  padding-bottom: 50px;
  margin-right: -15px;
  margin-left: -15px;
`;

const DetailImage = styled.figure`
  flex-basis: calc(200% / 3);
  flex-grow: 1;
  padding-right: 15px;
  padding-left: 15px;

  img {
    display: block;
  }
`;

const DetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-basis: 300px;
  flex-grow: 1;
  padding: 30px 15px;

  h2 {
    margin-top: 0;
  }

  p {
    margin-top: 0;
  }
`;

const Details = (props: { image: Image }) => (
  <div>
    <BackLink to="/">Back to Home</BackLink>
    <Detail>
      <DetailImage>
        <img src={`//images.unsplash.com/${props.image.id}`} alt={props.image.title} />
      </DetailImage>
      <DetailInfo>
        <h2>{props.image.title}</h2>
        <p>by {props.image.photographer} <em>{props.image.handle}</em></p>
        <p>{props.image.description}</p>
        <p>{props.image.country}</p>
      </DetailInfo>
    </Detail>
  </div>
);


export default Details;
