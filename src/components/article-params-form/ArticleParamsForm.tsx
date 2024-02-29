import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { useRef, useState } from 'react';
import { RadioGroup } from '../radio-group';

import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = () => {
	const container = useRef<HTMLElement | null>(null);

	function handleClick() {
		if (container.current) {
			container.current.classList.toggle(styles['container_open']);
		}
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
			<aside className={styles.container} ref={container}>
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
