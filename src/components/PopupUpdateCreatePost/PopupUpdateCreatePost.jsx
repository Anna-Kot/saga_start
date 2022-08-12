import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import BackdropPopup from '../BackdropPopup';
import PopupButtonsBlock from '../PopupButtonsBlock';

import { updateCurrentPostStart } from '../../store/post/actions';

import * as s from '../PopupUpdateCreatePost/PopupUpdateCreatePost.styled';

const PopupUpdateCreatePost = ({ setShowUpdatePopup, showUpdatePopup, bgBtnColor, post }) => {
  const [currentTitle, setCurrentTitle] = useState(post.title);
  const [currentBody, setCurrentBody] = useState(post.body);
  const dispatch = useDispatch();

  const updateNewData = () => {
    let newData = {
      ...post,
      title: currentTitle,
      body: currentBody,
    };
    console.log(newData);
    dispatch(updateCurrentPostStart(newData));
  };

  return (
    <BackdropPopup>
      <s.PopupBlock>
        {showUpdatePopup && <p>Edit post</p>}
        <s.TitleBlock>
          <label>Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="New Title Name"
            defaultValue={currentTitle}
            onChange={event => setCurrentTitle(event.target.value)}
          />
        </s.TitleBlock>
        <s.DescriptionBlock>
          <label>Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Here is a description for the new post, coming soon...."
            defaultValue={currentBody}
            onChange={event => setCurrentBody(event.target.value)}
          />
        </s.DescriptionBlock>
        <PopupButtonsBlock
          setShowUpdatePopup={setShowUpdatePopup}
          showUpdatePopup={showUpdatePopup}
          sendButton="Save Changes"
          bgBtnColor={bgBtnColor}
          onClickHandler={updateNewData}
          //   handleUpdatePost={handleUpdatePost}
        ></PopupButtonsBlock>
      </s.PopupBlock>
    </BackdropPopup>
  );
};

export default PopupUpdateCreatePost;
