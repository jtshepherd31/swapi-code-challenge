import leftArrow from '../images/left-arrow.png';
import rightArrow from '../images/right-arrow.png';
import './Pagination.css';

const Pagination = ({ setPageNumber, pageNumber }) => {
  return (
      <div className='pagination-container'>
        <button
            className='pagination-button'
            onClick={() => setPageNumber(-1, 1)}>
          <img src={ leftArrow } className='button-img' />
        </button>
        <p className='page-number'>{ pageNumber }</p>
        <button
            className='pagination-button'
            onClick={() => setPageNumber(1, 4)}>
          <img src={ rightArrow } className='button-img' />
        </button>
      </div>
  )
};

export default Pagination;
