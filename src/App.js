import React, { createContext, useContext } from 'react';
import './App.css';

const PostContext = createContext(null);

const DATA = [
  {
    title: 'Post 1',
    content: 'Content 1',
  },
  {
    title: 'Post 2',
    content: 'Content 2',
  },
  {
    title: 'Post 3',
    content: 'Content 3',
  },
];

const Posts = () => {
  const postContext = useContext(PostContext);

  return (
    <div className='posts'>
      {postContext.map((post) => {
        return (
          <div key={post.title} className='post'>
            <h4>{post.title}</h4>
            <p>{post.content}</p>
          </div>
        );
      })}
    </div>
  );
};

const Feed = (props) => {
  return (
    <main>
      <h3>Feed</h3>
      <p className='welcome'>Welcome back user, here some posts that you might be interested</p>
      <div className='ads'>Some ads</div>
      {props.children}
    </main>
  );
};

function App() {
  return (
    <PostContext.Provider value={DATA}>
      <div className='App'>
        <h2>useContext Example</h2>
        <Feed>
          <Posts />
        </Feed>
      </div>
    </PostContext.Provider>
  );
}

export default App;
