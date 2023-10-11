import "./VideoItem.css";
import React from "react";

export default function VideoItem({ video, onVideoSelect }) {
  return (
    <div className="item video-item" onClick={() => onVideoSelect(video)}>
      <img className="ui image" src={video.snippet.thumbnails.medium.url} />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
}
