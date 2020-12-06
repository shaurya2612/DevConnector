import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPost } from '../../actions/post';
import Spinner from '../layout/Spinner';
import PostItem from '../posts/PostItem';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';

export const Post = ({match}) => {
    const {post, loading} = useSelector(state => state.post);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPost(match.params.id))
    },[getPost])

    return loading || post == null ? <Spinner/> : <Fragment>
        <Link to="/posts" className="btn">Go back</Link>
        <PostItem post={post} showActions ={false}/>
        <CommentForm postId = {post._id}/>
        <div className="comments">
            {post.comments.map(comment => (
                <CommentItem key={comment._id} comment={comment} postId={post._id}/>
            ))}
        </div>
    </Fragment>
}

export default Post;