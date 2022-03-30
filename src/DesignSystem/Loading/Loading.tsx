import * as React from "react";
import styled from "styled-components";
import loadingAnimation from './loading-file.json';

import LottieAnimation from '../../DesignSystem/LottieAnimation'

const LoadingWrapper = styled.div`
 	width: 100%;
`;

const Loading: React.FC = () => {
	return (
		<LoadingWrapper>
			<LottieAnimation
				loop={true}
				animationData={loadingAnimation}
			/>
		</LoadingWrapper>
	);
};

export default Loading;