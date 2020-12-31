import React from 'react';

const BlogPost = (props) => {
    const { title, description, author, authorImg, date } = props.blog;
    return (
        <div className='card shadow-sm'>
            <div className="card-header d-flex align-items-center">
                <img src={authorImg} width='60' alt="" className="mx-3" />
                <div>
                    <h6 className="text-info">{author}</h6>
                    <p className="m-0">{date}</p>
                </div>
            </div>
            <div className="card-body">
                <h5>{title}</h5>
                <p className='card-text mt-4 text-secondary '>{description}</p>
            </div>
        </div>
    );
};

export default BlogPost;