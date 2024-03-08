import type { Meta, StoryObj } from '@storybook/react';

import { RadioGroup } from './RadioGroup';
import { useState } from 'react';

const meta: Meta<typeof RadioGroup> = {
	component: RadioGroup,
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

const RadioGroupWithState = () => {
	const options = [
		{ title: '1 опция', value: '1 опция', className: '' },
		{ title: '2 опция', value: '2 опция', className: '' },
		{ title: '3 опция', value: '3 опция', className: '' },
		{ title: '4 опция', value: '4 опция', className: '' },
	];
	const [selected, setSelected] = useState(options[0]);

	return (
		<>
			<RadioGroup
				selected={selected}
				name='radio'
				onChange={setSelected}
				options={options}
				title='Название радиогруппы'
			/>
		</>
	);
};

const RadioGroupFont = () => {
	const options = [
		{ title: '18 PX', value: '18 PX', className: '' },
		{ title: '25 PX', value: '25 PX', className: '' },
		{ title: '38 PX', value: '38 PX', className: '' },
	];
	const [selected, setSelected] = useState(options[0]);

	return (
		<>
			<RadioGroup
				selected={selected}
				name='radio'
				onChange={setSelected}
				options={options}
				title='Размер шрифта'
			/>
		</>
	);
};

export const RadioGroupStory: Story = {
	render: () => <RadioGroupWithState />,
};

export const RadioGroupSecondStory: Story = {
	render: () => <RadioGroupFont />,
};
