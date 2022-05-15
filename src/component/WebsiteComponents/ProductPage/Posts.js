import React, { useEffect, useState } from "react";
import "../../css/Posts.css";
import "../../css/Productpage.css";
import { useStateVal } from "../PropStore/ContextState";
import { dbase } from "../LoginPage/firebase";
import moment from "moment";
import { Link } from "react-router-dom";

function Posts(id) {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [state, dispatch] = useStateVal();
  const [status, setStatus] = useState(true);
  var current = Date();
  const [posts, setPosts] = useState([]);
  //   async function addDB() {
  //     const test = dbase.collections("productPosts").collections(id).set({
  //         author: name,
  //         review: review,
  //       });
  //     return test
  //   }

  const addPost = (e) => {
    e.preventDefault();

    // dbase.collections("productPost").collections(id).onSnapShot((snapshot));
    // dbase
    //   .collection("productPostss")
    //   .doc(id)
    //   .collection("posts")
    //   .doc(state.userN?.uid)
    //   .set({
    //     author: name,
    //     review: review,
    //   });
    dbase
      .collection("productPosts")
      .doc(id.id)
      .collection("post")
      .doc(state.user?.uid)
      .set({
        author: name,
        review: review,
        created: Date.parse(current.toLocaleString()),
      });
    setPosts([
      ...posts,
      {
        id: posts.length,
        name: name,
        review: review,
        url: window.location.href,
      },
    ]);
    setName("");
    setReview("");
  };
  useEffect(() => {
    dbase
      .collection("productPosts")
      .doc(id.id)
      .collection("post")
      .orderBy("created")
      .onSnapshot((snapshot) => {
        return setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);
  return (
    <div>
      <div className="divider__productPage"></div>
      {posts.length > 0 ? (
        posts.map((post) => (
          //{window.location.href === post.url &&
          <>
            <div className="productpage__userReview">
              <div>
                <strong>
                  {post.data?.author +
                    " time posted:  " +
                    Date(post.data?.created).toString().split(" ", 5).join(" ")}
                </strong>
              </div>
              <div>{post.data?.review}</div>
            </div>
            <div className="divider__productPage"></div>
          </>
        ))
      ) : (
        <></>
      )}

      <div className="create">
        <h2> Leave a Review </h2>
        <form>
          <label> Author </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label> Review </label>
          <input
            type="text"
            required
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
          <span>
            {state.userN ? (
              <button
                onClick={addPost}
                disabled={!name || !review}
                className={!name || !review ? "disabled" : "active"}
                // className="disabled"
              >
                Post{" "}
              </button>
            ) : (
              <>
                <Link to="/login">
                  <button>Login </button>
                </Link>
              </>
            )}
          </span>
        </form>
      </div>
    </div>
  );
}

export default Posts;
