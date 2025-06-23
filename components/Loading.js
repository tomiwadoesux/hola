// components/Loading.js
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Loading = () => (
  <div style={{
    position: 'fixed',
    inset: 0,
    background: '#fff',
    zIndex: 9999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }}>
    <DotLottieReact
      src="https://lottie.host/1c47b69a-606a-4b6a-9a36-e54cff21d1c9/ZSasg80CGv.lottie"
      loop
      autoplay
      style={{ width: 200, height: 200 }}
    />
  </div>
);

export default Loading;
