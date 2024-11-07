import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { useRef, useState } from 'react';
import clsx from 'clsx';
import {
	ArticleStateType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { Select } from '../select';
import { useOutsideClickClose } from '../select/hooks/useOutsideClickClose';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';

type ArticleParamsFormProps = {
	onParamsChange: (params: ArticleStateType) => void;
};

export const ArticleParamsForm = ({
	onParamsChange
}: ArticleParamsFormProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedArticleSettings, setSelectedArticleSettings] = useState(
		defaultArticleState
	);
	const rootRef = useRef<HTMLDivElement>(null);

	const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onParamsChange({
			...selectedArticleSettings,
		});
	};

	const handleFormReset = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onParamsChange({
			...defaultArticleState,
		});
		setSelectedArticleSettings({
			...defaultArticleState,
		});
	};

	useOutsideClickClose({
		isOpen,
		rootRef,
		onClose: () => setIsOpen(!isOpen),
		onChange: setIsOpen,
	});

	return (
		<div ref={rootRef}>
			<ArrowButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
			<aside
				className={clsx(styles.container, isOpen && styles.container_open)}>
				<form
					className={styles.form}
					onSubmit={handleFormSubmit}
					onReset={handleFormReset}>
					<Select
						options={fontFamilyOptions}
						selected={selectedArticleSettings.fontFamilyOption}
						onChange={(data) =>
							setSelectedArticleSettings({
								...selectedArticleSettings,
								fontFamilyOption: data,
							})
						}
						title='шрифт'
					/>
					<RadioGroup
						selected={selectedArticleSettings.fontSizeOption}
						name='radio'
						onChange={(data) =>
							setSelectedArticleSettings({
								...selectedArticleSettings,
								fontSizeOption: data,
							})
						}
						options={fontSizeOptions}
						title='размер шрифта'
					/>
					<Select
						options={fontColors}
						selected={selectedArticleSettings.fontColor}
						onChange={(data) =>
							setSelectedArticleSettings({
								...selectedArticleSettings,
								fontColor: data,
							})
						}
						title='цвет шрифта'
					/>
					<Separator />
					<Select
						options={backgroundColors}
						selected={selectedArticleSettings.backgroundColor}
						onChange={(data) =>
							setSelectedArticleSettings({
								...selectedArticleSettings,
								backgroundColor: data,
							})
						}
						title='цвет фона'
					/>
					<Select
						options={contentWidthArr}
						selected={selectedArticleSettings.contentWidth}
						onChange={(data) =>
							setSelectedArticleSettings({
								...selectedArticleSettings,
								contentWidth: data,
							})
						}
						title='ширина контента'
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</div>
	);
};
