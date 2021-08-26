import { memo } from 'react';
import styled from 'styled-components';
import CatchLogo from '../../assets/image/catch_logo.png';
import { ImageLogo, FlexRow } from '../basic-elements/index';

export const HeaderContainer = styled.div`
    font-size: 14px !important;
	width: 100vw;
	height: 80px;
	display: flex;
	flex-shrink: 0;
	position: fixed;
	z-index: 10;
	top: 0;
	background: #fff;
	box-shadow: 0px 0px 15px rgba(0,0,0,0.1);
`;

export const HeaderInsideContainer = styled(FlexRow)`
	box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    padding: 10px 90px;
	width: 100%;
		@media (max-width: 768px) {
		padding: 10px;
	};
`;


export const TextLabel = styled.div`
	font-size: 12px;
`;

function _Header(props: React.HTMLProps<HTMLDivElement>) {
	return (
		<HeaderContainer>
			<HeaderInsideContainer>
				<ImageLogo
					src={CatchLogo}
					width={150}
					height={60}
				/>
			</HeaderInsideContainer>
		</HeaderContainer>
	);
}

export const Header = memo(_Header);
