import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import PaletteFooter from './PaletteFooter';
import { withStyles } from '@material-ui/core/styles';

const styles = {
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
		'& Link'        : {
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
export class SingleColorPalette extends Component {
	constructor(props) {
		super(props);
		this.state = {
			format : 'hex'
		};
		this.changeFormat = this.changeFormat.bind(this);
		// adding the props to the instance of the class
		this._shades = this.gatherShades(this.props.palette, this.props.colorId);
	}
	gatherShades(palette, colorToFilterBy) {
		let shades = [];
		let allColors = palette.colors;
		for (let key in allColors) {
			shades = shades.concat(allColors[key].filter((color) => color.id === colorToFilterBy));
		}
		return shades.slice(1);
	}
	changeFormat(val) {
		this.setState({ format: val });
	}
	render() {
		const { format } = this.state;
		const { paletteName, emoji, id } = this.props.palette;
		const { classes } = this.props;
		const colorBoxes = this._shades.map((color) => (
			<ColorBox key={color.name} showingFullPalette={false} name={color.name} background={color[format]} />
		));
		return (
			<div className={classes.Palette}>
				<NavBar handleChange={this.changeFormat} showingAllShades={false} />
				<div className={classes.PaletteColors}>
					{colorBoxes}
					<div className={classes.GoBack}>
						<Link to={`/palette/${id}`} className="back-button">
							GO BACK
						</Link>
					</div>
				</div>
				<PaletteFooter paletteName={paletteName} emoji={emoji} />
			</div>
		);
	}
}

export default withStyles(styles)(SingleColorPalette);
