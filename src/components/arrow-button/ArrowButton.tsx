import arrow from 'src/images/arrow.svg';
import { useRef } from 'react';

import styles from './ArrowButton.module.scss';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

type ArrowButtonProps = {
	onClick: OnClick;
};

export const ArrowButton = ({ onClick }: ArrowButtonProps) => {
	const button = useRef<HTMLDivElement | null>(null);
	const arrowImage = useRef<HTMLImageElement | null>(null);

	const handleClick = () => {
		onClick();
		if (button.current) {
			button.current.classList.toggle(styles['container_open']);
		}
		if (arrowImage.current) {
			arrowImage.current.classList.toggle(styles['arrow_open']);
		}
	};

	return (
		<div
			ref={button}
			onClick={handleClick}
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={styles.container}>
			<img
				src={arrow}
				ref={arrowImage}
				alt='иконка стрелочки'
				className={styles.arrow}
			/>
		</div>
	);
};
