import { APIInstance } from 'api/global.api'
import { NovelDetailsQuery } from '../constants/query.address'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'

export const createCommentAPI = ({ bookId, parentCommentId, comment }) => {
  return APIInstance({
    url: '/bookcomment/',
    method: 'POST',
    data: {
      book_id: bookId,
      parent_comment_id: parentCommentId,
      comments: comment,
    },
  })
}

export const useCreateCommentService = ({ bookId, parentCommentId, sortBy }) => {
  const { enqueueSnackbar } = useSnackbar()
  const queryClient = useQueryClient()

  const { mutate, isLoading, isSuccess, isError } = useMutation({
    mutationFn({ comment }) {
      return createCommentAPI({
        bookId,
        parentCommentId,
        comment,
      })
    },
    onSuccess({ data }) {
      queryClient.invalidateQueries({
        queryKey: [
          NovelDetailsQuery.COMMENT_LIST,
          { bookId: parseInt(bookId), parentCommentId: parseInt(parentCommentId), sortBy },
        ],
      })

      enqueueSnackbar('Your comment has been added!', {
        variant: 'success',
      })
    },
    onError(error) {
      enqueueSnackbar('Unable to post your comment !', {
        variant: 'error',
      })
    },
  })

  return { mutate, isLoading, isSuccess, isError }
}
// return oldData
//   ? {
//       ...oldData,
//       libraryAdded: !oldData?.libraryAdded,
//     }
//   : oldData
/*bookId
: 
86
comment
: 
"hi"
commentCount
: 
0
commentId
: 
86
createdAt
: 
undefined
isLiked
: 
0
likeCount
: 
0
parentCommentId
: 
null
profileImage
: 
"https://readerv4.s3.ap-south-1.amazonaws.com/img/user/developerak/peed Limit.bmp"
rating
: 
4
userId
: 
"088ac945-2c4e-4e06-b1e2-41091caa256c"
username
: 
undefined */
