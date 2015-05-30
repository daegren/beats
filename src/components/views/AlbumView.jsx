var React = require('react');

class AlbumView extends React.Component {
  static propTypes = { songs: React.PropTypes.array };

  constructor() {
    super();

    this._buildElements = this._buildElements.bind(this);
  }

  render() {
    return (
      <ul>
        {this._buildElements()}
      </ul>
    );
  }

  _buildElements() {
    return this.props.songs.map(function(song) {
      return <Album key={song.id} song={song} />;
    });
  }
}

class Album extends React.Component {
  static propTypes = { song: React.PropTypes.object };

  render() {
    var song = this.props.song;
    return (
      <div>
        <AlbumMeta meta={song.meta} />
      </div>
    );

  }
}

class AlbumMeta extends React.Component {
  static propTypes = { meta: React.PropTypes.object };

  render() {
    var meta = this.props.meta;

    return (
      <div>
        <div>{meta.album}</div>
        <div>{meta.title}</div>
        <div>{meta.artist}</div>
      </div>
    )
  }
}

module.exports = AlbumView;
