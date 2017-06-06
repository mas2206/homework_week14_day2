import React from "react";

class SongContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      selectedSong: null
    };
    this.setSelectedSong = this.setSelectedSong.bind(this);
    this.setSelectedGenre = this.setSelectedGenre.bind(this);
  }

  render() {
    return (
      <div>
        <h1>iTunes Top 10 songs by genre</h1>
        <GenreSelector />
        <SongSelector />
        <SongDetail />
      </div>
    );
  }

  componentDidMount() {
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=10/genre=" + number + "/explicit=true/json";
    const request = new XMLHttpRequest();
    request.open("GET", url);

    request.addEventListener("load", () => {
      if (request.status !== 200) return;

      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({songs: data, selectedSong: data[0]});
    });
    request.send();
  }

  setSelectedSong(song) {
    this.setState({selectedSong: song});
  }

  setSelectedGenre(genre) {
    this.setState({selectedGenre: genre});
  }

}

export default SongContainer;