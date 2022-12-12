import * as yup from 'yup'
const CommentSchema = yup.object().shape({
  comments: yup.string().min(150).required('review is required'),
})
export default CommentSchema
