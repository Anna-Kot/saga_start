import React, {useEffect} from "react";

function Post({post}) {
    useEffect(() => {
        console.log('Post Rendered');
    }, [])
    return <tr>
        <td>{post.userId}</td>
        <td>{post.id}</td>
        <td>{post.title}</td>
        <td>{post.body}</td>
    </tr>
}
export default Post;