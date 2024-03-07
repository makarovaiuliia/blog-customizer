import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { SyntheticEvent, useState } from 'react';
import { RadioGroup } from '../radio-group';
import clsx from 'clsx';
import styles from './ArticleParamsForm.module.scss';
import { Select } from '../select';
import {
	ArticleStateType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { Separator } from '../separator';

interface ArticleParamsFormProps {
	setArticleState: (newState: ArticleStateType) => void;
}

export const ArticleParamsForm = ({
	setArticleState,
}: ArticleParamsFormProps) => {
	const [isOpen, setIsOpen] = useState(false);

	function handleClick() {
		setIsOpen(!isOpen);
	}

	const [selectedSize, setSelectedSize] = useState(fontSizeOptions[0]);

	const radioGroupProps = {
		name: 'radio',
		selected: selectedSize,
		onChange: setSelectedSize,
		options: fontSizeOptions,
		title: 'Размер шрифта',
	};

	const [selectedFont, setSelectedFont] = useState(fontFamilyOptions[0]);

	const selectFontProps = {
		options: fontFamilyOptions,
		placeholder: selectedFont.title,
		selected: selectedFont,
		onChange: setSelectedFont,
		title: 'Шрифт',
	};

	const [selectedFontColor, setSelectedFontColor] = useState(fontColors[0]);

	const selectFontColorProps = {
		options: fontColors,
		placeholder: selectedFontColor.title,
		selected: selectedFontColor,
		onChange: setSelectedFontColor,
		title: 'Цвет шрифта',
	};

	const [selectedBackgroundColor, setSelectedBackgroundColor] = useState(
		backgroundColors[0]
	);

	const selectBackgroundColorProps = {
		options: backgroundColors,
		placeholder: selectedBackgroundColor.title,
		selected: selectedBackgroundColor,
		onChange: setSelectedBackgroundColor,
		title: 'Цвет фона',
	};

	const [selectedContentWidth, setSelectedContentWidth] = useState(
		contentWidthArr[0]
	);

	const selectContentWidthProps = {
		options: contentWidthArr,
		placeholder: selectedContentWidth.title,
		selected: selectedContentWidth,
		onChange: setSelectedContentWidth,
		title: 'Ширина контента',
	};

	const parameters = {
		fontFamilyOption: selectedFont,
		fontColor: selectedFontColor,
		backgroundColor: selectedBackgroundColor,
		contentWidth: selectedContentWidth,
		fontSizeOption: selectedSize,
	};

	function applyChanges(event: SyntheticEvent) {
		event.preventDefault();
		setArticleState(parameters);
	}

	function resetState() {
		setArticleState(defaultArticleState);
	}

	return (
		<>
			<ArrowButton onClick={handleClick} />
			<aside
				className={clsx(styles.container, isOpen && styles.container_open)}>
				<form className={styles.form}>
					<h2 className={styles.title}>Задайте параметры</h2>
					<Select {...selectFontProps} />
					<RadioGroup {...radioGroupProps} />
					<Select {...selectFontColorProps} />
					<Separator />
					<Select {...selectBackgroundColorProps} />
					<Select {...selectContentWidthProps} />
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={resetState} />
						<Button title='Применить' type='submit' onClick={applyChanges} />
					</div>
				</form>
			</aside>
		</>
	);
};
