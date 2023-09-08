import styled from '@emotion/styled'
import React from 'react'

const BlobAnimation = () => {
  return (
    <Root>
      <div className="root">
        <div className="blob blob_1 animation-delay-2000"></div>
        <div className="blob blob_2 animation-delay-2000"></div>
        <div className="blob blob_3 animation-delay-4000"></div>
      </div>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  .root {
    position: relative;
    width: 100%;
    max-width: 32rem;
  }
  .blob {
    animation: blob 10s infinite;

    @keyframes blob {
      0% {
        transform: translate(0, 0) scale(1);
      }
      25% {
        transform: translate(20px, -50px) scale(1.1);
      }
      50% {
        transform: translate(0, 20px) scale(1);
      }
      75% {
        transform: translate(-20px, -15px) scale(0.9);
      }
      to {
        transform: translate(0, 0) scale(1);
      }
    }
    position: absolute;
    width: 18rem;
    height: 18rem;
  }
  .animation-delay-2000 {
    animation-delay: 1s;
  }
  .animation-delay-4000 {
    animation-delay: 2s;
  }
  .blob_1 {
    background: rgba(196, 181, 253, 1);
    position: absolute;
    top: 0;
    left: -1rem;
    border-radius: 50%;
    opacity: 0.5;
    mix-blend-mode: multiply;
    filter: blur(24px);
  }
  .blob_2 {
    background: rgba(252, 211, 77, 1);
    top: 0;
    right: -1rem;
    border-radius: 50%;
    opacity: 0.5;
    mix-blend-mode: multiply;
    filter: blur(24px);
  }
  .blob_3 {
    background: rgba(249, 168, 212, 1);
    bottom: -2rem;
    left: 7rem;
    border-radius: 50%;
    opacity: 0.5;
    mix-blend-mode: multiply;
    filter: blur(24px);
  }
`

export default BlobAnimation
