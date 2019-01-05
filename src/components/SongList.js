import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              //the song parameter on the onClick is being taken from the map we do above
              onClick={() => {
                this.props.selectSong(song);
              }}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

//Anytime the store is updated, this function will run. Good place to cl to see if changes catch
const mapStateToProps = state => {
  return { songs: state.songs };
};

//the second parameter selectSong is being taken from the imported action.
//The connect function automatically handles the dispatch for us (remember the code pen example)
export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);
