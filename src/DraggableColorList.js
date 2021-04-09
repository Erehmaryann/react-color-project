import React from 'react';
import DraggableColorBox from './DraggableColorBox';
import { SortableContainer } from 'react-sortable-hoc';

const DraggableColorList = SortableContainer(({ colors, removeColor }) => {
	// const { colors, removeColor } = props;
	return (
		<div style={{ height: '100%' }}>
			{colors.map((color, i) => {
				return (
					<DraggableColorBox
						index={i}
						key={color.name}
						color={color.color}
						name={color.name}
						handleClick={() => removeColor(color.name)}
					/>
				);
			})}
		</div>
	);
});

export default DraggableColorList;
