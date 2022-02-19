import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


export default function PostId() {
    const { id } = useParams()
    const [post, setPosts] = useState(null)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(result => result.json())
            .then(data => setPosts(data))
    }, [id])

    return (<div>
        {post && (
            <p>{post.body}</p>
        )}
    </div>)
}