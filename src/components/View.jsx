/* eslint-disable react/prop-types */

import { Col, Row } from "react-bootstrap"
import VideoCard from './VideoCard'
import { useEffect, useState } from "react"
import { getAllVideosApi, getVideoCategoryApi, updateCategoryAPI } from "../services/allApi";

const View = ({uploadVideoResponse,setDropVideoResponse}) => {
  const [allVideos, setAllVideos] = useState([])
  const [deleteVideoResponse, setDeleteVideoResponse] = useState(false)

  useEffect(() => {
  getAllvideos()
  setDeleteVideoResponse(false)
  }, [uploadVideoResponse,deleteVideoResponse])

  const getAllvideos = async () => {
    const result = await getAllVideosApi()
    if(result.status == 200){
      setAllVideos(result.data)
    }else{
      setAllVideos([])
    }
  }

  const dragOver = (e) => {
    e.preventDefault()
  }
  const videoDropped = async(e) => {
   const{ videoId, categoryId } = JSON.parse(e.dataTransfer.getData("data"))

   const {data} = await getVideoCategoryApi()
   const selectedCategory = data.find(item => item.id === categoryId)
   let result = selectedCategory.allVideos.filter(video => video.id !== videoId )
   console.log(result);
   let {id,categoryName} = selectedCategory
   let newCategory ={id,categoryName,allVideos:result}
   console.log(newCategory);
   const res = await updateCategoryAPI(categoryId,newCategory)
   console.log(res);
   setDropVideoResponse(res)
   
  }
  
  return (
  <>
  <Row droppable="true" onDragOver={(e) => dragOver(e)} onDrop={(e) => videoDropped(e)}>
  {
    allVideos?.length > 0?allVideos.map(video => (
      <Col sm={12} md={4} lg={3} key={video.id}>
      <VideoCard video={video} setDeleteVideoResponse={setDeleteVideoResponse}/>
      </Col>
    )) : (<p>No items to show</p>)
  }
    
  </Row>
  </>
  )
}

export default View