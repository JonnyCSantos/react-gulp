import ReactDOM from 'react-dom';
import React from 'react';

import Titulo from './titulo/titulo';
import Navbar from './navbar/navbar';
import ListCard from './card/list-card';

let App = (
  <div>
    <Navbar titulo='React' cor='orange'/>
    <div className="container">
      <Titulo />
      <ListCard qtdLinha='4' tamCol='3'/>
    </div>
  </div>
);

ReactDOM.render(App, document.getElementById('app'));
