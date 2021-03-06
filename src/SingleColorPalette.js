import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ColorBox from './ColorBox';
import NavBar from './NavBar';
import PaletteFooter from './PaletteFooter';
import styles from './styles/PaletteStyles';
import { withStyles } from '@material-ui/core/styles';
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
