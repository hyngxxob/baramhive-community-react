import React from 'react';

import homeController from '../../controller/hodong/home'

function Home() {
    const handleClick = () => {
        homeController.handleSubmit();
    };
  return (
    <div>
      <h1>Welcome to my homepage!</h1>
      <p>Here is some information about me.</p>
      <button onClick={handleClick}></button>
    </div>
  );
}

export default Home;