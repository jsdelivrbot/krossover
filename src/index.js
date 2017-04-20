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
          _id: 'og',
          duration: [0, 52],
          url: 'http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4',
          controls: true,
          removable: false
        },
        {
          title: 'Clip 1',
          _id: '6-20',
          duration: [6, 20],
          url: 'http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4#t=6,20',
          controls: false,
          removable: true
        },
        {
          title: 'Clip 2',
          _id: '24-30',
          duration: [24, 30],
          url: 'http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4#t=24,30',
          controls: false,
          removable: true
        },
        {
          title: 'Clip 3',
          _id: '30-36',
          duration: [30, 36],
          url: 'http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4#t=30,36',
          controls: false,
          removable: true
        },
      ],
      selectedVideo:         {
        title: 'Original Video',
        _id: 'og',
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
    }
    const onVideoEdit =  selectedVideo => {
      console.log(selectedVideo)
      // return this.setState({selectedVideo})
    }
    const onVideoRemove =  selectedVideo => {

      return this.setState({videos: this.state.videos.filter((video)=>{return video._id !== selectedVideo }) })
    }
    const onUpdateClipping =  selectedVideo => {
      this.setState({selectedVideo: {
        title: selectedVideo.title,
        _id: `${selectedVideo.start}-${selectedVideo.end}`,
        duration: [selectedVideo.start, selectedVideo.end],
        url: `http://grochtdreis.de/fuer-jsfiddle/video/sintel_trailer-480.mp4#t=${selectedVideo.start},${selectedVideo.end}`,
        controls: false,
        removable: true
      }})

      return this.setState({videos: this.state.videos.filter((video)=>{return video._id !== selectedVideo }) })
    }
    const onCreateClipping =  selectedVideo => {
this.setState({videos: [...this.state.videos, selectedVideo]})

      // return this.setState({videos: this.state.videos.filter((video)=>{return video._id !== selectedVideo }) })
    }
    return(
      <div>
        <div className="row border" >
          <div className="no-padding col-lg-8 col-xs-12">
            <VideoPlayer video={this.state.selectedVideo}/>
            <VideoClipForm onUpdateClipping={onUpdateClipping} onCreateClipping={onCreateClipping} removable={this.state.selectedVideo.removable} duration={this.state.selectedVideo.duration} title={this.state.selectedVideo.title}/>
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
