import React, { Component } from 'react'

const styles = {
  width: '100%',
  height: '100%',
  minWidth: '100%',
  minHeight: '100%',
  backgroundColor: 'black'
}

class VideoTag extends Component {

  shouldComponentUpdate() {
    return false
  }

  render() {
    const { setVideoEl } = this.props

    return (
      <video controls={false} ref={setVideoEl} style={styles} />
    )
  }
}

export default VideoTag