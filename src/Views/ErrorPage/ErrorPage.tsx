import * as React from "react";
import styled from "styled-components";
import pageNotFoundAnimation from './404-error-page.json';

import LottieAnimation from '../../DesignSystem/LottieAnimation'

const ErrorWrapper = styled.div`
 	width: 100%;
`;

const ErrorText = styled.h1`
	color: red;
	text-align: center;
`

const ErrorPage: React.FC = () => {
	return (
		<ErrorWrapper>
			<ErrorText> Something went wrong!</ErrorText>
			<LottieAnimation
				loop={true}
				animationData={pageNotFoundAnimation}
			/>
		</ErrorWrapper>
	);
};

export default ErrorPage;
