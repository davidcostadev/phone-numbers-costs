import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { paginatorType } from '../types';

const Item = ({
  id,
  page,
  text,
  onClickPage,
  isCurrent,
  isDisabled,
}) => (
  <button
    type="button"
    id={`paginator-${id}`}
    className={classnames(
      'paginator__item',
      { 'paginator__item--active': isCurrent },
      { 'paginator__item--disabled': isDisabled },
    )}
    disabled={isDisabled}
    onClick={() => onClickPage(page)}
  >
    {text}
  </button>
);

Item.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  page: PropTypes.number,
  text: PropTypes.string.isRequired,
  onClickPage: PropTypes.func.isRequired,
  isCurrent: PropTypes.bool,
  isDisabled: PropTypes.bool,
};

Item.defaultProps = {
  isCurrent: false,
  isDisabled: false,
  page: null,
};


const List = ({ currentPage, pagesList, onClickPage }) => pagesList
  .map(page => (
    <Item
      key={page}
      id={page}
      page={page}
      text={page.toString()}
      isCurrent={page === currentPage}
      onClickPage={onClickPage}
    />
  ));

const Previous = ({ previousPageExists, previousPage, onClickPage }) => (
  <Item
    id="previous"
    page={previousPage}
    text="Previous"
    isDisabled={!previousPageExists}
    onClickPage={onClickPage}
  />
);

Previous.propTypes = {
  previousPageExists: PropTypes.bool.isRequired,
  previousPage: PropTypes.number,
  onClickPage: PropTypes.func.isRequired,
};

Previous.defaultProps = {
  previousPage: null,
};

const Next = ({ nextPageExists, nextPage, onClickPage }) => (
  <Item
    id="next"
    page={nextPage}
    text="Next"
    isDisabled={!nextPageExists}
    onClickPage={onClickPage}
  />
);

Next.propTypes = {
  nextPageExists: PropTypes.bool.isRequired,
  nextPage: PropTypes.number,
  onClickPage: PropTypes.func.isRequired,
};

Next.defaultProps = {
  nextPage: null,
};


const Paginator = ({ onClickPage, paginator }) => {
  if (!paginator) return null;

  return (
    <div className="paginator">
      <Previous
        previousPageExists={paginator.previousPageExists}
        previousPage={paginator.previousPage}
        onClickPage={onClickPage}
      />
      <List
        pagesList={paginator.pagesList}
        currentPage={paginator.page}
        onClickPage={onClickPage}
      />
      <Next
        nextPageExists={paginator.nextPageExists}
        nextPage={paginator.nextPage}
        onClickPage={onClickPage}
      />
    </div>
  );
};

Paginator.propTypes = {
  onClickPage: PropTypes.func.isRequired,
  paginator: paginatorType,
};

Paginator.defaultProps = {
  paginator: null,
};

export default Paginator;
