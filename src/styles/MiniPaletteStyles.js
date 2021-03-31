// eslint-disable-next-line import/no-anonymous-default-export
export default {
	root      : {
		backgroundColor : '#fff',
		border          : '1px solid black',
		borderRadius    : '5px',
		padding         : '0.5rem',
		position        : 'relative',
		overflow        : 'hidden',
		'&:hover'       : {
			cursor : 'pointer'
		}
	},
	colors    : {
		backgroundColor : '#dae1e4',
		height          : '100px',
		width           : '100%',
		borderRadius    : '5px',
		overflow        : 'hidden'
	},
	title     : {
		Display        : 'flex',
		justifyContent : 'space-between',
		alignItems     : 'center',
		margin         : '0',
		color          : 'black',
		paddingTop     : '0.5rem',
		// fontSize       : '1rem',
		position       : 'relative'
	},
	emoji     : {
		marginLeft : '0.5rem',
		fontSize   : '1.2rem'
	},
	miniColor : {
		height       : '25%',
		width        : '20%',
		display      : 'inline-block',
		margin       : '0 auto',
		position     : 'relative',
		marginBottom : '-4.0px'
	}
};
