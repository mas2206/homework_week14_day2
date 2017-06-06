import React from "react";

class SongDetail extends React.Component {

  render() {
    if (this.props.song === null) return null;

    return (
      <div className="song-details">
        <p>Title: {this.props.song["im:name"].label}</p>
        <p>Artist: {this.props.song["im:artist"].label}</p>
      </div>
    )
  }

}

export default SongDetail;