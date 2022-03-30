import * as React from 'react';
import styled from "styled-components";
import lottie from 'lottie-web/build/player/lottie.js';

const LottieAnimationWrapper = styled.div`
	height: 300px;
	margin: 0 auto;
	width: 300px;
`;

export interface Props {
	animationData: any;
	loop: boolean;
}

const LottieAnimation = ({ animationData, loop }: Props) => {
	const containerRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		if (containerRef.current) {
			const anim = lottie.loadAnimation({
				container: containerRef.current,
				renderer: 'svg',
				loop: !!loop,
				autoplay: true,
				animationData: animationData,
				rendererSettings: {},
			});
			return () => {
				anim.destroy();
			};
		}
	}, [containerRef, animationData, loop]);

	return <LottieAnimationWrapper ref={containerRef} />;
};

export default LottieAnimation;
