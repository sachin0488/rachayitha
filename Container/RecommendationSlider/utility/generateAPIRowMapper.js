const generateAPIRowMapper = item => {
  return {
    bookId: item?.id,
    bookName: item?.book_name,
    authorName: item?.author_name,

    // bookRank: item?.book_rank,
    // totalVote: item?.total_vote,

    // TotalBookVotes: item?.total_vote,
    // viewCount: item?.view_count,

    category: item?.category?.category,
    // chapter: item?.chapter,
    // chapterCount: item?.chapter_count,

    commentCount: item?.comment_count,

    avgRatingValue: item?.rating?.rate__avg,
    totalRatingCount: item?.rating?.rate__count,

    likeCount: item?.like_count,
    // isLiked: item?.is_liked,

    libraryAdded: item?.library_added,

    status: item?.status,
    tags: item?.tags,
    synopsis: item?.synopsis,
    // bookRatingByUser: item?.user_book_rate,

    coverImage: item?.cover_img,
    coverImage2: item?.cover_img2,
    coverImage3: item?.cover_img3,
    coverImage4: item?.cover_img4,
  }
}

export default generateAPIRowMapper
