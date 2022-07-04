import "./App.css";
import React, { useEffect } from "react";

let statisticsArray = "";
let channelArray = "";
<<<<<<< Updated upstream
let channelName = "";
let channelImage = "";
let imageLoaded = false;
let Url = "";
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
      Url: "",
      imageLoaded: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  fetchChannel() {
    console.log(this.state.Url);
    Promise.all([
      fetch(`
         https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${this.state.Url}&key=${REACT_APP_API_KEY}`),
      fetch(`
         https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${this.state.Url}&key=${REACT_APP_API_KEY}`),
=======
let Url1 = "";
//Self-note : Add this api key to an .env file later
let REACT_APP_API_KEY = "AIzaSyBaDxT - XSmntC6WZ6gjdldRCKUPPTUmmuQ";
function App() {
  const [subscriberCount, setSubscriberCount] = React.useState("-");
  const [viewCount, setViewCount] = React.useState("-");
  const [videoCount, setVideoCount] = React.useState("-");
  const [channelName, setChannelName] = React.useState("");
  const [channelImage, setChannelImage] = React.useState("");
  const [Url, setUrl] = React.useState();
  const [imageLoaded, setImageLoaded] = React.useState(false);

  useEffect(() => {
    Promise.all([
      fetch(`
         https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${Url}&key=${REACT_APP_API_KEY}`),
      fetch(`
         https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${Url}&key=${REACT_APP_API_KEY}`),
>>>>>>> Stashed changes
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
  }, [Url]);

<<<<<<< Updated upstream
  componentDidUpdate() {
    this.fetchChannel();
  }

  handleChange(event) {
    Url = event.target.value;
  }

  handleClick() {
    this.setState({ Url });
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
          <div className="channelid_div">
            <input
              type="text"
              className="channel_input"
              placeholder="Enter Channel id"
              onChange={this.handleChange}
            />
            <button
              onClick={this.handleClick}
              className="submit_id button_active"
            >
              Submit
            </button>
          </div>

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
=======
  function handleChange(event) {
    Url1 = event.target.value;
  }

  const handleClick = () => {
    setUrl(Url1);
  };

  const updateViewCount = () => {
    setSubscriberCount(statisticsArray.items[0].statistics.subscriberCount);
    setViewCount(statisticsArray.items[0].statistics.viewCount);
    setVideoCount(statisticsArray.items[0].statistics.videoCount);
    setChannelName(channelArray.items[0].snippet.title);
    setChannelImage(channelArray.items[0].snippet.thumbnails.default.url);
    setImageLoaded(true);
  };

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
        <div className="channelid_div">
          <input
            type="text"
            className="channel_input"
            placeholder="Enter Channel id"
            onChange={handleChange}
          />
          <button onClick={handleClick} className="submit_id button_active">
            Submit
          </button>
        </div>

        <div className="channel_div">
          <h2>Channel : </h2>
          {imageLoaded ? (
            <img
              src={channelImage}
              alt=""
              width="40px"
              height="40px"
              className="channel_image"
            />
          ) : (
            <h1></h1>
          )}
          <h4>{channelName}</h4>
        </div>
        <div className="info_div">
          <div className="box">
            <h3>Subscriber Count</h3>
            <h3 className="information_text">{subscriberCount}</h3>
>>>>>>> Stashed changes
          </div>
          <div className="box">
            <h3>View Count</h3>
            <h3 className="information_text">{viewCount}</h3>
          </div>
<<<<<<< Updated upstream
          <div className="button_div">
            <button
              className={`${!Url ? "button_inactive" : "button_active"}`}
              onClick={() => this.updateViewCount()}
            >
              Get Statistic
            </button>
=======
          <div className="box">
            <h3>Video Count</h3>
            <h3 className="information_text">{videoCount}</h3>
>>>>>>> Stashed changes
          </div>
        </div>
        <div className="button_div">
          <button
            className={`${!Url ? "button_inactive" : "button_active"}`}
            onClick={() => updateViewCount()}
          >
            Get Statistic
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
