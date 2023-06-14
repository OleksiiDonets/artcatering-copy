import styled from 'styled-components';
export const EmptyBgElement = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  z-index: -10;
  object-fit: cover;
  background-color: rgb(251 207 232);
`;
export const IframeVideoWrap = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: -10;
  object-fit: cover;
`;
export const VideoElement = styled.video`
  width: 100vw;
  height: 100vh;
  position: absolute;
  object-fit: cover;
  z-index: -10;
`;

export const ImageWrap = styled.div`
  display: flex;
  position: absolute;
  z-index: -10;
  img{
    width: 100vw;
  }
`;
