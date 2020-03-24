import React from 'react';
import styled from 'styled-components';

const CommentCard = ({ guest, commenter, body }) => {
	return (
		<Wrapper>
			<small>{commenter ? commenter.name : 'anonymous'} said:</small>
			<p>{body}</p>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background: #272236;
	color: #fff;
	padding: 1.2rem;
	margin: 1rem 0;
	-webkit-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
	-moz-box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
	box-shadow: 0px 4px 6px 0px hsla(0, 0%, 0%, 0.2);
`;

export default CommentCard;
