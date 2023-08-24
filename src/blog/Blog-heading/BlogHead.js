import React from 'react';

const BlogHead = (Props) => {
    return (
        <div>
            <h2>Hey wanna to read {Props.heading} Blog and i am the {Props.author}</h2>
        </div>
    );
};

export default BlogHead;