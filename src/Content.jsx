import React from 'react';

function Content() {

  let name = 'Initial';

  const clickButtonHandler = (value) => {
    console.log('Clicked! ' + name);
  };

  const inputHandler = (e) => {
    name = e.target.value;
    console.log(e.target.value);
  };

  return (
    <main>
      <div className="container">
        <h1>First app</h1>
        {name}
        <input type="text" onChange={inputHandler} />

        <button onClick={() => clickButtonHandler(1)}>Add one</button>
        <button onClick={() => clickButtonHandler(2)}>Add two</button>

      </div>
    </main>
  );
}

export default Content;
