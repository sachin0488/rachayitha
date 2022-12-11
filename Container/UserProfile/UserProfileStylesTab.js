export const UserProfileStylesTab = {
  tabs: {
    '& .MuiTab-root.Mui-selected': {
      color: 'white',
      backgroundColor: '#5225C2',
      borderRadius: '26px',

      '@media (min-width: 500px)': {
        padding: '12px 16px',
      },
    },
    '& .MuiButtonBase-root': {
      fontSize: '14px',
      lineHeight: '18px',
      margin: '0px 20px 0px 0px',
      '@media (min-width: 500px)': {
        fontSize: '18px',
      },

      textTransform: 'capitalize',
    },

    '& .MuiTabs-indicator ': {
      display: 'none',
    },
  },
}
