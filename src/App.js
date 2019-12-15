import React, { useState } from 'react';

const App = () => {
  const [selected, setSelected] = useState(0);
  const handleClick = () => {
    let random = Math.floor(Math.random() * (quotes.length));
    setSelected(random)
  }

  const quotes = [
    '“One can never have enough socks," said Dumbledore. "Another Christmas has come and gone and I didn\'t get a single pair. People will insist on giving me books.”',
    '“Then the Grinch thought of something he hadn\'t before! What if Christmas, he thought, doesn\'t come from a store. What if Christmas...perhaps...means a little bit more!”',
    '“The main reason Santa is so jolly is because he knows where all the bad girls live.”',
    '“Mistletoe," said Luna dreamily, pointing at a large clump of white berries placed almost over Harry\'s head. He jumped out from under it.\n',
    '"Good thinking," said Luna seriously. "It\'s often infested with nargles.”',
    '“I will honor Christmas in my heart, and try to keep it all the year.”',
    '“He who has not Christmas in his heart will never find it under a tree.”'
  ]


  return (
    <div className="flex content-center flex-col items-center pt-10">
    <div className="App max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src="https://source.unsplash.com/1600x900/?christmas" alt="Sunset in the mountains"/>
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">
        {quotes[selected]}
        </p>
      <button
          className="bg-gray-300 m-6 hover:bg-indigo-400 text-indigo-800 font-bold py-2 px-4 rounded-l outline-none focus-none"
          onClick={handleClick}>Next</button>
      </div>
    </div>
    </div>
  );
}

export default App;
