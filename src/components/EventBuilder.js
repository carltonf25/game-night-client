import React, { useState, useContext } from 'react';
import { AppContext } from '../AppContext';
import { useSpring, animated } from 'react-spring';
import { Wrapper, Section, Error } from './styled-components/common';
import axios from 'axios';
import { A, navigate } from 'hookrouter';
import ChecklistItem from './ChecklistItem';
import TextBlock from './TextBlock';
import ImageUploader from './ImageUploader';
require('dotenv').config();

const EventBuilder = () => {
	const { user } = useContext(AppContext);

	const [error, setError] = useState('');
	const [event, setEvent] = useState({
		title: '',
		description: '',
		date: '',
		time: '',
		location: '',
		user_id: user.id,
		header_image: 'http://via.placeholder.com/640x360'
	});
	const prefix =
		process.env.NODE_ENV === 'development'
			? process.env.REACT_APP_DEV_PREFIX
			: process.env.REACT_APP_PROD_PREFIX;

	const createEvent = async () => {
		const res = await axios.post(`${prefix}/api/events?api_token=${user.api_token}`, event);

		if (res.data.created === true) {
			navigate('/dashboard');
		} else {
			setError('Error creating the event.');
		}
	};

	const slideIn = useSpring({
		from: {
			transform: `translate3d(100%,0, 0)`,
			opacity: 0
		},
		to: {
			transform: `translate3d(0,0,0)`,
			opacity: 1
		}
	});

	return (
		<animated.div style={slideIn}>
			<Wrapper>
				<Section
					style={{
						gridColumn: `2/3`,
						display: `grid`,
						gridTemplateColumns: `10% 1fr 10%`,
						background: `none`,
						boxShadow: `none`
					}}
				>
					<A
						style={{
							color: `#15f5b3`,
							textTransform: `uppercase`,
							fontWeight: 600,
							textDecoration: `none`
						}}
						href="/dashboard"
					>
						◀ Back
					</A>
					<h1
						style={{
							gridColumn: `2/3`,
							textAlign: `center`
						}}
					>
						New Event
					</h1>
					{error && (
						<Error>
							<p>{error}</p>
						</Error>
					)}
					<ImageUploader setEvent={setEvent} />
					<ChecklistItem item="title" setEvent={setEvent} heading="Title" defaultVal="Title" />
					<TextBlock
						item="description"
						setEvent={setEvent}
						heading="Description"
						defaultVal="Description"
					/>
					<ChecklistItem
						item="date"
						setEvent={setEvent}
						heading="Date?"
						defaultVal=""
						type="date"
					/>
					<ChecklistItem
						item="time"
						setEvent={setEvent}
						heading="Time?"
						defaultVal=""
						type="time"
					/>
					<ChecklistItem item="location" setEvent={setEvent} heading="Where?" defaultVal="" />
					<button
						style={{ gridColumn: `2/3`, width: `25%`, marginLeft: `auto` }}
						onClick={e => {
							e.preventDefault();
							createEvent();
						}}
					>
						Publish
					</button>
				</Section>
			</Wrapper>
		</animated.div>
	);
};

export default EventBuilder;
