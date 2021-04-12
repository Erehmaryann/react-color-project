import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Button from '@material-ui/core/Button';
import { arrayMove } from 'react-sortable-hoc';
import DraggableColorList from './DraggableColorList';

const drawerWidth = 400;

const styles = (theme) => ({
	root         : {
		display : 'flex'
	},
	appBar       : {
		transition : theme.transitions.create([ 'margin', 'width' ], {
			easing   : theme.transitions.easing.sharp,
			duration : theme.transitions.duration.leavingScreen
		})
	},
	appBarShift  : {
		width      : `calc(100% - ${drawerWidth}px)`,
		marginLeft : drawerWidth,
		transition : theme.transitions.create([ 'margin', 'width' ], {
			easing   : theme.transitions.easing.easeOut,
			duration : theme.transitions.duration.enteringScreen
		})
	},
	menuButton   : {
		marginRight : theme.spacing(2)
	},
	hide         : {
		display : 'none'
	},
	drawer       : {
		width      : drawerWidth,
		flexShrink : 0
	},
	drawerPaper  : {
		width : drawerWidth
	},
	drawerHeader : {
		display        : 'flex',
		alignItems     : 'center',
		padding        : theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent : 'flex-end'
	},
	content      : {
		flexGrow   : 1,
		height     : 'calc(100vh - 64px)',
		padding    : theme.spacing(3),
		transition : theme.transitions.create('margin', {
			easing   : theme.transitions.easing.sharp,
			duration : theme.transitions.duration.leavingScreen
		}),
		marginLeft : -drawerWidth
	},
	contentShift : {
		transition : theme.transitions.create('margin', {
			easing   : theme.transitions.easing.easeOut,
			duration : theme.transitions.duration.enteringScreen
		}),
		marginLeft : 0
	}
});

export class NewPaletteForm extends Component {
	static defaultProps = {
		maxColor : 20
	};
	constructor(props) {
		super(props);
		this.state = {
			open   : false,
			colors : this.props.palettes[0].colors
		};
		this.handleDrawerClose = this.handleDrawerClose.bind(this);
		this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
		this.createNewColor = this.createNewColor.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.removeColor = this.removeColor.bind(this);
		this.clearColors = this.clearColors.bind(this);
		this.addRandomColor = this.addRandomColor.bind(this);
	}

	handleDrawerOpen() {
		this.setState({ open: true });
	}

	handleDrawerClose() {
		this.setState({ open: false });
	}

	createNewColor(newColor) {
		this.setState({ colors: [ ...this.state.colors, newColor ], newColorName: '' });
	}

	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}

	handleSubmit(newPaletteName) {
		// let newName = this.state.newPaletteName;
		const newPalette = {
			paletteName : newPaletteName,
			id          : newPaletteName.toLowerCase().replace(/ /g, '-'),
			colors      : this.state.colors
		};
		this.props.savePalette(newPalette);
		this.props.history.push('/');
	}

	removeColor(colorName) {
		this.setState({
			colors : this.state.colors.filter((color) => color.name !== colorName)
		});
	}

	onSortEnd = ({ oldIndex, newIndex }) => {
		this.setState(({ colors }) => ({
			colors : arrayMove(colors, oldIndex, newIndex)
		}));
	};

	clearColors() {
		this.setState({ colors: [] });
	}

	addRandomColor() {
		// pick random colors from existing palettes
		const allColors = this.props.palettes.map((p) => p.colors).flat();
		let rand = Math.floor(Math.random() * allColors.length);
		const randColor = allColors[rand];
		this.setState({ colors: [ ...this.state.colors, randColor ] });
	}

	render() {
		const { classes, maxColor, palettes } = this.props;
		const { open, colors } = this.state;
		const paletteIsFull = colors.length >= maxColor;

		return (
			<div className={classes.root}>
				<PaletteFormNav
					handleDrawerOpen={this.handleDrawerOpen}
					handleSubmit={this.handleSubmit}
					open={open}
					classes={classes}
					palettes={palettes}
				/>
				<Drawer
					className={classes.drawer}
					variant="persistent"
					anchor="left"
					open={open}
					classes={{
						paper : classes.drawerPaper
					}}
				>
					<div className={classes.drawerHeader}>
						<IconButton onClick={this.handleDrawerClose}>
							<ChevronLeftIcon />
						</IconButton>
					</div>
					<Divider />
					<Typography variant="h4">Design Your Palette</Typography>
					<div>
						<Button variant="contained" color="secondary" onClick={this.clearColors}>
							Clear Palette
						</Button>
						<Button
							variant="contained"
							color="primary"
							disabled={paletteIsFull}
							onClick={this.addRandomColor}
						>
							{
								paletteIsFull ? 'Palette Is Full!' :
								'Random Color'}
						</Button>
					</div>
					<ColorPickerForm
						colors={colors}
						paletteIsFull={paletteIsFull}
						createNewColor={this.createNewColor}
					/>
				</Drawer>
				<main
					className={classNames(classes.content, {
						[classes.contentShift]: open
					})}
				>
					<div className={classes.drawerHeader} />
					<DraggableColorList
						colors={this.state.colors}
						onSortEnd={this.onSortEnd}
						removeColor={this.removeColor}
						axis="xy"
					/>
				</main>
			</div>
		);
	}
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
