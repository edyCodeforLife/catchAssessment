import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

export const CustomContainerGrid = styled(Grid)`
	text-align: right;
	align-items: center;
`;

export const LeftGrid = styled(Grid)`
	text-align: left;
	white-space:nowrap;
`;

export const RightGrid = styled(Grid)`
	text-align: right;
`;

export const CenterGrid = styled(Grid)`
	text-align: center;
`;

export const ContainerGrid = styled(Grid)`
	align-items: center;
`;

export const ImageLogo = styled.img`
	width: ${(props) => props.width}px;
	height: ${(props) => props.height}px;
	margin: ${(props) => props.margin ? '0px 5px' : null}
`;

export const Flex = styled.div`
    -js-display: flex;
    display: flex;
    flex-direction: column;
`;

export const FlexCenter = styled(Flex)`
    justify-content: center;
    align-items: center;
`;

export const FlexRow = styled(Flex)`
    flex-direction: row;
    align-items: center;
`;

export const FlexRowCenter = styled(FlexRow)`
    justify-content: center;
`;

export const FlexOne = styled(Flex)`
    flex: 1;
`;

export const FlexOneCenter = styled(FlexOne)`
    align-items: center;
    justify-content: center;
`;