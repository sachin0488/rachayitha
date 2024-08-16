import React from 'react';
import styled from '@emotion/styled';
import { Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';

const AchievementTab = () => {
  const { t } = useTranslation("common");

  return (
    <Root>
      <Typography
        variant="h6"
        component="div"
        sx={{
          color: theme => theme.palette.primary.main + '70',
          fontWeight: 600,
          maxWidth: 500,
          textAlign: 'center',
        }}>
        {t('achievementTab.unlockRewardsMessage')}
      </Typography>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: 200px;
`;

export default AchievementTab;
