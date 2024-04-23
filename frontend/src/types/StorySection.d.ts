import Rating from './Rating'

type StorySection = {

    mediaUrl?: string | null,
    mediaCaption?: string | null
    text?: string | null,
    rating?: Rating,
    likes?: number,
}

export default StorySection