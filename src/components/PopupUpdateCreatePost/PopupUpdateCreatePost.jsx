import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BackdropPopup from '../BackdropPopup';
import PopupButtonsBlock from '../PopupButtonsBlock';

import { updateCurrentPostStart, createCurrentPostStart } from '../../store/post/actions';

import * as s from '../PopupUpdateCreatePost/PopupUpdateCreatePost.styled';

const PopupUpdateCreatePost = ({
  setShowUpdatePopup,
  showUpdatePopup,
  setShowCreatePopup,
  showCreatePopup,
  bgBtnColor,
  post,
}) => {
  const posts = useSelector(state => state.Posts.posts);
  const dispatch = useDispatch();
  const [currentTitle, setCurrentTitle] = useState(showUpdatePopup ? post.title : '');
  const [currentBody, setCurrentBody] = useState(showUpdatePopup ? post.body : '');
  const [isValidated, setValidated] = useState(false);

  useEffect(() => {
    if (currentTitle.length < 4 || currentTitle.length > 72 || currentBody.length < 8 || currentBody.length > 510) {
      setValidated(false);
    } else {
      setValidated(true);
    }
  }, [currentTitle, currentBody]);

  const updateNewData = () => {
    let newData = {
      ...post,
      title: currentTitle,
      body: currentBody,
    };
    console.log(newData);
    dispatch(updateCurrentPostStart(newData));
  };

  const createNewData = () => {
    let newData = {
      title: currentTitle,
      body: currentBody,
      userId: posts.length + 1,
      tags: ['classic', 'fiction', 'english'],
      reactions: 2,
    };
    console.log(newData);
    dispatch(createCurrentPostStart(newData));
  };

  const handleUpdateOrCreatePopup = () => {
    if (showUpdatePopup) {
      updateNewData();
    } else if (showCreatePopup) {
      createNewData();
    }
  };

  const hadleOnChangeTitle = event => {
    const elem = event.target;
    setCurrentTitle(elem.value);

    if (elem.value.length <= 4 || elem.value.length > 72) {
      elem.style.borderColor = '#E00000';
    } else {
      elem.style.borderColor = '#e7e8e9';
    }
  };
  const hadleOnChangeBody = event => {
    setCurrentBody(event.target.value);

    if (event.target.value.length <= 8 || event.target.value.length > 510) {
      event.target.style.borderColor = '#E00000';
    } else {
      event.target.style.borderColor = '#e7e8e9';
    }
  };

  return (
    <BackdropPopup>
      <s.PopupBlock>
        {showUpdatePopup && <p>Edit post</p>}
        {showCreatePopup && <p>Add new post</p>}
        <s.TitleBlock>
          <label>Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="New Title Name"
            defaultValue={currentTitle}
            onChange={hadleOnChangeTitle}
          />
          {currentTitle.length < 4 || currentTitle.length > 72 ? (
            <s.ErrorMessageTitleBody>
              Please enter at least 4 characters and not more than 64 characters.
            </s.ErrorMessageTitleBody>
          ) : (
            ''
          )}
          <s.NumberOfCharacters>({currentTitle.length})</s.NumberOfCharacters>
        </s.TitleBlock>
        <s.DescriptionBlock>
          <label>Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Here is a description for the new post, coming soon...."
            defaultValue={currentBody}
            onChange={hadleOnChangeBody}
          />
          {currentBody.length < 8 || currentBody.length > 510 ? (
            <s.ErrorMessageTitleBody className="body-error">
              The length of the post cannot be less than 8 and more than 390 characters.
            </s.ErrorMessageTitleBody>
          ) : (
            ''
          )}
          <s.NumberOfCharacters className="body-error">({currentBody.length})</s.NumberOfCharacters>
        </s.DescriptionBlock>
        <PopupButtonsBlock
          setShowUpdatePopup={setShowUpdatePopup}
          showUpdatePopup={showUpdatePopup}
          setShowCreatePopup={setShowCreatePopup}
          showCreatePopup={showCreatePopup}
          sendButton="Save Changes"
          bgBtnColor={bgBtnColor}
          onClickHandler={handleUpdateOrCreatePopup}
          isValidated={isValidated}
          //   handleUpdatePost={handleUpdatePost}
        ></PopupButtonsBlock>
      </s.PopupBlock>
    </BackdropPopup>
  );
};

export default PopupUpdateCreatePost;
