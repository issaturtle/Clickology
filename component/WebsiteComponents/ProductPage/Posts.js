/* import React, {useEffect, useState} from 'react';
import "../../css/Posts.css";
import "../../css/Productpage.css";
function Posts(){
    const [name, setName] = useState('');
    const [review, setReview] = useState('');

    const [posts, setPosts] = useState([{
        id: 0,
        name: "Austin",
        review: "This is great",
        url: "http://localhost:3000/product/1"
    }]);
    
    const addPost = () => {
        setPosts([...posts, {
            id: posts.length,
            name: name,
            review: review,
            url: window.location.href
        }])
    }

    return(
        <div>
            <div className="divider__productPage"></div>
            {posts.map(post => (
                {window.location.href === post.url &&
                <>
                <div className="productpage__userReview">
                  <div>
                    <strong>{post.name}</strong>
                  </div>
                  <div>{post.review}</div>
                </div>
                <div className="divider__productPage"></div>
              </>
                )))};
            <div className = "create">
            <h2> Leave a Review </h2>
                <form >
                <label> Author </label>
                <input
                    type="text"
                    required
                    value = {name}
                    onChange = {(e) => setName(e.target.value)}
                /> 
                <label> Review </label> 
                <input
                    type="text"
                    required
                    value = {review}
                    onChange = {(e) => setReview(e.target.value)}
                /> 

                <button onClick = {addPost} >
                Post </button>
                </form>
            </div>
        </div>    
    )
}

export default Posts; */
