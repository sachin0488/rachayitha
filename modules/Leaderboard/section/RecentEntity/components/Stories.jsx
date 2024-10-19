import styled from '@emotion/styled'
import React from 'react'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import { Skeleton, Tooltip, Typography } from '@mui/material'
import Link from 'next/link'
import moment from 'moment'
import Synopsis from './Synopsis'

function Stories({ data, isLoading }) {
  console.log(data)
  return (
    <Root>
      {isLoading ? (
        <>
          <Skeleton
            sx={{
              transform: 'scale(1)',
              height: '200px',
            }}
          />
          <Skeleton
            sx={{
              transform: 'scale(1)',
              height: '200px',
            }}
          />
          <Skeleton
            sx={{
              transform: 'scale(1)',
              height: '200px',
            }}
          />
          <Skeleton
            sx={{
              transform: 'scale(1)',
              height: '200px',
            }}
          />
          <Skeleton
            sx={{
              transform: 'scale(1)',
              height: '200px',
            }}
          />
          <Skeleton
            sx={{
              transform: 'scale(1)',
              height: '200px',
            }}
          />
        </>
      ) : (
        <>
          {data?.length === 0 && <div>No Entries found</div>}
          {data?.map(item => (
            <Link key={item?.id} href={`/${item?.contentType}/${item?.id}/${item?.slug}`}>
              <a>
                <Tooltip title={item.name}>
                  <Card>
                    <Image src={item?.cover_img && item?.cover_img.includes('http') ? item?.cover_img : '/alt-img.svg'} alt="img" />

                    <Content>
                      <Name variant="h6" fontWeight={600} color="secondary">
                        {item.name}
                      </Name>
                      <Typography variant="body2" fontStyle="italic" fontWeight={500} color="secondary.light" mb={1}>
                        by {item.author_name}
                      </Typography>
                      {item.category?.map(item => (
                        <Category key={item.id} variant="subtitle2" color="primary">
                          {item.name}
                        </Category>
                      ))}
                      <Synopsis mt={1.15}>{item.synopsis}</Synopsis>
                      <Action>
                        <ActionsButton>
                          <ThumbUpIcon color="primary" sx={{ fontSize: 17, opacity: 0.7 }} />
                          <Typography variant="subtitle2" color="primary" fontWeight={600}>
                            {item.like_count}
                          </Typography>
                        </ActionsButton>

                        <ActionsButton>
                          <ChatBubbleIcon color="primary" sx={{ fontSize: 17, opacity: 0.7 }} />
                          <Typography variant="subtitle2" color="primary" fontWeight={600}>
                            {item.comment_count}
                          </Typography>
                        </ActionsButton>
                      </Action>
                      <Date>{moment(item.publish_date, 'YYYY-MM-DD').format('MMM Do, YYYY | h:mm A')}</Date>
                    </Content>
                  </Card>
                </Tooltip>
              </a>
            </Link>
          ))}
        </>
      )}
    </Root>
  )
}

export default Stories

const Root = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
  justify-content: flex-start;

  /* @media (min-width: 1350px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 600px) and (max-width: 949px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  } */

  /* display: flex;
  gap: 20px;
  flex-wrap: wrap; */
`

const Card = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 14px;
  padding: 15px;
  box-shadow: 0px 21px 26px 0px rgba(47, 63, 87, 0.08);
  background: #f5f5f5;
  gap: 15px;
  border: 1px solid rgba(199, 175, 255, 1);

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const Image = styled.img`
  width: 100%;
  overflow: hidden;

  border-radius: 10px;
  object-fit: cover;
  width: 100%;
  height: 100%;

  aspect-ratio: 1/1.4;

  max-width: 155px;
  @media (min-width: 768px) {
    max-width: 165px;
    height: 100%;
  }
  @media (min-width: 1500px) {
    max-width: 185px;
    height: 100%;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1;
`

const Category = styled(Typography)`
  background: ${({ theme }) => theme.palette.primary.main}19;
  font-weight: 600;
  padding: 4px 8px;
  line-height: 1;
  border-radius: 10px;
`

const Action = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: auto;
  margin-bottom: 10px;
`

const ActionsButton = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;

  background: ${({ theme }) => theme.palette.primary.main}19;
  padding: 3px 7px;
  padding-right: 9px;
  border-radius: 6px;
`

const Name = styled(Typography)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  line-clamp: 1;
`
const Date = styled(Typography)`
  font-size: 0.9rem;
  color: #333;

  @media (max-width: 900px) {
    font-size: 0.7rem;
  }

  @media (max-width: 450px) {
    font-size: 0.5rem;
  }
`
