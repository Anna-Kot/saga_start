import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import EditingButtonContainer from '../EditingButtonContainer/EditingButtonContainer';
import ClosePostListButton from '../ClosePostListButton/ClosePostListButton';
import TagsContainer from '../TagsContainer/TagsContainer';

import BackdropPopup from '../BackdropPopup';
import PopupButtonsBlock from '../PopupButtonsBlock';
import { deleteReadListPost, removeSinglePostStart } from '../../store/post/actions';
import * as s from '../PostInfo/PostInfo.styled';

const PostInfo = ({ type = 'regular', post, id, handleOpenPostById }) => {
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
            // handleDeleteFromPosts={handleDeleteFromPosts}
            handleShowDeletePopup={handleShowDeletePopup}
          ></EditingButtonContainer>
        )}
      </s.BorderWrraper>
      {showDeletePopup && (
        <BackdropPopup>
          <s.PopupBlock>
            <p>Are you sure you want to remove this post?</p>
            <PopupButtonsBlock
              setShowDeletePopup={setShowDeletePopup}
              showDeletePopup={showDeletePopup}
              handleDeleteFromPosts={handleDeleteFromPosts}
            ></PopupButtonsBlock>
          </s.PopupBlock>
        </BackdropPopup>
      )}
    </>
  );
};

export default PostInfo;
