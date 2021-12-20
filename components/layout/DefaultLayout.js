import AppHeader from '../shared/AppHeader';
import AppFooter from '../shared/AppFooter';

const DefaultLayout = ({ children }) => {
	return (
		<>
			<AppHeader />
			<div>{children}</div>
			<AppFooter />
		</>
	);
};

export default DefaultLayout;
