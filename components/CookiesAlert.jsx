import styled from '@emotion/styled'
import { Button } from '@mui/material'
import CookieRoundedIcon from '@mui/icons-material/CookieRounded'
import clsx from 'clsx'
import { useQuery } from '@tanstack/react-query'

const CookiesAlert = () => {
  const { data: isCookiesAccepted, refetch } = useQuery({
    queryKey: ['cookiesAlert'],
    queryFn: () => {
      if (typeof window !== 'undefined') {
        return localStorage.getItem('isCookiesAccepted') !== 'yes' ? false : true
      }
      return false
    },
  })

  return (
    <Root className={clsx({ show: !isCookiesAccepted })}>
      <div className={'cookiesAlert'}>
        <div className="cookiesAlert__content">
          <div className="cookiesAlert__contentTop">
            <div className="cookiesAlert__content__icon">
              <CookieRoundedIcon sx={{ fontSize: 44 }} />
            </div>
            <div className="cookiesAlert__content__text">
              <p>We use cookies to improve your experience on our website. By browsing this website, you agree to our use of cookies.</p>
            </div>
          </div>
          <div className="cookiesAlert__content__actions">
            <Button
              variant="contained"
              disableElevation
              onClick={() => {
                if (typeof window !== 'undefined') {
                  localStorage.setItem('isCookiesAccepted', 'yes')
                }
                refetch()
              }}>
              Accept Cookies
            </Button>
          </div>
        </div>
      </div>
    </Root>
  )
}

const Root = styled.div`
  display: none;
  &.show {
    display: block;
  }

  .cookiesAlert {
    background-color: #fff;
    border-bottom: 1px solid #e0e0e0;
    bottom: 0;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    left: 0;
    padding: 10px 0;
    position: fixed;
    right: 0;
    z-index: 999;
    .cookiesAlert__content {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 15px;
      margin: 0 auto;
      max-width: 1200px;
      padding: 0 15px;
      width: 100%;
      @media (min-width: 768px) {
        flex-direction: row;
      }
      .cookiesAlert__contentTop {
        display: flex;
        align-items: center;
        .cookiesAlert__content__icon {
          margin-right: 10px;
          svg {
            color: ${({ theme }) => theme.palette.primary.main};
          }
          @media (min-width: 1010px) {
            margin-bottom: -5px;
          }
        }
        .cookiesAlert__content__text {
          color: #000;
          font-size: 14px;
          font-weight: 500;
          line-height: 1.5;
          margin-right: 15px;
          @media (min-width: 1010px) {
            font-size: 16px;
          }
          p {
            margin: 0;
          }
        }
      }
      .cookiesAlert__content__actions {
        display: flex;

        margin-left: auto;
      }
    }
  }
`

export default CookiesAlert
