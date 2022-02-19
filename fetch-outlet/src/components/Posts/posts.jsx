import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './posts.css'

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(result => result.json())
            .then(data => setPosts(data))
    }, [])

    return (<div className='container'>
        <div className='posts'>
            <h1>Our posts</h1>
            {
                posts.map(post => {
                    return (
                        <Link key={post.id} to={`/posts/${post.id}`}>
                            <div className='title-container'>{post.title}</div>
                        </Link>
                    )
                })
            }
           </div> 
            <div className='comments'>
                <Outlet />
            </div>
    </div>
    )
}