import BookCard from './BookCard'
import PoemCard from './PoemCard'

const ContentCard = ({ contentType, ...props }) => {
  if (contentType === 'book') return <BookCard {...props} />

  if (contentType === 'poem') return <PoemCard {...props} />
}

export default ContentCard
