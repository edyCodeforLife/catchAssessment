import { memo, Fragment } from 'react';
import styled from 'styled-components';
import { Header } from '../../header/header';
import { Footer } from '../../footer/footer';
import { FlexCenter, FlexRow, FlexOne } from '../../basic-elements/index';
import CustomScroll from 'react-custom-scroll';
import MediaCard from '../../card/card';
import { map } from 'lodash';
import MaterialIcon from '@material/react-material-icon';
import { IResults } from '../../../data/services/product/IProduct';
import { MenuListItem } from '../../menu-list/menu-list';

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

const ContainerTools = styled.div`
	padding: 0px 90px;
	width: 100%;
	box-sizing: border-box;
	margin: 10px 0px;
	position: relative;
	@media (max-width: 768px) {
		padding: 0px 25px;
	};
`;

const ContainerInsideTools = styled(FlexRow)`
	justify-content: space-between;
	box-sizing: border-box;
	padding: 15px;
	width: 100%;
	background: linear-gradient(180deg, rgba(97, 199, 181, 0.75) 0%, rgba(62, 140, 185, 0.75) 100%);
`;

const ContainerCard = styled(FlexRow)`
	flex-wrap: wrap;
	justify-content: center;
`;

const ContainerFilter = styled.div`
	background: #FFFFFF;
	padding: 0px 5px;
	border: 1px solid #61C7B5;
	box-sizing: border-box;
	border-radius: 5px;
	width: 30%;
	margin-top: 0px;
	@media (max-width: 768px) {
		width: 55%;
	};
`;

const FlexRowFullWidth = styled(FlexRow)`
	width: 100%;
	padding: 8px 0px;
	justify-content: space-between;
`;

export const CustomFlexOne = styled(FlexOne)`
	text-align: ${props => props.textAlign};
	flex: ${(props => props.flex)};
`;

export const LabelText = styled.div`
	color: ${(props) => props.color};
	font-size: ${(props) => props.fsize}px;
	font-weight: ${(props) => props.fweight};
	margin: ${(props) => props.margin};
	text-align: ${(props) => props.talign};
	line-height: ${(props) => props.lheight};
	white-space:${(props) => props.wspace};
`;


function _HomeContent(props: any) {
	const { data, metaData, labelName, handleClickSelected, handleclick, handleclose, datalist, anchorEl } = props;

	return (
		<Fragment>
			<ContainerContent>
				<Header />
				<ContainerInside>
					<ContainerTools>
						<ContainerInsideTools>
							<LabelText
								fsize={14}
								color={"#fff"}
							>
								{metaData.query?.toUpperCase()}
							</LabelText>
							<ContainerFilter>
								<MenuListItem
									datalist={datalist}
									anchorEl={anchorEl}
									handleclose={handleclose}
									handleclick={handleclick}
									handleClickSelected={handleClickSelected}
									fieldName={"label"}
									minWidthListItem={360}
								>
									<FlexRowFullWidth>
										<CustomFlexOne textAlign={'left'}>
											<LabelText color={"#3A3A3C"} fsize={14}>{labelName}</LabelText>
										</CustomFlexOne>

										<CustomFlexOne flex={0} textAlign={'right'}>
											<MaterialIcon icon={'keyboard_arrow_down'} />
										</CustomFlexOne>
									</FlexRowFullWidth>
								</MenuListItem>
							</ContainerFilter>
						</ContainerInsideTools>
					</ContainerTools>
					<CustomScroll flex="1" heightRelativeToParent={'100%'}>
						<ContainerCard>
							{map(data, (item: IResults, idx: number) => (
								<MediaCard
									key={item?.id}
									imageUrl={item?.imageUrl}
									titleText={item?.name}
									salePrice={item?.salePrice}
									retailPrice={item?.retailPrice}
									isSoldOut={item?.quantityAvailable === 0}
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

