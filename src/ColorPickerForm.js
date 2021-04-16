import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { withStyles } from '@material-ui/core/styles';
import { ChromePicker } from 'react-color';
import styles from './styles/ColorPickerFormStyles';

export class ColorPickerForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentColor : 'teal',
			newColorName : ''
		};
		this.updateCurrentColor = this.updateCurrentColor.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentDidMount() {
		ValidatorForm.addValidationRule('isColorNameUnique', (value) => {
			// extract name from each color
			return this.props.colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase());
		});
		ValidatorForm.addValidationRule('isColorUnique', (value) => {
			return this.props.colors.every(({ color }) => color !== this.state.currentColor);
		});
		// // my code
		// 	ValidatorForm.addValidationRule('isColorNameUnique', (value) =>
		// 	this.state.colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
		// );
		// ValidatorForm.addValidationRule('isColorUnique', (value) =>
		// 	this.state.colors.every(({ color }) => color !== this.state.currentColor)
		// );
		// //
	}
	componentWillUnmount() {
		// remove rule when it is not needed
		ValidatorForm.removeValidationRule('isColorNameUnique');
	}
	updateCurrentColor(newColor) {
		this.setState({ currentColor: newColor.hex });
	}
	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}
	handleSubmit() {
		const newColor = {
			color : this.state.currentColor,
			name  : this.state.newColorName
		};
		this.props.createNewColor(newColor);
		this.setState({ newColorName: '' });
	}
	render() {
		const { paletteIsFull, classes } = this.props;
		const { currentColor, newColorName } = this.state;
		return (
			<div>
				<ChromePicker
					className={classes.picker}
					color={currentColor}
					onChangeComplete={this.updateCurrentColor}
				/>
				<ValidatorForm onSubmit={this.handleSubmit} ref="form">
					<TextValidator
						value={newColorName}
						margin="normal"
						placeholder="Color Name"
						className={classes.colorNameInput}
						onChange={this.handleChange}
						variant="filled"
						name="newColorName"
						validators={[ 'required', 'isColorNameUnique', 'isColorUnique' ]}
						errorMessages={[ 'Enter a color name', 'color name must be unique', 'color already used' ]}
					/>
					<Button
						variant="contained"
						type="submit"
						className={classes.addColor}
						color="primary"
						disabled={paletteIsFull}
						style={{
							backgroundColor :
								paletteIsFull ? 'grey' :
								currentColor
						}}
					>
						{
							paletteIsFull ? 'Palette Is Full!' :
							'Add Color'}
					</Button>
				</ValidatorForm>
			</div>
		);
	}
}

export default withStyles(styles)(ColorPickerForm);
