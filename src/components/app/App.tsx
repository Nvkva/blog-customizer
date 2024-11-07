import { CSSProperties, useState } from "react";
import { defaultArticleState } from "src/constants/articleProps";
import { ArticleParamsForm } from "../article-params-form";
import { Article } from "../article";

import styles from '../../styles/index.module.scss';

export const App = () => {
	const [currentArticleSettingsState, setCurrentArticleSettingsState] =
		useState(defaultArticleState);
	return (
		<div
			className={styles.main}
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
				onParamsChange={(data) =>
					setCurrentArticleSettingsState(data)}
			/>
			<Article />
		</div>
	);
};