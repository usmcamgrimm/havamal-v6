import React from 'react';
import { LiteYoutubeEmbed } from 'react-lite-yt-embed'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

const VideoContainer = styled.div`
  overflow: hidden;
  position: relative;
  width: 60%;
  margin-bottom: 2rem;
  ::after {
    padding-top: 56.25%;
    display: block;
    content: '';
  }
  @media screen and (min-width: 1025px) {
    width: 60%;
  }
  @media screen and (max-width: 1024px) {
    width: 80%;
  } 
`;

export default function HavamalVideo ({ videoId, imgAltText, iframeTitle }) {
  return (
    <VideoContainer>
      <LiteYoutubeEmbed
        id={videoId}
        imgAltText={imgAltText}
        iframeTitle={iframeTitle}
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        `}
      />
    </VideoContainer>
  )
}