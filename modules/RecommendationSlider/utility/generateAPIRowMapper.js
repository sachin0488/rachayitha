import encodeImgURI from 'utility/encodeImgURI'
import slugUtility from 'utility/slug.utility'

const generateAPIRowMapper = contentType => item => {
  return {
    contentId: item?.id,
    contentName: item?.[`${contentType}_name`],
    authorName: item?.author_name,
    slug: slugUtility.create(item?.[`${contentType}_name`]),
    // contentRank: item?.[`${contentType}_rank`],
    // totalVote: item?.total_vote,

    // TotalContentVotes: item?.total_vote,
    // viewCount: item?.view_count,

    category: item?.category?.category,
    // chapter: item?.chapter,
    chapterCount: item?.chapter_count,
    chapterReadPercentage: item?.chapter_read_percent,

    commentCount: item?.comment_count,

    avgRatingValue: item?.rating?.rate__avg,
    totalRatingCount: item?.rating?.rate__count,

    likeCount: item?.like_count,
    // isLiked: item?.is_liked,

    libraryAdded: item?.library_added,

    status: item?.status,
    tags: item?.tags,
    synopsis: item?.synopsis,
    // contentRatingByUser: item?.[`user_${contentType}_rate`],

    coverImage: encodeImgURI(item?.cover_img),
    coverImage2: encodeImgURI(item?.cover_img2),
    coverImage3: encodeImgURI(item?.cover_img3),
    coverImage4: encodeImgURI(item?.cover_img4),
  }
}

export default generateAPIRowMapper
