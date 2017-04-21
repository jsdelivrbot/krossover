import React from 'react';

class VideoClipForm extends React.Component {
  constructor (props) {
    super(props);
    const {title, duration, removable, onUpdateClipping, onCreateClipping, _id} = props;
    this.state = { title, start: duration[0], end: duration[1], removable, _id};
    [this.onCreateClipping, this.onUpdateClipping] = [onCreateClipping, onUpdateClipping];
  }
  componentWillReceiveProps ({title, duration, removable, _id}) {
    this.setState({title, start: duration[0], end: duration[1], removable, _id});
  }
  render () {
    // update clip
    if (this.state.removable) {
      return (
        <form className='form-inline video_clip_form row col-xs-12'>
          <div className='input-group mb-2 mr-sm-2 mb-sm-0 col-xs-5'>
            <div className='input-group-addon'>Clip Name</div>
            <input type='text' onChange={(e) => { this.setState({title: e.target.value}); }} value={this.state.title} className='form-control no-border-radius-right no-border-right' type='text' />
          </div>
          <div className='input-group mb-2 mr-sm-2 mb-sm-0 col-xs-2'>
            <div className='input-group-addon no-border-radius-left'>Start</div>
            <input type='text' onChange={(e) => { this.setState({start: e.target.value}); }} className='form-control no-border-radius-right no-border-right' value={this.state.start} min='0' max='52' type='number' placeholder='Start' />
          </div>

          <div className='input-group mb-2 mr-sm-2 mb-sm-0 col-xs-2'>
            <div className='input-group-addon no-border-radius-left'>End</div>
            <input type='text' onChange={(e) => { this.setState({end: e.target.value}); }} className='form-control no-border-radius-right no-border-right' value={this.state.end} min='0' max='52' type='number' placeholder='Finish' />
          </div>
          <button type='submit' onClick={(e) => {
            e.preventDefault();
            this.onUpdateClipping({
              title: this.state.title,
              start: this.state.start,
              end: this.state.end,
              _id: this.state._id
            });
          }} className='btn btn-success col-xs-3 no-border-radius-left'>Update Clipping</button>
        </form>
      );
    }
      // Create new clip
    return (
      <form className='form-inline video_clip_form row col-xs-12'>
        <div className='input-group mb-2 mr-sm-2 mb-sm-0 col-xs-5'>
          <div className='input-group-addon'>Clip Name</div>
          <input type='text' onChange={(e) => { this.setState({title: e.target.value}); }} placeholder='Add a name...' className='form-control no-border-radius-right no-border-right' type='text' />
        </div>
        <div className='input-group mb-2 mr-sm-2 mb-sm-0 col-xs-2'>
          <div className='input-group-addon no-border-radius-left'>Start</div>
          <input type='text' onChange={(e) => { this.setState({start: e.target.value}); }} className='form-control no-border-radius-right no-border-right' value={this.state.start} min='0' max='52' type='number' placeholder='Start' />
        </div>

        <div className='input-group mb-2 mr-sm-2 mb-sm-0 col-xs-2'>
          <div className='input-group-addon no-border-radius-left'>End</div>
          <input type='text' onChange={(e) => { this.setState({end: e.target.value}); }} className='form-control no-border-radius-right no-border-right' value={this.state.end} min='0' max='52' type='number' placeholder='Finish' />
        </div>
        <button type='submit' onClick={(e) => {
          e.preventDefault();
          this.onCreateClipping({
            title: this.state.title,
            start: this.state.start,
            end: this.state.end
          });
        }} className='btn btn-primary col-xs-3 no-border-radius-left'>Create Clipping</button>
      </form>
    );
  }
    }
export default VideoClipForm;
