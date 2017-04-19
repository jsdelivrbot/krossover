import React from 'react';

const VideoClipForm = (videos) => {
  return (
    <form className="form-inline video_clip_form flex-center">
      <label className="sr-only" htmlFor="inlineFormInputGroup">Clip Name</label>
      <div className="input-group mb-2 mr-sm-2 mb-sm-0">
        <div className="input-group-addon">Clip Name</div>
        <input type="text" className="form-control"  type="text"/>
      </div>
      <label className="sr-only" htmlFor="inlineFormInputGroup">Start</label>
      <div className="input-group mb-2 mr-sm-2 mb-sm-0">
        <div className="input-group-addon">Start</div>
        <input type="text" className="form-control" value="6" type="number" placeholder="Start"/>
      </div>

      <label className="sr-only" htmlFor="inlineFormInputGroup">Finish</label>
      <div className="input-group mb-2 mr-sm-2 mb-sm-0">
        <div className="input-group-addon">Finish</div>
        <input type="text" className="form-control" value="20" type="number" placeholder="Finish"/>
      </div>

      <button type="submit" className="btn btn-primary">Add Clip</button>
    </form>
    );
  };

  export default VideoClipForm;
