import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { useRef, useState } from 'react';
import { RadioGroup } from '../radio-group';
import clsx from 'clsx';
import styles from './ArticleParamsForm.module.scss';
import { Select } from '../select';
import {
	ArticleStateType,
	OptionType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { Separator } from '../separator';
import { Text } from '../text';
import { useOutsideClickClose } from '../select/hooks/useOutsideClickClose';

interface ArticleParamsFormProps {
	setArticleState: (newState: ArticleStateType) => void;
}

export const ArticleParamsForm = ({
	setArticleState,
}: ArticleParamsFormProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const rootRef = useRef<HTMLElement>(null);

	useOutsideClickClose({
		isOpen,
		rootRef,
		onClose: handleClick,
		onChange: setIsOpen,
	});

	function handleClick() {
		setIsOpen((prevState) => !prevState);
	}

	const [selectedSize, setSelectedSize] = useState<OptionType>(
		fontSizeOptions[0]
	);
	const [selectedFont, setSelectedFont] = useState<OptionType>(
		fontFamilyOptions[0]
	);
	const [selectedFontColor, setSelectedFontColor] = useState<OptionType>(
		fontColors[0]
	);
	const [selectedBackgroundColor, setSelectedBackgroundColor] =
		useState<OptionType>(backgroundColors[0]);
	const [selectedContentWidth, setSelectedContentWidth] = useState<OptionType>(
		contentWidthArr[0]
	);

	function applyChanges(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const parameters: ArticleStateType = {
			fontFamilyOption: selectedFont,
			fontColor: selectedFontColor,
			backgroundColor: selectedBackgroundColor,
			contentWidth: selectedContentWidth,
			fontSizeOption: selectedSize,
		};
		setArticleState(parameters);
		handleClick();
	}

	function resetState() {
		setArticleState(defaultArticleState);
		handleClick();
	}

	return (
		<>
			<ArrowButton handleClick={handleClick} isOpen={isOpen} />
			<aside
				className={clsx(styles.container, isOpen && styles.container_open)}
				ref={rootRef}>
				<form className={styles.form} onSubmit={applyChanges}>
					<Text as='h2' size={31} weight={800} uppercase>
						Задайте параметры
					</Text>
					<Select
						options={fontFamilyOptions}
						placeholder={selectedFont.title}
						selected={selectedFont}
						onChange={setSelectedFont}
						title='Шрифт'
					/>
					<RadioGroup
						name='radio'
						selected={selectedSize}
						onChange={setSelectedSize}
						options={fontSizeOptions}
						title='Размер шрифта'
					/>
					<Select
						options={fontColors}
						placeholder={selectedFontColor.title}
						selected={selectedFontColor}
						onChange={setSelectedFontColor}
						title='Цвет шрифта'
					/>
					<Separator />
					<Select
						options={backgroundColors}
						placeholder={selectedBackgroundColor.title}
						selected={selectedBackgroundColor}
						onChange={setSelectedBackgroundColor}
						title='Цвет фона'
					/>
					<Select
						options={contentWidthArr}
						placeholder={selectedContentWidth.title}
						selected={selectedContentWidth}
						onChange={setSelectedContentWidth}
						title='Ширина контента'
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={resetState} />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
