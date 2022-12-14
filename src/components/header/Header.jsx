import React, {useState} from 'react';
import styled from '@emotion/styled';

import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';

import {selectCars} from '../../features/car/carSlice';
import {useSelector} from 'react-redux';


const Header = () =>{

	const [burgerStatus, setBurgerStatus] = useState(false);
	const cars = useSelector(selectCars);


	return(
		<Container>
			<a>
				<img src="/images/logo.svg" alt="logo image"/>
			</a>

			<Menu>
				{cars && cars.map((car, index)=>(
					<a 
						key={index} 
						href="#"
					>
						{car}
					</a>					
				))}
			</Menu>

			<RightMenu>
				<a href="#">Shop</a>

				<a href="#">Tesla Account</a>

				<CustomMenu onClick={() => setBurgerStatus(true)}/>
			</RightMenu>

			<BurgerNav show={burgerStatus}>
				<CloseWrapper>
					<Customclose onClick={() => setBurgerStatus(false)}/>
				</CloseWrapper>

				{cars && cars.map((car, index)=>(
					<li  key={index}>
						<a href="!#">{car}</a>
					</li>					
				))}

				<li>
					<a href="!#">Existing Inventory</a>
				</li>
				<li>
					<a href="!#">Used Inventory</a>
				</li>
				<li>
					<a href="!#">Trade-in</a>
				</li>
				<li>
					<a href="!#">Cybertruck</a>
				</li>
				<li>
					<a href="!#">Roadaster</a>
				</li>
			</BurgerNav>


		</Container>
	);
}


export default Header;


const Container = styled.div`
	min-height: 6rem;
	position: fixed; 
	display: flex;

	align-items: center;
	justify-content: space-between;
	padding: 0 2rem;
	top: 0;
	left: 0;
	right: 0;
	z-index: 1;	

	@media(max-width: 420px){
		a{
			img{
				width: 4.88rem
			}
		}
	}
`

const Menu = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;

	a{
		font-weight: 600;
		padding: 0 1.1rem;
		flex-wrap: nowrap;
	}

	@media(max-width: 880px){
		display: none;
	}	

`

const RightMenu = styled.div`
	display: flex;
	align-items: center;

	a{
		font-weight: 600;
		margin-right: 0.7rem;
		flex-wrap: nowrap;
	}

	@media(max-width: 420px){
		font-size: 0.95rem;
	}

`

const CustomMenu  = styled(MenuIcon)`
	cursor: pointer;	
`

const BurgerNav = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;

	background-color: var(--color-white);
	width: 28rem;
	z-index: 16;
	list-style: none;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	text-align: start;
	transform: ${props => props.show ? "translateX(0)" : "translateX(100%)"};
	transition: transform 0.3s ease-in;

	@media(max-width: 420px){
		width: 100%;
	}

	li{
		padding: 1.2rem 0;
		border-bottom: 1px solid var(--color-grey);

		a{
			font-weight: 600;
		}

	}
`

const Customclose = styled(ClearIcon)`
	cursor: pointer;
`

const CloseWrapper = styled.div`
	display: flex;
	justify-content: flex-end;

`


