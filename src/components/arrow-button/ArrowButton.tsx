import arrow from 'src/images/arrow.svg';
import { SyntheticEvent } from 'react';

import styles from './ArrowButton.module.scss';
import clsx from 'clsx';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

type ArrowButtonProps = {
	handleClick(): void;
	isOpen: boolean;
};

export const ArrowButton = ({ handleClick, isOpen }: ArrowButtonProps) => {
	return (
		<div
			onClick={(e: SyntheticEvent) => {
				e.stopPropagation();
				handleClick();
			}}
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
