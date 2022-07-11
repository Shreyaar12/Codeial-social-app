// // import React from 'react';
// // import ReactDOM from 'react-dom/client';
// // import './styles/index.css';
// // import { App } from './components';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import './index.css';
// import App from './components/App';
// import { configureStore } from './store';
// //  import reportWebVitals from './reportWebVitals';

// // ReactDOM.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>,
// //   document.getElementById('root')
// // );

// // // If you want to start measuring performance in your app, pass a function
// // // to log results (for example: reportWebVitals(console.log))
// // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();


// // ReactDOM.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>,
// //   document.getElementById('root')
// // );
// // reportWebVitals();


// const store = configureStore();

// ReactDOM.render(
//   <Provider store={store}>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </Provider>,
//   document.getElementById('root')
// );
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import { configureStore } from './store';
import { unstable_HistoryRouter as HistoryRouter , BrowserRouter as Router } from "react-router-dom";
// import { createBrowserHistory } from "history";

const store = configureStore();
// const history = createBrowserHistory({ window });

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
   {/* <HistoryRouter history={history}> */}
      <App />
{/*       
      </HistoryRouter> */}
      </Router>
 
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
