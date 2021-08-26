import { memo } from 'react';
import styled from 'styled-components';
import { map } from 'lodash';
import { Button, Menu, MenuItem, MenuList, ListSubheader } from '@material-ui/core/';

export interface IMenuListProps {
	anchorEl: Element;
	handleclose(): void;
	handleclick(event: React.MouseEvent<HTMLElement>): void;
	children: any;
	datalist: any[];
	isSubheader?: boolean;
	subHeaderName?: string;
	handleClickSelected?(selected: any): void;
	fieldName?: string;
	minWidthListItem?: number;
	maxHeightListItem?: number;
}

const MenuMain = styled(MenuList)`
	outline: none;
	min-width: ${(props) => props.minwidth}px;
	max-height: ${(props) => props.maxheight}px;
`;

const CustomSubHeader = styled(ListSubheader)`
	color: #3E8CB9;
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
`;

const CustomMenuItem = styled(MenuItem)`
 &:hover {
	background: #D6EDF6;
}
`;

const CustomBtn = styled(Button)`
	width: 100%;
	text-align: left;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 17px;
`;

const CustomSpecialistName = styled.span`
	margin-left: 5px;
`;

function _MenuListItem(props: IMenuListProps) {
	const { anchorEl, maxHeightListItem, minWidthListItem, fieldName, handleClickSelected, isSubheader, handleclose, handleclick, children, datalist, subHeaderName } = props;

	return (
		<div style={{ width: '100%' }}>
			<CustomBtn aria-controls="simple-menu" aria-haspopup="true" onClick={handleclick}>
				{children}
			</CustomBtn>
			<Menu
				id="simple-menu"
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleclose}
				elevation={1}
				getContentAnchorEl={null}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
				{...props}
			>
				<MenuMain maxheight={maxHeightListItem} minwidth={minWidthListItem} subheader={
					isSubheader ?
						<CustomSubHeader disableSticky={true} component="div" id="nested-list-subheader">
							{subHeaderName}
						</CustomSubHeader>
						: null
				}>

					{map(datalist, (item, idx) => (
						<div key={idx} onClick={
							() => { handleClickSelected(item) }
						}>
							<CustomMenuItem
								key={idx}
								onClick={handleclose}
							>

								<div>
									<CustomSpecialistName>
										{item[fieldName]}
									</CustomSpecialistName>
								</div>
							</CustomMenuItem>
						</div>
					))}
				</MenuMain>
			</Menu>
		</div>
	);
}

export const MenuListItem = memo(_MenuListItem);