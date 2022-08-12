import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { deleteReadListPost, removeSinglePostStart } from '../../store/post/actions';
import EditingButtonContainer from '../EditingButtonContainer/EditingButtonContainer';
import ClosePostListButton from '../ClosePostListButton/ClosePostListButton';
import TagsContainer from '../TagsContainer/TagsContainer';
import PopupDeletePost from '../PopupDeletePost';
import PopupUpdateCreatePost from '../PopupUpdateCreatePost';

import * as s from '../PostInfo/PostInfo.styled';

const PostInfo = ({ type = 'regular', post, id, handleOpenPostById, bgBtnColor = '#1C67F0' }) => {
  const dispatch = useDispatch();

  const handleDeletePostFromList = event => {
    event.stopPropagation();

    dispatch(deleteReadListPost(id));
  };
  const handleDeleteFromPosts = event => {
    event.stopPropagation();

    dispatch(removeSinglePostStart({ id }));
  };

  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const handleShowDeletePopup = event => {
    event.stopPropagation();
    setShowDeletePopup(!showDeletePopup);
  };

  const [showUpdatePopup, setShowUpdatePopup] = useState(false);
  const handleShowUpdatePopup = event => {
    event.stopPropagation();
    setShowUpdatePopup(!showUpdatePopup);
    console.log(post);
  };

  return (
    <>
      <s.BorderWrraper onClick={() => handleOpenPostById(post.id)}>
        <TagsContainer tagsList={post?.tags}></TagsContainer>
        <h2>{post.title}</h2>
        {type === 'readList' ? (
          <ClosePostListButton handleDeletePostFromList={handleDeletePostFromList}></ClosePostListButton>
        ) : (
          <EditingButtonContainer
            post={post}
            handleShowDeletePopup={handleShowDeletePopup}
            handleShowUpdatePopup={handleShowUpdatePopup}
          ></EditingButtonContainer>
        )}
      </s.BorderWrraper>
      {showDeletePopup && (
        <PopupDeletePost
          setShowDeletePopup={setShowDeletePopup}
          showDeletePopup={showDeletePopup}
          handleDeleteFromPosts={handleDeleteFromPosts}
        ></PopupDeletePost>
      )}

      {showUpdatePopup && (
        <PopupUpdateCreatePost
          setShowUpdatePopup={setShowUpdatePopup}
          showUpdatePopup={showUpdatePopup}
          bgBtnColor={bgBtnColor}
          post={post}
        ></PopupUpdateCreatePost>
      )}
    </>
  );
};

export default PostInfo;
