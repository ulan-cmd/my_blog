import React, {useEffect} from 'react';
import Header from './components/header';
import BlogEntries from './components/blogEntries';
import IntroductionMenu from './components/introductionMenu';
import Footer from './components/footer';

const divStyle = {
  maxWidth: "1400px"
}

const App = () => {
  return (
    <>
      <div className="w3-content" style={divStyle}>
        <Header/>
        <div className='w3-row'>
          <BlogEntries/>
          <IntroductionMenu/>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default App;
