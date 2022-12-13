import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import PostInfo from "../../components//PostInfo";
import Title from "../../components/Title";
import SideBar from "../../containers/SideBar";
import loadingImg from "../../assets/img/loading.gif";

import * as s from "./PostsPage.styled";

const PostsPage = ({ bgBtnColor = "#1C67F0" }) => {
  const posts = useSelector((state) => state.Posts.posts);
  console.log(posts);
  const loading = useSelector((state) => state.Posts.loading);

  const navigate = useNavigate();

  const handleOpenPostById = (id) => navigate(`/posts/${id}`);

  return (
    <>
      <SideBar />
      <s.MainWrraper>
        {loading && (
          <s.LoadingBlock>
            <s.LoadingText>...loading</s.LoadingText>
            <img src={loadingImg} alt="loading..." />
          </s.LoadingBlock>
        )}

        <Title title="All Posts" />
        <s.PostsColumn>
          {posts.map((post) => (
            <PostInfo
              key={post.id}
              id={post.id}
              post={post}
              handleOpenPostById={handleOpenPostById}
            />
          ))}
        </s.PostsColumn>
      </s.MainWrraper>
    </>
  );
};

export default PostsPage;
