import React from "react";

class GenreSelector extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const options = this.props.genres.map((genre, index) => {
      return <option value={index} key={index}>{genre}</option>
    })
    return (
      <select id="genres" onChange={this.handleChange} value={this.state.selectedIndex}>
        {options}
      </select>
    )
  }

  handleChange(event) {
    const index = event.target.value
    this.setState({selectedIndex: index})
    const genre = this.props.genres[index];
    this.props.onSelectGenre(genre);
  }

}

export default GenreSelector;