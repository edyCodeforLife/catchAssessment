import { memo, Fragment } from 'react';
import styled from 'styled-components';
import { Header } from '../../header/header';
import { Footer } from '../../footer/footer';
import { FlexCenter, FlexRow } from '../../basic-elements/index';
import CustomScroll from 'react-custom-scroll';
import MediaCard from '../../card/card';
import { map } from 'lodash';
import { IResults } from '../../../data/services/product/IProduct';

export const ContainerContent = styled.div`
	box-sizing: border-box;
	width: 100%;
	height: 100%;
`;

const ContainerInside = styled(FlexCenter)`
	padding: 100px 0px 50px 0px;
	height: calc(100vh - 1px);
	box-sizing: border-box;
	width: 100%;
	@media (max-width: 768px) {
		padding: 80px 0px;
	};
`;

const ContainerCard = styled(FlexRow)`
	flex-wrap: wrap;
	justify-content: center;
`;

function _HomeContent(props: any) {
	const { data } = props;

	return (
		<Fragment>
			<ContainerContent>
				<Header />
				<ContainerInside>
					<CustomScroll flex="1" heightRelativeToParent={'100%'}>
						<ContainerCard>
							{map(data, (item: IResults, idx: number) => (
								<MediaCard
									key={item?.id}
									imageUrl={item?.imageUrl}
									titleText={item?.name}
									salePrice={item?.salePrice}
									retailPrice={item?.retailPrice}
									maxwidth={"500px"}
									maxHeight={"500px"}
									cardHeight={"350px"}
									cardWidth={"300px"}
									color={"#fff"}
									bground={'linear-gradient(180deg, rgba(97, 199, 181, 0.75) 0%, rgba(62, 140, 185, 0.75) 100%)'}
								/>
							))}
						</ContainerCard>
					</CustomScroll>
				</ContainerInside>
				<Footer />
			</ContainerContent>
		</Fragment>
	)
}

export const HomeContent = memo(_HomeContent);

