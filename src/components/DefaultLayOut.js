import React, {Suspense} from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Modal from './Modal';
import SideBar from './SideBar';
import PreLoader from './PreLoader';
import routes from './routes';

const DefaultLayOut = () => {

    const loader = () => <div className='loader'></div>

  return (
    <div>
      <div>
      <div className='wrapper'>
         
          <SideBar />
          <Header />
          <Modal />
          <Suspense fallback={loader}>
              <BrowserRouter>
                    <Switch>
                        {routes.map((route, idx) => {
                            return route.component ? (
                                <Route
                                    key={idx}
                                    path={route.path}
                                    exact={route.exact}
                                    name={route.name}
                                    render={(props) => <route.component {...props} />}
                                />    
                            ):(null)
                        })}
                        <Redirect from="/" to="/dashboard" />
                    </Switch>
              </BrowserRouter>
          </Suspense>
          <Footer />
      </div>
    </div>
    </div>
  )
}

export default DefaultLayOut
