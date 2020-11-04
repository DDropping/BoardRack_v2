import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  StarOutlined,
  StarFilled,
  FlagOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";

import { addFavorite, removeFavorite } from "../../../actions/counters";
import { ToolbarContainer, ToolbarButton, ToolbarButtonClose } from "./style";
import ReportModal from "./ReportModal";

const index = ({ postId, isModalView }) => {
  const [isFavorite, setFavorite] = useState(false);
  const [isReportOpen, setReportOpen] = useState(false);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const router = useRouter();

  useEffect(() => {
    //check if user has favorited post
    if (user) {
      setFavorite(user.favorites.includes(postId));
    }
  }, [user]);

  function closeModal() {
    router.push("/");
  }

  return (
    <ToolbarContainer>
      {isAuthenticated && !isFavorite && (
        <ToolbarButton
          onClick={() => {
            dispatch(addFavorite(postId));
            setFavorite(true);
          }}
        >
          <StarOutlined />
          {" Favorite"}
        </ToolbarButton>
      )}
      {isAuthenticated && isFavorite && (
        <ToolbarButton
          onClick={() => {
            dispatch(removeFavorite(postId));
            setFavorite(false);
          }}
        >
          <StarFilled />
          {" Unfavorite"}
        </ToolbarButton>
      )}
      <ToolbarButton onClick={() => setReportOpen(!isReportOpen)}>
        <FlagOutlined />
        {" Report"}
      </ToolbarButton>
      <span style={{ flex: 1 }} />
      {isModalView && (
        <ToolbarButtonClose onClick={() => closeModal()}>
          <CloseCircleOutlined />
          {" Close"}
        </ToolbarButtonClose>
      )}
      {isReportOpen && (
        <ReportModal postId={postId} setReportOpen={setReportOpen} />
      )}
    </ToolbarContainer>
  );
};

export default index;
