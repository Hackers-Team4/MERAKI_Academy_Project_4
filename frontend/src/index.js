import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route} from 'react-router-dom';
import App from './App';
import SimpleReactLightbox from 'simple-react-lightbox';


ReactDOM.render(
	<React.StrictMode>
    <SimpleReactLightbox>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
    </SimpleReactLightbox>
  </React.StrictMode>,
	document.getElementById('root')
);
