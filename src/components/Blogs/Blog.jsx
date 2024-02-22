import React, { useEffect, useState } from 'react';

const Blog = () => {
    const [blog, setBlog] = useState([]);

    useEffect(()=>{
        fetch('block.json')
        .then(res => res.json())
        .then(data => setBlog(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Blog;