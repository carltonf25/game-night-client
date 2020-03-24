import React, { useState, useContext } from 'react';
import { AppContext } from '../AppContext';
import { Error } from './styled-components/common';
import { useSpring, animated } from 'react-spring';
import { Overlay } from './styled-components/RsvpModal';
import axios from 'axios';
require('dotenv').config();

const RsvpModal = ({ fetchEvent, closeModal, setSuccessFlash, modal }) => {
	const { event, user } = useContext(AppContext);
	const { setGuests } = useContext(AppContext);

	const [name, setName] = useState('');
	const [error, setError] = useState('');
	const prefix =
		process.env.NODE_ENV === 'development'
			? process.env.REACT_APP_DEV_PREFIX
			: process.env.REACT_APP_PROD_PREFIX;

	const addGuest = async () => {
		let data = { guests: [{ name: name }] };

		if (!name) {
			setError('Please provide a name');
			return;
		}

		const res = await axios.post(
			`${prefix}/api/events/${event.event_code}/guests?api_token=${user.api_token}`,
			data
		);

		if (res.data.added === true) {
			let guest = res.data.guest;
			let localGuests = JSON.parse(localStorage.getItem('guests')) || [];
			let updatedLocalGuests = JSON.stringify([...localGuests, guest]);

			fetchEvent();
			localStorage.setItem('guests', updatedLocalGuests);
			setGuests(res.data.guests);
			setSuccessFlash(res.data.flash);
			closeModal();
			window.scrollTo(0, 0);
			setTimeout(() => {
				setSuccessFlash('');
			}, 5000);
		} else {
			setError('Unable to add guest');
		}
	};

	const slideIn = useSpring({
		from: {
			transition: `0.1s ease`,
			transform: `translate3d(0, -300px, 0)`,
			opacity: 0
		},
		to: {
			transform: `translate3d(0, 0, 0)`,
			opacity: 1
		}
	});

	return (
		<Overlay>
			<animated.div className="modal" style={slideIn}>
				<a
					href="#0"
					style={{
						fontSize: `4em`,
						textDecoration: `none`
					}}
					onClick={closeModal}
				>
					×
				</a>
				<div
					style={{
						padding: `20px`,
						margin: `0 auto`
					}}
				>
					<h2>RSVP to this Game Night:</h2>
					{error && (
						<Error>
							<p>{error}</p>
						</Error>
					)}
					<form>
						<label for="name">Name:</label>
						<input type="text" name="name" value={name} onChange={e => setName(e.target.value)} />
						<button
							onClick={e => {
								e.preventDefault();
								addGuest();
							}}
						>
							RSVP
						</button>
					</form>
				</div>
			</animated.div>
		</Overlay>
	);
};

export default RsvpModal;
