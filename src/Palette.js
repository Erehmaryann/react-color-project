import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';
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
	}
};
export class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = {
			level  : 500,
			format : 'hex'
		};
		this.changeLevel = this.changeLevel.bind(this);
		this.changeFormat = this.changeFormat.bind(this);
	}

	changeLevel(level) {
		this.setState({ level });
	}

	changeFormat(val) {
		// alert(val);
		this.setState({ format: val });
	}

	render() {
		const { colors, paletteName, id, emoji } = this.props.palette;
		const { classes } = this.props;
		const { level, format } = this.state;

		const colorBoxes = colors[level].map((color) => {
			return (
				<ColorBox
					background={color[format]}
					name={color.name}
					key={color.id}
					showingFullPalette={true}
					moreUrl={`/palette/${id}/${color.id}`}
				/>
			);
		});
		return (
			<div className={classes.Palette}>
				<NavBar
					level={level}
					changeLevel={this.changeLevel}
					handleChange={this.changeFormat}
					showingAllShades
				/>
				<div className={classes.PaletteColors}>{colorBoxes}</div>
				<PaletteFooter paletteName={paletteName} emoji={emoji} />
			</div>
		);
	}
}

export default withStyles(styles)(Palette);
