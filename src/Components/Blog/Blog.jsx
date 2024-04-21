import PropTypes from 'prop-types';
import { IoBookmarksOutline } from "react-icons/io5";
const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const { title, cover, reading_time, author, author_img, posted_date, hashtags,Id } = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover}></img>
            <div className='flex justify-between mb-4 '>
                <div className='flex mb-5'>
                    <img className='w-14 h-14 rounded-full' src={author_img} alt="" />
                    <div className="ml-6">
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className="">
                    <span> {reading_time} min read</span>
                    <button className='ml-2 text-2xl' onClick={() => handleAddToBookmark(blog)}><IoBookmarksOutline /></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => (
                        <span key={idx}><a>{hash}</a></span>
                    ))
                }


            </p>
            <button onClick={()=>handleMarkAsRead(Id,reading_time)} className='text-purple-600 font-bold underline'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}

export default Blog;