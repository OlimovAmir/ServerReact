import React, { useEffect, useState } from 'react'
import styles from './Posts.module.css';

const BaseUrl = `/api/posts`;

function Posts() {
    const [allPost, setAllPost] = useState([]);

    const getPost = async () => {
        const options = {
            method: 'GET',
            headers: new Headers()
        }
        const result = await fetch(BaseUrl, options);
        if (result.ok) {
            const posts = await result.json();
            setAllPost(posts);
            return posts;
        }
        return [];
    }

    const AddPost = async () => {
        const headersFromUser = document.querySelector('#header').value;
        const textFromUser = document.querySelector('#text').value;

        const newPost = {
            header: headersFromUser,
            text: textFromUser
        }
        const headers = new Headers();
        headers.set('Content-Type', 'application/json');

        const options = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(newPost)
        }
        const result = await fetch(BaseUrl, options);
        if (result.ok) {
            const post = await result.json();
            allPost.push(post)
            setAllPost(allPost.slice());
        }
    }

    useEffect(() => {
        getPost();
    }, [])

    return (
        <div>
            <form>
                <p>Создание постов</p>
                <div style={{ margin: "10px" }}>
                    <input id='header' type="text" placeholder='Зоголовок поста' />
                </div>
                <div style={{ margin: "10px" }}>
                    <textarea id='text' />
                </div>
                <button onClick={() => AddPost()} type='button' style={{ color: "green", borderRadius: "10px" }}>Add Post</button>
            </form>
            <div>
                <h3>List posts</h3>
                <div className={styles.wrapper}>
                    {allPost.map(item => {
                        const postView = (
                            <div key={item.id} className={styles.wrapperItem}>
                                <h2>{item.id} {item.header}</h2>
                                <p> {item.text}</p>
                            </div>
                        );
                        return postView;
                    })}
                </div>

            </div>
        </div>

    )
}

export default Posts