import React, { useState } from 'react';
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
  // const posts = useSelector(state => state.Posts.posts);
  // const [currentTitle, setCurrentTitle] = useState(post.title);
  // const [currentBody, setCurrentBody] = useState(post.body);
  // const dispatch = useDispatch();

  // const updateNewData = () => {
  //   let newData = {
  //     ...post,
  //     title: currentTitle,
  //     body: currentBody,
  //   };
  //   console.log(newData);
  //   dispatch(updateCurrentPostStart(newData));
  // };

  // const [newTitle, setNewTitle] = useState('');
  // const [newBody, setNewBody] = useState('');

  // const createNewData = () => {
  //   let newData = {
  //     id: posts.length + 1,
  //     title: newTitle,
  //     body: newBody,
  //     userId: posts.length + 1,
  //     tags: ['classic', 'fiction', 'english'],
  //     reactions: 2,
  //   };
  //   console.log(newData);
  //   dispatch(createCurrentPostStart(newData));
  // };

  // const handleUpdateOrCreatePopup = () => {
  //   if (showUpdatePopup) {
  //     updateNewData();
  //   } else if (showCreatePopup) {
  //     createNewData();
  //   }
  // };
  // const onChangeEventCreateUpdatePopupTitle = event => {
  //   if (showUpdatePopup) {
  //     setCurrentTitle(event.target.value);
  //   } else if (showCreatePopup) {
  //     setNewTitle(event.target.value);
  //   }
  // };
  // const onChangeEventCreateUpdatePopupBody = event => {
  //   if (showUpdatePopup) {
  //     setCurrentBody(event.target.value);
  //   } else if (showCreatePopup) {
  //     setNewBody(event.target.value);
  //   }
  // };

  const posts = useSelector(state => state.Posts.posts);
  const dispatch = useDispatch();
  const [currentTitle, setCurrentTitle] = useState(showUpdatePopup ? post.title : '');
  const [currentBody, setCurrentBody] = useState(showUpdatePopup ? post.body : '');

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
          setShowCreatePopup={setShowCreatePopup}
          showCreatePopup={showCreatePopup}
          sendButton="Save Changes"
          bgBtnColor={bgBtnColor}
          onClickHandler={handleUpdateOrCreatePopup}
          //   handleUpdatePost={handleUpdatePost}
        ></PopupButtonsBlock>
      </s.PopupBlock>
    </BackdropPopup>
  );
};

export default PopupUpdateCreatePost;
