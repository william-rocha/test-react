import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router';

import Loading from 'components/common/Loading';
import AuthGuard from 'services/security/auth-guard';
import store from 'redux/configureStore';
import authReducer from 'redux/hooks/auth';
import AppTemplate from '../_templates/App';

import 'global.css';

// const LoginPage = React.lazy(() => import('Components/Pages/Login'));
import HomePage from '../Home';
import { StoreProvider } from '../../utils/hooks/useStore';

const initialState = {
	user: {
		isAuthenticated: false,
		name: '',
	},
};

export default function Routes() {
	return (
		<>
			<Provider store={store}>
				<StoreProvider initialState={initialState} reducer={authReducer}>
					<Suspense fallback={<Loading />}>
						<Switch>
							<AppTemplate>
								<Route path="/" exact component={HomePage} />
							</AppTemplate>
						</Switch>
					</Suspense>
				</StoreProvider>
			</Provider>
		</>
	);
}
