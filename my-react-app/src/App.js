import React from 'react';
import ReactPageScroller from 'react-page-scroller';

function App() {
  const handlePageChange = (number) => {
    // do something when the page changes
  };

  return (
    <ReactPageScroller
      pageOnChange={handlePageChange}
      customPageNumber={3} // the number of pages you have
    >
      <div className="App">
        <header className="App-header">
          <p>
            <b>Artificial Intelligence and the Future of Work: A Positive Outlook</b>
          </p>
        </header>
      </div>
      <div className="App-intro">
        <header className="App-header">
          <p>
            Introduction
          </p>
        </header>
      </div>
      <div className="App-content">
        <header className="App-header">
          <p>
            What is AI?
          </p>
        </header>
      </div>
    </ReactPageScroller>
  );
}

export default App;
