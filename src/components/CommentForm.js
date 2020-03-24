import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { AppContext } from '../AppContext';

const CommentForm = ({ fetchEvent, guest, comments, setComments }) => {
	let [body, setBody] = useState('');
	let [error, setError] = useState('');
	let { event } = useContext(AppContext);

	let postComment = async () => {
		let comment = { body, guest_id: guest ? guest.id : 195, event_id: event.id };
		let prefix =
			process.env.NODE_ENV === 'development'
				? process.env.REACT_APP_DEV_PREFIX
				: process.env.REACT_APP_PROD_PREFIX;

		let res = await axios.post(`${prefix}/api/events/${event.event_code}/comments`, comment);
		console.log(res.data);

		if (res.data.success) {
			setComments([...comments, { ...res.data.comment, guest }]);
			setBody('');
		} else {
			setError('Could not post comment');
		}
	};
	return (
		<Wrapper>
			{error && <div>{error}</div>}
			<form>
				<label>New Comment</label>
				<textarea name="comment" value={body} onChange={e => setBody(e.target.value)} />
				<button
					onClick={e => {
						e.preventDefault();
						postComment();
					}}
				>
					SUBMIT
				</button>
			</form>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	background: #fefefe;
	color: #282a36;
	padding: 1.2rem;

	form {
		width: 100%;
		display: flex;
		flex-direction: column;
		textarea {
			margin-top: 1rem;
			resize: none;
			border: 1px solid #dedede;
			padding: 5px;
			font-size: 1rem;
			height: 150px;
		}
		button {
			margin-top: 1rem;
			transition: 0.2s ease-in-out;
			font-size: 1rem;
			margin-left: auto;
			max-width: 200px;
		}
	}
`;

export default CommentForm;
