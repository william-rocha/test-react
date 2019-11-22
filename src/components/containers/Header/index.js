import React from 'react';
import PropTypes from 'prop-types';
import { useStore } from 'utils/hooks/useStore';

import './style.css';
import { Types } from 'redux/hooks/auth';

const propTypes = {};

const defaultProps = {};

export default function HeaderContainer(props) {
	const [{ user }, dispatch] = useStore();

	return (
		<header>
			<div className="left">
				Usuário: {user.isAuthenticated ? user.name : 'Anônimo'}
			</div>
			<div className="spacer" style={{ flex: 1 }}></div>
			<div className="login">
				{!user.isAuthenticated ? (
					<a
						onClick={() =>
							setTimeout(
								() =>
									dispatch({
										type: Types.LOGIN,
										payload: { user: { name: 'Ivory User' } },
									}),
								3000,
							)
						}
						style={{
							background: '#fff',
							color: '#323232',
							cursor: 'pointer',
							padding: 4,
							borderRadius: 2,
						}}
					>
						Entrar
					</a>
				) : (
					<a
						onClick={() =>
							setTimeout(
								() =>
									dispatch({
										type: Types.LOGOUT,
									}),
								2000,
							)
						}
						style={{
							background: '#fff',
							color: '#323232',
							cursor: 'pointer',
							padding: 4,
							borderRadius: 2,
						}}
					>
						Sair
					</a>
				)}
			</div>
		</header>
	);
}

HeaderContainer.propTypes = propTypes;
HeaderContainer.defaultProps = defaultProps;
