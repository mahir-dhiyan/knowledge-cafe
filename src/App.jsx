import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'
function App() {
const [bookmarks, setBookmarks]=useState([]);
const handleAddToBookmark = blog =>{
  const newBookmarks = [...bookmarks,blog];
  setBookmarks(newBookmarks);
}
const [readingTime,setReadingTime]=useState(0);
const handleMarkAsRead = (Id,time) =>{
  // console.log('marking as read',time);
  setReadingTime(readingTime + time);
  // Remove the read blog from bookmark
  // console.log('remove bookmark',Id);
  const remainingBookmarks = bookmarks.filter(bookmark=>bookmark.Id !==Id);
  setBookmarks(remainingBookmarks);
}
  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>

    </>
  )
}

export default App
