import { Link } from 'react-router-dom'
import Add from '../components/Add'
import View from '../components/View'
import Category from '../components/Category'
import { useState } from 'react'
const Home = () => {
  const [uploadVideoResponse, setUploadVideoResponse] = useState({})
  const [dropResponse, setDropResponse] = useState({})
  return (
    <>
    <div className="container mt-3 mb-3 d-flex justify-content-between">

      <div className="add-videos">
        <Add setUploadVideoResponse={setUploadVideoResponse}/>
      </div>
      <Link to='/watch-history' className='text-decoration-none fw-bold text-light'><i className="fa-solid fa-stopwatch"></i> Watch History</Link>
    </div>
    <div className='container-fluid mt-5 mb-3 row'>
      <div className='all-videos col-lg-9'>
        <h2>All Videos</h2>
        <View uploadVideoResponse={uploadVideoResponse} setDropVideoResponse={setDropResponse}/>
      </div>
      <div className="category col-lg-3">
        <Category dropVideoResponse={dropResponse}/> 
      </div>
    </div>
    </>
  )
}

export default Home