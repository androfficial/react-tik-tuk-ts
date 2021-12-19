interface IAuthorVideo {
  video: string;
  cover: string;
}

const AuthorVideo = ({ cover, video }: IAuthorVideo) => (
  <div className='item-feed__body'>
    <video
      autoPlay
      muted
      loop
      controls
      playsInline
      preload='metadata'
      poster={cover}
      src={video}
      className='item-feed__author-video _author-video'
    />
  </div>
);

export default AuthorVideo;
