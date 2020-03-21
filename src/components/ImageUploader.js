import React, { useState, useEffect } from 'react';

const ImageUploader = props => {
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);

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
    setLoading(false);
  };

  return (
    <div>
      <h2>Upload Image</h2>
      <input
        name="file"
        placeholder="Upload an image"
        onChange={uploadImage}
        type="file"
        class="file-upload"
        data-cloudinary-field="image_id"
      />
      {loading ? <h3>Loading...</h3> : <img src={image} style={{ width: '500px' }} />}
    </div>
  );
};

export default ImageUploader;
