import React, { Component } from "react";
import "./App.css";

const imgArray = [
  [
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hbz-rihanna-0606-getty-1528381700.jpg",
    "info1"
  ],
  [
    "https://cdn.onebauer.media/one/lifestyle-images/galleries/59c90135142cbffc754f96f4/2015%20New%20York%20Sighting%202015%20Rihanna.jpg?quality=80&width=1000&ratio=1-1&resizeStyle=aspectfit&format=jpg",
    "info2"
  ],
  [
    "https://s1.r29static.com/bin/entry/5c7/0,0,2000,2400/720x864,85/2205175/image.webp",
    "info3"
  ],
  [
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rihanna-hosts-fenty-launch-on-may-22-2019-in-paris-france-news-photo-1151098876-1558618285.jpg",
    "info4"
  ],
  [
    "https://www.hauteacorn.com/wp/wp-content/uploads/2016/11/rihanna-fendi-fur-collar-480x668.jpg",
    "info5"
  ],
  [
    "https://cdn3-www.thefashionspot.com/assets/uploads/gallery/fashion-tips-we-can-learn-from-rihanna-this-year/09-rihanna.jpg",
    "info6"
  ],
  [
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hbz-rihanna-gallery2-1508509829.jpg",
    "info7"
  ],
  [
    "https://assets.vogue.com/photos/58910faf23f9887c0e0deba6/master/pass/00-holding1.jpg",
    "info8"
  ],
  [
    "https://www.telegraph.co.uk/content/dam/fashion/2018/04/16/TELEMMGLPICT000160570449_trans_NvBQzQNjv4BqEOImp4s5h5VhVdX0KdEE9H-xTsxAIxKIywfNFZ4vZy4.jpeg?imwidth=450",
    "info9"
  ]
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { imgInfo: "", clicked: false };
  }

  displayImgs = () => {
    return imgArray.map((outfit, i) => (
      <li>
        <img
          key={i}
          src={outfit[0]}
          onClick={this.handleClick}
          alt={outfit[1]}
        ></img>
      </li>
    ));
  };

  // displayInfo = () => {
  //   return imgArray.map((outfit, i) => (
  //     <li>
  //       <p> {outfit[1]} </p>
  //     </li>
  //   ));
  // };

  handleClick = evt => {
    console.log(evt.target.alt);
    this.setState({ clicked: !this.state.clicked, imgInfo: evt.target.alt });
  };

  render() {
    return (
      <div className="app-container">
        <header className="App-header">
          <h1>Fenty Fits</h1>
        </header>
        <div className="browse-fits">
          <ul className="front-img">{this.displayImgs()}</ul>
        </div>
        {/* <div className="info">
          <ul className="back-info">{this.displayInfo()}</ul>
        </div> */}
      </div>
    );
  }
}

export default App;
