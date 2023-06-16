import { Box, Stack } from '@mui/material'
import React, { useEffect } from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'

const VideoDetail = () => {
const { id } = useParams();

useEffect(() => {

},[id])

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer />
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail