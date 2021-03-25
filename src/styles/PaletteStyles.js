// eslint-disable-next-line import/no-anonymous-default-export
export default {
	Palette       : {
		height        : '100vh',
		display       : 'flex',
		flexDirection : 'column'
	},
	PaletteColors : {
		height : '90%'
	},
	GoBack        : {
		width           : '20%',
		height          : '50%',
		margin          : '0 auto -3.8px',
		display         : 'inline-block',
		position        : 'relative',
		cursor          : 'pointer',
		opacity         : '1',
		backgroundColor : 'black',
		'& a'           : {
			width          : '100px',
			height         : '30px',
			position       : 'absolute',
			display        : 'inline-block',
			top            : '50%',
			left           : '50%',
			marginLeft     : '-20%',
			marginTop      : '-6%',
			textAlign      : 'center',
			outline        : 'none',
			background     : 'rgba(255, 255, 255, 0.3)',
			fontSize       : '1rem',
			lineHeight     : '30px',
			color          : 'white',
			textTransform  : 'uppercase',
			border         : 'none',
			textDecoration : 'none'
		}
	}
};
