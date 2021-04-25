import React, { useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'
import { GlobalContext } from '../../context/GlobalState'
import './style.scss'

const VideoCard = ({
  vidId,
  image,
  title,
  channel,
  timeStamp,
  channelImage,
  viewCount,
  channelId,
}) => {
  const { fetchCurrentChannel } = useContext(GlobalContext)

  useEffect(() => {
    fetchCurrentChannel(channelId)
  }, [])

  return (
    <div className="video-card">
      <Link to={`watch?v=${vidId}`}>
        <img src={image} alt="thumbnail" className="video-card__thumbnail" />
      </Link>

      <div className="video-card__info">
        <Avatar
          className="video-card__avatar"
          alt={channel}
          src={channelImage?.[0].snippet.thumbnails.medium.url}
        />
        <div className="video-card__text">
          <Link
            to={`watch?v=${vidId}`}
            style={{ textDecoration: 'none', color: 'rgb(0, 0, 0)' }}
          >
            <h4>{title}</h4>
          </Link>
          <p>{channel}</p>
          <p>
            {viewCount} views &bull; {timeStamp}
          </p>
        </div>
      </div>
    </div>
  )
}

VideoCard.propTypes = {
  vidId: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  channel: PropTypes.string,
  viewCount: PropTypes.string,
  timeStamp: PropTypes.string,
  channelImage: PropTypes.string,
  channelId: PropTypes.string,
}

export default VideoCard
