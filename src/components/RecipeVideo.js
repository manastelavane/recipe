import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import VideoDetail from './VideoDetail'
import VideoList from './VideoList'

const Recipe = ({selectedRecipe,videos}) => {
    const [selectedVideo,setSelectedVideo]=useState(null)
    useEffect(()=>{
        setSelectedVideo(videos[0]);
      },[videos])
  return (
      <div style={{boxShadow:'0 0 7px black',margin:'10px'}}>
    {
        (selectedRecipe)?
        <>
        <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetail video={selectedVideo} />
          </div>
          <div className='five wide column'>
            <VideoList videos={videos} onVideoSelect={(video)=>setSelectedVideo(video)} />
          </div>
        </div>
      </div>
        </>
        :<>No Recipe</>
    }
    </div>
  )
}

export default Recipe
