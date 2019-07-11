import React, { Component } from 'react';
import './App.css';

class App extends Component {
  importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
  render() {
    const imagesObj = this.importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));
    return (
      <div className="App">
        <h1>Back to React baby!</h1>
        {console.log("comment")}
        {Object.values(imagesObj).map(imageSrc => {
          return (
            <img key={imageSrc} src={imageSrc} alt=""></img>
          );
        })}
      </div>
    );
  }
}

export default App;
