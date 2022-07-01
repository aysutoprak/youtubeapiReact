import "./App.css";
import React from "react";

let subscriberCount = "";
let viewCount = "";
let videoCount = "";
let statisticsArray = "";
let channelArray = "";
let channelName = "";
let channelImage = "";
let imageLoaded = false;
let CHANNEL_ID = "UCcjSKYD5nqlqhlUKsRvIaWA";
//Self-note : Add this api key to an .env file later
let REACT_APP_API_KEY = "AIzaSyBaDxT - XSmntC6WZ6gjdldRCKUPPTUmmuQ";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      subscriberCount: "-",
      viewCount: "-",
      videoCount: "-",
      channelName: "",
      channelImage: "",
      imageLoaded: false,
    };
  }

  fetchChannel() {
    Promise.all([
      fetch(`
         https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${REACT_APP_API_KEY}`),
      fetch(`
         https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${CHANNEL_ID}&key=${REACT_APP_API_KEY}`),
    ])
      .then(function (responses) {
        // Get a JSON object from each of the responses
        return Promise.all(
          responses.map(function (response) {
            return response.json();
          })
        );
      })
      .then(function (data) {
        statisticsArray = data[0];
        channelArray = data[1];
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount() {
    this.fetchChannel();
  }

  updateViewCount() {
    this.fetchChannel();
    subscriberCount = statisticsArray.items[0].statistics.subscriberCount;
    viewCount = statisticsArray.items[0].statistics.viewCount;
    videoCount = statisticsArray.items[0].statistics.videoCount;
    channelName = channelArray.items[0].snippet.title;
    channelImage = channelArray.items[0].snippet.thumbnails.default.url;
    imageLoaded = true;
    this.setState({
      subscriberCount,
      viewCount,
      videoCount,
      channelName,
      channelImage,
      imageLoaded,
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <img
            src="https://www.interstellarrift.com/wiki/images/d/d8/Youtube-logo-png-photo-0.png"
            width="200px"
            height="200px"
            alt=""
            className="yt_logo"
          ></img>
          <h1>Youtube API</h1>
          <div className="channel_div">
            <h2>Channel : </h2>
            {this.state.imageLoaded ? (
              <img
                src={this.state.channelImage}
                alt=""
                width="40px"
                height="40px"
                className="channel_image"
              />
            ) : (
              <h1></h1>
            )}
            <h4>{this.state.channelName}</h4>
          </div>
          <div className="info_div">
            <div className="box">
              <h3>Subscriber Count</h3>
              <h3 className="information_text">{this.state.subscriberCount}</h3>
            </div>
            <div className="box">
              <h3>View Count</h3>
              <h3 className="information_text">{this.state.viewCount}</h3>
            </div>
            <div className="box">
              <h3>Video Count</h3>
              <h3 className="information_text">{this.state.videoCount}</h3>
            </div>
          </div>
          <div className="button_div">
            <button onClick={() => this.updateViewCount()}>
              Get Statistic
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
