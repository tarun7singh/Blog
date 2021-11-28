import axios from 'axios';
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from 'react-router-dom';

function Post() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [postContent, setPostContent] = useState({})
    const [userDetails, setUserDetails] = useState({})

    // get post details from the server
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => {
            setPostContent(res.data)
        })
    }, [id]);

    // get author/user details from the server
    useEffect(() => {
        if (postContent.userId) {
            axios.get(`https://jsonplaceholder.typicode.com/users/${postContent.userId}`).then(res => {
                setUserDetails(res.data)
            })
        }
    }, [postContent.userId]);

    return (
        <div>
            <button className="button" onClick={() => navigate("/")}>Back</button>
            <h2>
                {postContent.title}
            </h2>
            <h3 align="right">
                By {userDetails.name}
            </h3>
            <p>{postContent.body}</p>
        </div>
    );
}

export default Post;