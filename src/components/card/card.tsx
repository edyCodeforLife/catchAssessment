
import Card from '@material-ui/core/Card';
import styled from 'styled-components';
import { CardContent, CardActionArea } from '@material-ui/core'
import { ImageLogo } from '../basic-elements';
import { centsToDollars } from '../../data/global/function/function';

const CustomCard = styled(Card)`
	max-width: ${(props) => props.maxwidth};
	max-height: ${(props) => props.maxheight};
	background: ${(props) => props.bground};
	color: ${(props) => props.color};
	width: ${(props) => props.width};
	height: ${(props) => props.height};
	margin: 10px;
`;

export const Title = styled.h3`
	color: ${(props) => props.color};
`;

export const RetailPriceText = styled.del`
	color: ${(props) => props.color};
	font-size: 20px;
	font-weight: 600;
`;

export const ActualPrice = styled.div`
	color: ${(props) => props.color};
	font-size: 30px;
	font-weight: 600;
`;

export const ImageContainer = styled.div`
	position: relative;
	width: auto;
	height: auto;
`;

const ContainerLabel = styled.div`
	background: red;
	padding: 10px;
	color: #fff;
	position: absolute;
	bottom: 10px;
	right: 10px;
	border-radius: 7px;
	font-weight: 600;
	font-size: 12px;
`;

export interface ICardProps {
	maxwidth: string;
	maxHeight: string;
	bground: string;
	color: string;
	cardHeight: string;
	cardWidth: string;
	titleText: string;
	retailPrice: number;
	salePrice: number;
	imageUrl: string;
	isSoldOut: boolean;
}

export default function MediaCard(props: ICardProps) {

	const {
		maxwidth,
		maxHeight,
		imageUrl,
		bground,
		color,
		cardWidth,
		cardHeight,
		titleText,
		retailPrice,
		salePrice,
		isSoldOut
	} = props;

	return (
		<CustomCard
			width={cardWidth}
			height={cardHeight}
			maxwidth={maxwidth}
			maxheight={maxHeight}
			bground={bground}
			color={color}
		>
			<CardActionArea>
				<ImageContainer>
					<ImageLogo
						height={180}
						width={cardWidth}
						src={imageUrl}
					/>
					{isSoldOut && (
						<ContainerLabel>
							SOLD OUT
						</ContainerLabel>
					)}
				</ImageContainer>

				<CardContent>
					<Title color={color}>
						{titleText}
					</Title>
					<RetailPriceText color={color}>
						{centsToDollars(retailPrice)}
					</RetailPriceText>
					<ActualPrice>
						{centsToDollars(salePrice)}
					</ActualPrice>
				</CardContent>
			</CardActionArea>
		</CustomCard>
	);
}