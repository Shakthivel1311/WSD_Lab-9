import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DogImages = () => {
    const [dogImages, setDogImages] = useState([]);

    useEffect(() => {
        const fetchDogImages = async () => {
            try {
                const response = await axios.get(
                    'https://dog.ceo/api/breeds/image/random/6'
                );
                setDogImages(response.data.message);
            } catch (error) {
                console.error('Error fetching dog images:', error);
            }
        };
        fetchDogImages();
    }, []);

    return (
        <div>
            <h2> Dog Images</h2>
            <div className="dog-gallery">
                {dogImages.map((image, index) => (
                    <div key={index} className="dog-image">
                        <img src={image} alt="Random Dog" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DogImages;
