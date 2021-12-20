import { useEffect, useState } from 'react';

function useThemeSwitcher() {
	const [theme, setTheme] = useState(localStorage.theme);
	const activeTheme = theme === 'dark' ? 'light' : 'dark';

	useEffect(() => {
		const root = window.document.documentElement;

		root.classList.remove(activeTheme);
		root.classList.add(activeTheme);
		localStorage.setItem('theme', theme);
	}, [theme, activeTheme]);

	return [activeTheme, setTheme];
}

export default useThemeSwitcher;
