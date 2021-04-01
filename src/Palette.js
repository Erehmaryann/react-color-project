import React, { Component } from 'react';
import ColorBox from './ColorBox';
import styles from './styles/PaletteStyles';
import NavBar from './NavBar';
import PaletteFooter from './PaletteFooter';
import { withStyles } from '@material-ui/core/styles';

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
		console.log(this.state.level);
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
