import { commonApi } from "./commonApi"
import { SERVER_URL } from "./server_url"

export const uploadApi = async(video) => {
    return await commonApi("POST",`${SERVER_URL}/allVideos`,video)
}

export const getAllVideosApi = async() => {
return await commonApi("GET",`${SERVER_URL}/allVideos`,"")
}

export const getVideoApi = async(id) => {
return await commonApi("GET",`${SERVER_URL}/allVideos/${id}`,"")
}
export const deleteVideoApi = async(id) => {
return await commonApi("DELETE",`${SERVER_URL}/allVideos/${id}`,{})
}

//history 
export const addVideoHistoryApi = async(video) => {
    return await commonApi("POST",`${SERVER_URL}/history`,video)
}

export const getVideoHistoryApi = async() => {
    return await commonApi("GET",`${SERVER_URL}/history`,"")
    }

 export const deleteHistoryApi = async(id) => {
  return await commonApi("DELETE",`${SERVER_URL}/history/${id}`,{})
    }

    
    export const addVideoCategoryApi = async(category) => {
        return await commonApi("POST",`${SERVER_URL}/category`,category)
    }
    export const getVideoCategoryApi = async() => {
        return await commonApi("GET",`${SERVER_URL}/category`,"")
    }

    export const deleteCategoryyApi = async(id) => {
        return await commonApi("DELETE",`${SERVER_URL}/category/${id}`,{})
          } 

   export const updateCategoryAPI = async(id,categoryDetails)  => {
    return await commonApi("PUT",`${SERVER_URL}/category/${id}`,categoryDetails)
   }      