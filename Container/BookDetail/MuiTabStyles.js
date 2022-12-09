export const styles = {
  tabs: {
    '& .MuiTab-root.Mui-selected': {
      color: 'black',
    },
    '& .MuiButtonBase-root': {
      fontSize: '21px',
      margin: '0px 20px',
      textTransform: 'capitalize',
    },
    '& .MuiTabs-indicator ': {},
  },
  wrapper: {
    width: '100%',
    '@media (min-width:1100px)': {
      width: '90%',
    },
  },
  tabPanel: {
    width: '100%',
  },
}

export const GenreLeadMuiTab = {
  tabs: {
    '& .MuiTab-root.Mui-selected': {
      color: '#673CCB',
      backgroundColor: 'white',
      border: '1px solid #673CCB',
    },
    '& .MuiTabs-flexContainer': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px',
    },

    '& .MuiButtonBase-root': {
      height: '30px',
      padding: '0px 8px',
      fontSize: '13px',
      '@media (min-width:1100px)': {
        fontSize: '14px',
        padding: '0px 9px',
      },
      '@media (min-width:1200px)': {
        fontSize: '15px',
        padding: '0px 10px',
      },
      '@media (min-width:1400px)': {
        fontSize: '16px',
        padding: '0px 12px',
      },
    },
    '& .MuiTabs-indicator ': {
      display: 'none',
    },
  },
}
