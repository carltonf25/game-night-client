import React, { useState, useEffect } from 'react';
import { ChecklistItem as Item, EditButton } from './styled-components/EventBuilder.js';

const ImageUploader = ({ setEvent }) => {
	const [image, setImage] = useState('');
	const [loading, setLoading] = useState(false);
	const [checked, setChecked] = useState(false);
	const [editing, setEditing] = useState(false);

	let bgColor = checked ? `#c7f5df` : `#e2e9ec`;

	const uploadImage = async e => {
		const files = e.target.files;
		const data = new FormData();
		data.append('file', files[0]);
		data.append('upload_preset', 'game-night');
		setLoading(true);
		const res = await fetch('http://api.cloudinary.com/v1_1/dyimkojzn/image/upload', {
			method: 'POST',
			body: data
		});

		const file = await res.json();
		setImage(file.secure_url);
		setEvent(event => ({ ...event, header_image: file.secure_url }));
		setLoading(false);
		setChecked(true);
	};

	return (
		<Item
			style={{
				background: bgColor,
				borderLeft: checked ? `5px solid #15f5be` : `5px solid #b29cbb`
			}}
		>
			<h2>Upload Image</h2>
			<input
				name="file"
				placeholder="Upload an image"
				onChange={uploadImage}
				type="file"
				class="file-upload"
				data-cloudinary-field="image_id"
			/>
			{loading ? <h3>Loading...</h3> : <img src={image} style={{ height: `200px` }} />}
		</Item>
	);
};

export default ImageUploader;
