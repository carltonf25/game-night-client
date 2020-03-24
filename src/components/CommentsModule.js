import React, { useState, useEffect, useContext } from 'react';
import CommentCard from './CommentCard';
import CommentForm from './CommentForm';

import { AppContext } from '../AppContext';
import axios from 'axios';

const CommentsModule = ({ guest, eventCode, fetchEvent }) => {
	const [comments, setComments] = useState([]);
	const [error, setError] = useState([]);

	const { event } = useContext(AppContext);

	const prefix =
		process.env.NODE_ENV === 'development'
			? process.env.REACT_APP_DEV_PREFIX
			: process.env.REACT_APP_PROD_PREFIX;

	useEffect(() => {
		const getComments = async () => {
			let res = await axios.get(`${prefix}/api/events/${eventCode}/comments`);

			if (res.data.comments) {
				setComments(res.data.comments);
			} else {
				setError('Could not retrieve comments');
			}
		};
		getComments();
	}, []);
	return (
		<div>
			{error && <div>{error}</div>}
			<h2>Discussion</h2>
			{comments.map(comment => (
				<CommentCard key={comment.id} guest={guest} body={comment.body} commenter={comment.guest} />
			))}
			<CommentForm
				guest={guest}
				fetchEvent={fetchEvent}
				comments={comments}
				setComments={setComments}
			/>
		</div>
	);
};

export default CommentsModule;
