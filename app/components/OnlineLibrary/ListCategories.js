import React from 'react';
import PropTypes from 'prop-types';

import ItemCategorie from './ItemCategorie'

const ListCategories =({categories})=> {
  const cat = categories.map((cat,i)=>{
    return(<ItemCategorie key={cat.id} categorie= {cat} />)
  });

  return (
    <ul>
      {cat}
    </ul>
  );
}

export default ListCategories
