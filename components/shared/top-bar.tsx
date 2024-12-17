import React from 'react';
import { Categories } from './categories';
import { Container } from './container';
import { SortPopup } from './sort-popup';

type Props = {
	className?: string
};

export const TopBar: React.FC<Props> = ({ className }) => {
	return (
		<div className="sticky top-0 bg-white py-5 shadow-lg shadow-black/5">
		<Container className="flex items-center justify-between ">
		  <Categories />
		  <SortPopup />
		</Container>



		
	 </div>
	);
};