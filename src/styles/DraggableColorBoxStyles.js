const styles = {
	root       : {
		width         : '20%',
		height        : '25%',
		margin        : '0 auto -5.8px',
		display       : 'inline-block',
		position      : 'relative',
		cursor        : 'pointer',
		'&:hover svg' : {
			color     : 'white',
			transform : 'scale(1.5)'
		}
	},
	boxContent : {
		padding        : '10px',
		position       : 'absolute',
		width          : '100%',
		left           : '0px',
		bottom         : '0px',
		color          : 'rgba(0,0,0, 0.5)',
		textTransform  : 'uppercase',
		letterSpacing  : '1px',
		fontSize       : '12px',
		display        : 'flex',
		justifyContent : 'space-between'
	},
	deleteIcon : {
		transition : 'all 0.3s ease-in-out'
	}
};

export default styles;
