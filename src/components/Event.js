import React, { useContext, useState, useEffect } from 'react';
import { navigate } from 'hookrouter';
import { useSpring, animated } from 'react-spring';
import axios from 'axios';
import dotenv from 'dotenv';
// components && styles
import { Section, Success, Wrapper } from './styled-components/common';
import { EventWrapper } from './styled-components/Event';
import GuestTable from './GuestTable';
import RsvpModal from './RsvpModal';
import { AppContext } from '../AppContext';
// images
import clock from '../img/clock-icon.svg';
import locationIcon from '../img/location-icon.svg';
require('dotenv').config();

const Event = ({ eventCode }) => {
	const { user } = useContext(AppContext);
	const { event } = useContext(AppContext);
	const { setEvent } = useContext(AppContext);

	const [modal, setModal] = useState(false);
	const [successFlash, setSuccessFlash] = useState('');
	const [error, setError] = useState('');
	const [guests, setGuests] = useState([]);

	const isLoggedInUser = user.id === event.user_id ? true : false;
	const prefix =
		process.env.NODE_ENV === 'development'
			? process.env.REACT_APP_DEV_PREFIX
			: process.env.REACT_APP_PROD_PREFIX;

	const fetchEvent = async () => {
		let eventPromise = await axios.get(`${prefix}/api/events/${eventCode}`);
		let guestsPromise = await axios.get(`${prefix}/api/events/${eventCode}/guests`);
		let res = await Promise.all([eventPromise, guestsPromise]);

		if (res[0].status === 200) {
			setEvent(res[0].data.event);
			setGuests(res[1].data.guests);
		} else {
			navigate('/');
		}
	};

	const formatDate = dateString => {
		const date = new Date(dateString);
		return date.toLocaleString('default', {
			month: 'short',
			weekday: 'long',
			day: 'numeric'
		});
	};

	const formatTime = dateString => {
		let date = dateString;
		console.log(date);
		// return dateString.toLocaleTimeString("default", {
		//   hour: "numeric"
		// });
	};

	const addItem = async item => {
		if (!item.title) {
			setError('Please provide a title');
			return;
		}

		const res = await axios.post(
			`${prefix}/api/events/${eventCode}/needs?api_token=${user.api_token}`,
			item
		);

		if (res.data.added === true) {
			fetchEvent();
			setSuccessFlash(res.data.flash);
			window.scrollTo(0, 0);
			setTimeout(() => {
				setSuccessFlash('');
			}, 5000);
		} else {
			setError('Unable to add item');
		}
	};

	const fadeIn = useSpring({
		from: {
			opacity: 0
		},
		to: {
			opacity: 1
		}
	});

	useEffect(() => {
		fetchEvent();
	}, []);

	return (
		<>
			{modal && (
				<RsvpModal
					setSuccessFlash={setSuccessFlash}
					modal={modal}
					fetchEvent={fetchEvent}
					closeModal={() => setModal(false)}
				/>
			)}
			<animated.div style={fadeIn}>
				<Wrapper>
					<EventWrapper>
						{successFlash !== '' && (
							<Success style={fadeIn}>
								<p>{successFlash}</p>
							</Success>
						)}
						<Section>
							<img
								alt="placeholder"
								src={
									event.header_image ||
									`https://www.adventuresnt.com.au/wp-content/uploads/2015/03/banner-placeholder.jpg`
								}
							/>
							<div>
								<div
									style={{
										marginBottom: `2em`
									}}
								>
									<h2>{event.title}</h2>
									{!isLoggedInUser ? (
										<button
											onClick={e => {
												e.preventDefault();
												setModal(true);
											}}
										>
											RSVP
										</button>
									) : null}
									<hr
										style={{
											border: `1px solid rgba(220, 220, 220, 0.75)`
										}}
									/>
								</div>
								<div style={{ margin: `1em` }}>
									<img
										alt="time icon"
										src={clock}
										style={{
											width: `1.5em`
										}}
									/>
									<h3 style={{ display: `inline`, marginLeft: `1em` }}>
										{formatDate(event.date)} at {formatTime(event.time)}
									</h3>
								</div>
								<div style={{ margin: `1em` }}>
									<img
										alt="time icon"
										src={locationIcon}
										style={{
											width: `1.5em`
										}}
									/>
									<h3 style={{ display: `inline`, marginLeft: `1em` }}>
										{event.location || `TBD`}
									</h3>
								</div>
							</div>
						</Section>
						<Section>
							<div className="description-date">
								<div style={{}}>
									<h2>About this event:</h2>
									<p>{event.description ? event.description : 'placeholder text'}</p>
								</div>
							</div>
						</Section>
						{event.needs && (
							<Section>
								<h2>Items Needed</h2>
								<ul>
									{event.needs.map(i => (
										<li>{i.title}</li>
									))}
								</ul>
							</Section>
						)}
						<Section>
							<h2>Who's going?</h2>
							<GuestTable guests={guests} />
						</Section>
					</EventWrapper>
				</Wrapper>
			</animated.div>
		</>
	);
};

export default Event;
