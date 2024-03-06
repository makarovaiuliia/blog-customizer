import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { useState } from 'react';
import { RadioGroup } from '../radio-group';
import clsx from 'clsx';

import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = () => {
	const [isOpen, setIsOpen] = useState(false);

	function handleClick() {
		setIsOpen(!isOpen);
	}

	const options = [
		{ title: '18 PX', value: '18 PX', className: '' },
		{ title: '25 PX', value: '25 PX', className: '' },
		{ title: '38 PX', value: '38 PX', className: '' },
	];

	const [selected, setSelected] = useState(options[0]);

	return (
		<>
			<ArrowButton onClick={handleClick} />
			<aside
				className={clsx(styles.container, isOpen && styles.container_open)}>
				<form className={styles.form}>
					<RadioGroup
						selected={selected}
						name='radio'
						onChange={setSelected}
						options={options}
						title='Размер шрифта'
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
