import arrow from 'src/images/arrow.svg';
import { useState } from 'react';

import styles from './ArrowButton.module.scss';
import clsx from 'clsx';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

type ArrowButtonProps = {
	onClick: OnClick;
};

export const ArrowButton = ({ onClick }: ArrowButtonProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		onClick();
		setIsOpen(!isOpen);
	};

	return (
		<div
			onClick={handleClick}
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={clsx(styles.container, isOpen && styles.container_open)}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx(styles.arrow, isOpen && styles.arrow_open)}
			/>
		</div>
	);
};
