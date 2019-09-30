import React, { useContext, useState } from 'react';
import { AppContext } from '../AppContext';
import { Error } from './styled-components/common';
import { useSpring, animated } from 'react-spring';
import { Overlay } from './styled-components/RsvpModal';
import axios from 'axios';

const DeleteModal = ({ setSuccess, getEvents, setDeleteModal }) => {

    const [error, setError] = useState('');
    const { event, user } = useContext(AppContext);
    const deleteEvent = async () => {
        let res = await axios.delete(
            `https://damp-falls-69999.herokuapp.com/api/events/${event.id}?api_token=${user.api_token}`
        );
        if (res.data.success === true) {
            getEvents();
            setSuccess(`Successfully deleted event.`);
            window.scrollTo(0, 0);
        } else {
            setError("Unable to delete event");
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
                <a onClick={setDeleteModal(false)}>✖</a>
                <div
                    style={{
                        padding: `20px`,
                        margin: `0 auto`
                    }}
                >
                    <h2>Are you sure you want to delete {event.title}</h2>
                    {error && (
                        <Error>
                            <p>{error}</p>
                        </Error>
                    )}

                    <button style={{marginLeft: `1em`}} onClick={() => deleteEvent()}>Yes. Delete it.</button>
                    <button style={{marginLeft: `1em`}} onClick={() => setDeleteModal(false)}>Nevermind!</button>
                </div>
            </animated.div>
        </Overlay>
    )
}

export default DeleteModal;