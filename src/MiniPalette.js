import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
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
		backgroundColor : '#dae1e3',
		height          : '150px',
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
		fontSize   : '1rem'
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

function MiniPalette(props) {
	const { classes, paletteName, emoji, colors, handleClick } = props;
	const miniColorBoxes = colors.map((color) => (
		<div className={classes.miniColor} style={{ backgroundColor: color.color }} key={color.name} />
	));
	return (
		<div className={classes.root} onClick={handleClick}>
			<div className={classes.colors}>{miniColorBoxes}</div>
			<h5 className={classes.title}>
				{paletteName} <span className={classes.emoji}>{emoji}</span>
			</h5>
		</div>
	);
}

export default withStyles(styles)(MiniPalette);
// higher order component(hoc)
