/* eslint-disable import/no-anonymous-default-export */
export default {
	up() {},
	down(size) {
		const sizes = {
			xs 	: '575.98px',
			sm 	: '767.98px',
			md 	: '991.98px',
			// mdd : "999px",
			// mlg : "1000px",
			lg : '1199.98px',
			xl : '1400px'
		};
		return `@media (max-width: ${sizes[size]})`;
	}
};
