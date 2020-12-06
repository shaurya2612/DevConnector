import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/post";
import Spinner from '../layout/Spinner'
import PostForm from "./PostForm";
import PostItem from "./PostItem";

export const Posts = () => {
  const dispatch = useDispatch();
  const { loading, posts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPosts());
  }, [getPosts]);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className="large text-primary">Posts</h1>
      <p>
        <i className="fas fa-user"></i> Welcome to the community
      </p>
      <PostForm/>
      <div className="posts">
        {posts.map((post) => (
          <PostItem key={post._id} post={post} showActions={true}/>
        ))}
      </div>
    </Fragment>
  );
};

export default Posts;
