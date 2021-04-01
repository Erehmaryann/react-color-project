import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
	root       : {
		width         : '20%',
		height        : '25%',
		margin        : '0 auto -3.5px',
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

function DraggableColorBox(props) {
	const { classes } = props;
	return (
		<div className={classes.root} style={{ backgroundColor: props.color }}>
			<div className={classes.boxContent}>
				<span>{props.name}</span>
				<DeleteIcon className={classes.deleteIcon} />
			</div>
		</div>
	);
}

export default withStyles(styles)(DraggableColorBox);
