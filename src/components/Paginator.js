import React from 'react';

const Paginator = () => (
  <div className="paginator">
    <button type="button" className="paginator__item paginator__item--disabled">Previews</button>
    <button type="button" className="paginator__item paginator__item--active">1</button>
    <button type="button" className="paginator__item">2</button>
    <button type="button" className="paginator__item">3</button>
    <button type="button" className="paginator__item">Next</button>
  </div>
);

export default Paginator;
