import React from 'react';

class VideoClipForm extends React.Component {
  constructor(props) {
    super(props);
    const {title, duration, removable} = props;
    this.state = { title, start: duration[0], end: duration[1], removable};
  }
  componentWillReceiveProps({title, duration, removable}){
    this.setState({title, start: duration[0], end: duration[1], removable});
  }
  render(){
    // Create new clip
    if (this.state.removable) {
      return (
        <form className="form-inline video_clip_form row col-xs-12">
          <div className="input-group mb-2 mr-sm-2 mb-sm-0 col-xs-5">
            <div className="input-group-addon">Clip Name</div>
            <input type="text" onChange={(e)=>{this.setState({title: e.target.value})}} value={this.state.title} className="form-control"  type="text"/>
          </div>
          <div className="input-group mb-2 mr-sm-2 mb-sm-0 col-xs-2">
            <div className="input-group-addon">Start</div>
            <input type="text" onChange={(e)=>{this.setState({start: e.target.value})}} className="form-control" value={this.state.start} type="number" placeholder="Start"/>
          </div>

          <div className="input-group mb-2 mr-sm-2 mb-sm-0 col-xs-2">
            <div className="input-group-addon">End</div>
            <input type="text" onChange={(e)=>{this.setState({end: e.target.value})}} className="form-control" value={this.state.end} type="number" placeholder="Finish"/>
          </div>
          <button type="submit" onClick={()=>{ console.log(this.state.title, this.state.start, this.state.end)}} className="btn btn-success col-xs-3">Update Clipping</button>
        </form>
      );
    }
    // update clip
    return (
      <form className="form-inline video_clip_form row col-xs-12">
        <div className="input-group mb-2 mr-sm-2 mb-sm-0 col-xs-5">
          <div className="input-group-addon">Clip Name</div>
          <input type="text" onChange={(e)=>{this.setState({title: e.target.value})}} value={this.state.title} className="form-control"  type="text"/>
        </div>
        <div className="input-group mb-2 mr-sm-2 mb-sm-0 col-xs-2">
          <div className="input-group-addon">Start</div>
          <input type="text" onChange={(e)=>{this.setState({start: e.target.value})}} className="form-control" value={this.state.start} min="0" max="52" type="number" placeholder="Start"/>
        </div>

        <div className="input-group mb-2 mr-sm-2 mb-sm-0 col-xs-2">
          <div className="input-group-addon">End</div>
          <input type="text" onChange={(e)=>{this.setState({end: e.target.value})}} className="form-control" value={this.state.end} min="0" max="52" type="number" placeholder="Finish"/>
        </div>
        <button type="submit" onClick={()=>{ console.log(this.state.title, this.state.start, this.state.end)}} className="btn btn-primary col-xs-3">Create Clipping</button>
      </form>
    );
  };
}
export default VideoClipForm;
