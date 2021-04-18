import sizes from './sizes';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
	root      : {
		backgroundColor : 'blue',
		height          : '120vh',
		display         : 'flex',
		alignItems      : 'flex-start',
		justifyContent  : 'center'
	},
	container : {
		width              : '50%',
		display            : 'flex',
		alignItems         : 'flex-start',
		flexDirection      : 'column',
		flexWrap           : 'wrap',
		[sizes.down('md')]: {
			width : '80%'
		},
		[sizes.down('xs')]: {
			width : '70%'
		}
	},
	nav       : {
		width          : '100%',
		display        : 'flex',
		justifyContent : 'space-between',
		color          : 'white',
		alignItems     : 'center',
		'& a'          : {
			color : 'white'
		}
	},
	palettes  : {
		boxSizing           : 'border-box',
		width               : '100%',
		display             : 'grid',
		gridTemplateColumns : 'repeat(3, 30%)',
		gridGap             : '2.5rem',
		[sizes.down('sm')]: {
			gridTemplateColumns : 'repeat(2, 50%)'
		},
		[sizes.down('xs')]: {
			gridTemplateColumns : 'repeat(1, 100%)',
			gridGap             : '1.2rem'
		}
	}
};
