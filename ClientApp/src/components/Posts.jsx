import React, { useEffect, useState } from 'react'

function Posts() {
    const [allPost, setAllPost] = useState([]);

    const getPost = async () => {
        const options = {
            method: 'GET'
        }
        const result = await fetch('/api/posts', options);
        if (result.ok) {
            const posts = await result.json();
            setAllPost(posts);
            return posts;
        }
        return [];
    }

    useEffect( ()=>{
        getPost();
    }, [] )

    return (
        <div>
            <form>
                <p>Создание постов</p>
                <div style={{ margin: "10px" }}>
                    <input type="text" placeholder='Зоголовок поста' />
                </div>
                <div style={{ margin: "10px" }}>
                    <textarea />
                </div>
                <button type='button' style={{ color: "green", borderRadius: "10px" }}>Add Post</button>
            </form>
            <div>
            <h3>List posts</h3>


            </div>
        </div>

    )
}

export default Posts