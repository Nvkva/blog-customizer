import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState as defaultArticleSettingsState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [currentArticleSettingsState, setCurrentArticleSettingsState] =
		useState(defaultArticleSettingsState);
	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': currentArticleSettingsState.fontFamilyOption.value,
					'--font-size': currentArticleSettingsState.fontSizeOption.value,
					'--font-color': currentArticleSettingsState.fontColor.value,
					'--container-width': currentArticleSettingsState.contentWidth.value,
					'--bg-color': currentArticleSettingsState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				articleSettings={currentArticleSettingsState}
				setCurrentArticle={setCurrentArticleSettingsState}
			/>
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
