import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import logo from './user_logo.png';
import backgroungImage from './user_background.png';

const AvatarWrapper = styled.div`
  position: relative;
  height: 222px;
  padding: 28px 36px 18px 36px;

  ::after {
    content: ' ';
    display: inline-block;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 8px;
    width: 100%;
    background-color: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

const BackgroundImage = styled.div`
  height: 168px;
  background-image: url(${backgroungImage});
  background-repeat: no-repeat;
  background-size: contain;
`;

const LogoImage = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 76px;
  height: 22px;
`;

const Avatar = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  bottom: -36px;
  left: 150px;
  background-color: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;

const AvatarImage = styled.img`
  background-color: #ebd8ff;
  width: 62px;
  height: 62px;
  border-radius: 50%;
`;

const ContentWrapper = styled.div`
  padding: 62px 83px 36px;
`;

const TextInsert = styled.p`
  font-family: 'Medium';
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;

  color: #ebd8ff;

  &:not(:last-of-type) {
    margin-bottom: 16px;
  }
  &:last-of-type {
    margin-bottom: 26px;
  }
`;

const Button = styled.button`
  width: 196px;
  height: 50px;
  padding: 14px 28px;
  font-family: 'SemiBold';
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;

  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: #373737;

  &:hover,
  &:focus {
    cursor: pointer;
  }

  &.active {
    background-color: #5cd3a8;
  }
`;

export default function Card({ id, tweets, avatar, initialFollowers }) {
  const [isFollow, setIsFollow] = useState(false);
  const [followCount, setFollowCount] = useState(initialFollowers);

  useEffect(() => {
    localStorage.setItem(`${id}`, followCount.toString());
  }, [followCount, id]);

  const onButtonClick = async () => {
    setIsFollow(!isFollow);

    if (followCount === initialFollowers) {
      setFollowCount(prevState => prevState + 1);
    } else {
      setFollowCount(prevState => prevState - 1);
    }

    localStorage.setItem(`${id}`, !isFollow);
  };

  const getFollowers = followers => {
    if (followers > 999) {
      return (
        followers.toString().slice(0, -3) + ',' + followers.toString().slice(-3)
      );
    }

    return followers;
  };

  const getButtonStatus = followers =>
    followers === initialFollowers ? 'follow' : 'following';

  const counter = getButtonStatus(followCount);

  return (
    <>
      <AvatarWrapper>
        <BackgroundImage />
        <LogoImage src={logo} alt="logo" />
        <Avatar>
          <AvatarImage
            src={avatar}
            alt="avatar"
            width="62px"
            height="62px"
          ></AvatarImage>
        </Avatar>
      </AvatarWrapper>
      <ContentWrapper>
        <TextInsert>{tweets} tweets</TextInsert>
        <TextInsert>{getFollowers(followCount)} followers</TextInsert>
        <Button
          onClick={onButtonClick}
          className={counter === 'follow' ? '' : 'active'}
        >
          {counter}
        </Button>
      </ContentWrapper>
    </>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  initialFollowers: PropTypes.number.isRequired,
};
