import React, {Component} from 'react';
import ReactDom from 'react-dom';
import VideoList from './components/video_list';
import VideoPlayer from './components/video_player';
import VideoClipForm from './components/video_clip_form';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      videos: [
        {
          title: 'Original Video',
          _id: 0,
          duration: [0, 52],
          url: 'http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4',
          controls: true,
          removable: false
        }
      ],
      selectedVideo:         {
        title: 'Original Video',
        _id: 1,
        duration: [0, 52],
        url: 'http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4',
        controls: true,
        removable: false
      }
    }
  }
  render() {

    const onVideoSelect =  selectedVideo => {
      console.log(selectedVideo)
      return this.setState({selectedVideo})
    };

    const onVideoEdit =  selectedVideo => {
      console.log(selectedVideo)
      // return this.setState({selectedVideo})
    };

    const onVideoRemove =  selectedVideo => {

      return this.setState({videos: this.state.videos.filter((video)=>{return video._id !== selectedVideo }) })
    };

    const onUpdateClipping =  selectedVideo => {
      const UpdatedVideo = {
        title: selectedVideo.title,
        _id: selectedVideo._id,
        duration: [selectedVideo.start, selectedVideo.end],
        url: `http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4#t=${selectedVideo.start},${selectedVideo.end}`,
        controls: false,
        removable: true

    };
    let newVideos = [...this.state.videos];
    newVideos.splice(selectedVideo._id, 1, UpdatedVideo);
      this.setState({selectedVideo: UpdatedVideo})
//       console.log(selectedVideo._id, ...this.state.videos, UpdatedVideo);
// console.log(.splice(2, 1, UpdatedVideo))
      this.setState({videos: newVideos})
    };

    const onCreateClipping =  selectedVideo => {
      this.setState({videos: [...this.state.videos, selectedVideo]})

      // return this.setState({videos: this.state.videos.filter((video)=>{return video._id !== selectedVideo }) })
    }
    return(
      <div>
        <div className="row border" >
          <div className="no-padding col-lg-8 col-xs-12">
            <VideoPlayer video={this.state.selectedVideo}/>
            <VideoClipForm onUpdateClipping={onUpdateClipping} onCreateClipping={onCreateClipping} _id={this.state.selectedVideo._id} removable={this.state.selectedVideo.removable} duration={this.state.selectedVideo.duration} title={this.state.selectedVideo.title}/>
          </div>

          <VideoList
            onVideoSelect={onVideoSelect}
            onVideoEdit={onVideoEdit}
            onVideoRemove={onVideoRemove}
            videos={this.state.videos}/>
          </div>
        </div>
      );
    }
  }

  ReactDom.render(<App/>, document.querySelector( '.container'));
