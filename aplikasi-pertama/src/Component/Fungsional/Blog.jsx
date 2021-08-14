import React from 'react';

import BlogStyle from './CSS/blog-style.css';
const Blog = (props) => {
    return <div style={BlogStyle} className="blog-wrap">
        <img src="https://placeimg.com/640/480/tech" alt="" />
        <p>{props.tanggal}</p>
        <p>{props.judul}</p>
        <p>{props.summary}</p>
    </div>
}

export default Blog;