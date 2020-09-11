import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../Post/Post';
import Comment from '../Comment/Comment';
import authors from '../Author/Author';
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import SendIcon from "@material-ui/icons/Send";
import ShareIcon from "@material-ui/icons/Share";


const Details = () => {

  const [post, setPost] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      });
  }, []);

  const [comments, setComments] = useState([]);
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
      });
  }, []);

  //start css
  const style = {
    outline: "none",

    borderRadius: "30px",
    border: "1px solid lightgray",
    width: "100%",
    height: "40px",
    marginLeft: "10px",
    marginTop: "10px",
    paddingLeft: "20px",
  };
  const imgStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
  };
  const commentBox = {
    display: "flex",
    width: "100%",
    marginBottom: "50px",
  };
  const buttonStyle = {
    borderRadius: "25%",
    margin: "10px 10px 0 5px",
    height: "40px",
    color: "gray",
    border: "1px solid lightgray",
    padding: "1px 3px",
  };
  const socialIcons = {
    width: 600,
    display: "flex",
    justifyContent: "space-between",
  };

  return (
    <div className="container">
      <Post post={post}>
        <div style={socialIcons}>
          <div style={{ display: "flex" }}>
            <ThumbUpAltOutlinedIcon />
            <b style={{ marginLeft: "5px" }}>Like</b>
          </div>
          <div style={{ display: "flex" }}>
            <ChatBubbleOutlineIcon />
            <b style={{ marginLeft: "5px" }}>Comment</b>
          </div>
          <div style={{ display: "flex" }}>
            <ShareIcon />
            <b style={{ marginLeft: "5px" }}>Share</b>
          </div>
        </div>
      </Post>
      <div style={commentBox}>
        <img
          style={imgStyle}
          src="https://scontent.fcgp3-1.fna.fbcdn.net/v/t1.0-9/118213529_370801530579366_6663799292051925689_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=ECp2LTadINYAX8OmdZt&_nc_oc=AQlfL5oDuSdcdtqgrxq6TAcVOIMJus8Fr3p0aj51-9d1yYoryVh_AmFcbXH1iINKYKE&_nc_ht=scontent.fcgp3-1.fna&oh=ada6180212298dc38a56221532790844&oe=5F7F033C"
          alt="Tonmoy"
        />
        <input placeholder={`Write a comment...`} style={style}></input>{" "}
        <SendIcon style={buttonStyle} fontSize="large" />
      </div>

      {comments.map((comment, i) => {
        const author = authors[Math.floor(Math.random() * authors.length)];
        return (
          <Comment key={comment.id} comment={comment} author={author}></Comment>
        );
      })}
      
    </div>
  );
};

export default Details;