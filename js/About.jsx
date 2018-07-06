import React from 'react';
import styled from 'styled-components';

const Profile = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-right: -15px;
  margin-left: -15px;
`;

const ProfileImage = styled.figure`
  flex-basis: 280px;
  flex-grow: 0;
  min-width: 280px;
  padding-right: 15px;
  padding-left: 15px;

  img {
    border-radius: 50%;
  }
`;

const ProfileBody = styled.div`
  flex-basis: 300px;
  flex-grow: 1;
  min-width: 280px;
  padding-right: 15px;
  padding-left: 15px;
`;

const About = () => (
  <main>
    <Profile>
      <ProfileImage>
        <img src="./public/img/random-user_imageF36.jpg" alt="random user" />
      </ProfileImage>
      <ProfileBody>
        <h1>About me</h1>
        <hr />
        <h2>Mary Wood</h2>
        <p><strong>Photographer</strong></p>
        <p>Originally from Miami. I love black and white classics, chillout music and green tea.</p>
      </ProfileBody>
    </Profile>
  </main>
);

export default About;
