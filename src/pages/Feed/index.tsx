/* eslint-disable react/jsx-props-no-spreading */
import { Post, Preloader } from 'components';
import useTypesSelector from 'hooks/useTypesSelector';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts, setIsLoaded } from 'store/actions/feed';

const Feed = () => {
  const dispatch = useDispatch();
  const [posts, isLoaded] = useTypesSelector(({ feed }) => [
    feed.posts,
    feed.isLoaded,
  ]);

  useEffect(() => {
    dispatch(fetchPosts(10));
    return () => {
      dispatch(setIsLoaded(false));
    };
  }, [dispatch]);

  return (
    <div className='main__feed feed'>
      <div className='feed__top'>
        <h1 className='feed__title _title'>Trending Feed</h1>
      </div>
      <div className='feed__items'>
        <div className='feed__items-list'>
          {isLoaded ? (
            posts.map((obj, i) => <Post key={i} {...obj} />)
          ) : (
            <Preloader />
          )}
        </div>
      </div>
    </div>
  );
};

export default Feed;
