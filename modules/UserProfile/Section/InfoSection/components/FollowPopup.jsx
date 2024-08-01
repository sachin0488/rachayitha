import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, Button, Tabs, Tab, Typography } from '@mui/material';
import styled from '@emotion/styled';

const FollowPopup = ({ open, onClose, followers, following }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <StyledDialog open={open} onClose={onClose} BackdropProps={{ sx: { backdropFilter: 'blur(5px)' } }}>
      <DialogTitle>
        <Tabs value={activeTab} onChange={handleTabChange} aria-label="follow tabs">
          <Tab label="Followers" />
          <Tab label="Following" />
        </Tabs>
        <CloseButton onClick={onClose}>X</CloseButton>
      </DialogTitle>
      <DialogContent>
        {activeTab === 0 && (
          <div>
            {followers.map((follower, index) => (
              <FollowerRow key={index}>
                <Typography>{follower.name}</Typography>
                <FollowButton variant="contained">{follower.isFollowing ? 'Following' : 'Follow back'}</FollowButton>
              </FollowerRow>
            ))}
          </div>
        )}
        {activeTab === 1 && (
          <div>
            {following.map((followee, index) => (
              <FollowerRow key={index}>
                <Typography>{followee.name}</Typography>
                <FollowButton variant="contained">Following</FollowButton>
              </FollowerRow>
            ))}
          </div>
        )}
      </DialogContent>
    </StyledDialog>
  );
};

const StyledDialog = styled(Dialog)`
  .MuiDialog-paper {
    min-width: 400px;
  }
`;

const FollowerRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const CloseButton = styled(Button)`
  position: absolute;
  top: 8px;
  right: 8px;
`;

const FollowButton = styled(Button)`
  text-transform: none;
`;

export default FollowPopup;
