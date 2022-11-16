import React, {useRef, useEffect} from 'react';
import Loading from '../../components/Loading';

const Target = ({loading, setPage}) => {
  const targetRef = useRef(null);
  

  useEffect(() => {
    const fetchMoreObserver = new IntersectionObserver(entries => {
      // if(entries[0].isIntersecting){
      //   setPage(page => page + 1);
      // }
      console.log(entries)
    });
    console.log(targetRef.current);

    fetchMoreObserver.observe(targetRef.current);
    
  }, [setPage]);


  return (
    <div id="fetchMore" ref={targetRef} style={{background: '#fa0', height: '50px'}}>
      {loading && <Loading full={false} />}
    </div>
  )
}

export default Target;

