type TAuthorDescription = {
  text: string;
  hashtags: string[];
};

const AuthorDescription = ({ text, hashtags }: TAuthorDescription) => (
  <div className='item-feed__author-description'>
    {text && <strong className='item-feed__text'>{text}</strong>}
    {hashtags &&
      hashtags.map((el, i) => (
        <span key={`${el}_${i}`} className='item-feed__hashtag-spn'>
          <strong className='item-feed__hashtag-str'>{el}</strong>
        </span>
      ))}
  </div>
);

export default AuthorDescription;
