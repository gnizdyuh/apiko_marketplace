import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import './styles/App.css';
import './styles/buttons.css';
import NavBar from './components/NavBar/NavBarContainer';
import LoginForm from './components/LoginForm/LoginFormContainer';
import RegisterForm from './components/RegisterForm/RegisterFormContainer';
import routes from './routes/config';
import Homepage from './components/Homepage/HomepageContainer';
import store from './store/createStore';
import { appOperations } from './modules/app';
import ProfilePage from './components/Profile/ProfileContainer';
import { ToastContainer } from 'react-toastify';
import Wishlist from './components/WishlistPage/Wishlist';
import SellProductPage from './components/SellProductPage/SellProductContainer';

const App = () => {
	const dispatch = useDispatch();
	dispatch(appOperations.init());

	return (
		<BrowserRouter>
			<NavBar />
			<ToastContainer />
			<Switch>
				<Route path={routes.HOME} exact component={Homepage} />
				<Route path={routes.LOGIN} component={LoginForm} />
				<Route path={routes.REGISTER} component={RegisterForm} />
				<Route path={routes.PROFILE} component={ProfilePage} />
				<Route path={routes.WISH_LIST} component={Wishlist} />
				<Route path={routes.SELL} component={SellProductPage} />
			</Switch>
		</BrowserRouter>
	);
};

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#root')
);
