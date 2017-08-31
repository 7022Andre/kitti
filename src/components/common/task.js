import React from 'react';
import '../../css/task.css';

export default (props) => {
 const src = process.env.PUBLIC_URL + props.task.display_src;
 const caption = props.task.caption;

  return (
    <figure className={props.store.active && props.store.caption === caption ? "grid-figure active" : "grid-figure"}>
      <button className="grid-button" onClick={() => props.handleChange(src, caption)}>
        <img className="grid-image" src={src} alt={caption}/>
      </button>
      <figcaption>
        <p>{caption}</p>
        <p>{props.store.active}</p>
      </figcaption>
    </figure>
  );
};
