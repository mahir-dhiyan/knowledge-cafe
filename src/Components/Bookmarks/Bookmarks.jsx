import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({ bookmarks,readingTime }) => {
    return (
        <div className="md:w-1/3 bg-gray-500 p-4 m-4 rounded-xl">
            <div className="">
                <h3 className='text-4xl'>Reading Time: {readingTime} minutes</h3>
            </div>
            <h2 className="text-4xl font-bold text-center ">Bookmarked Blogs:{bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx) => (
                    <Bookmark key={idx} bookmark={bookmark}></Bookmark>
                ))
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}
export default Bookmarks;