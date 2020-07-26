import React from 'react';
import styled from 'styled-components';
import {PlayPause} from './PlayPause';
import {SizeSelector} from './SizeSelector';

const Container = styled.div`
	display: flex;
	justify-content: center;
	border-top: 1px solid rgba(0, 0, 0, 0.5);
	padding-top: 2px;
	padding-bottom: 2px;
	align-items: center;
	flex-direction: row;
`;

const Spacer = styled.div`
	width: 12px;
`;

export const PreviewToolbar: React.FC = () => {
	return (
		<Container>
			<SizeSelector />
			<Spacer />
			<PlayPause />
		</Container>
	);
};