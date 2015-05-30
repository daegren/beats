var React = require('react');

var LibraryStore = require('./stores/LibraryStore');
var AlbumView = require('./components/views/AlbumView.jsx');

class BeatsApp extends React.Component {
  constructor() {
    super();
    this._onLibraryChange = this._onLibraryChange.bind(this);
    this.state = { songs: LibraryStore.getSongs() };
  }

  render() {
    return (
      <div>
        <AlbumView songs={this.state.songs} />
      </div>
    );
  }

  componentDidMount() {
    LibraryStore.addChangeListener(this._onLibraryChange);
  }

  componentWillUnMount() {
    LibraryStore.removeChangeListener(this._onLibraryChange);
  }

  _onLibraryChange() {
    this.setState({
      songs: LibraryStore.getSongs()
    });
  }
}

module.exports = function(mountElement) {
  React.render(<BeatsApp />, mountElement);
};
