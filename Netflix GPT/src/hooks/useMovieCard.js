import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Button from '../components/UI/button.js';
import Modal from '../components/UI/modal.js';
import { Img_CDN_URL } from '../utils/constants.js';

export default function useMovieCard(posterPath, backdropPath, alt) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const cardStyle = {
        transform: 'translateX(0)',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
    };

    function handleClick() {
        setIsModalOpen(true);
    }

    function handleCloseButton() {
        setIsModalOpen(false);
    }

    const modal = (
        <Modal open={isModalOpen}>
            <div className="relative">
                <div className='fixed flex'>
                    <Button
                        className=
                            'relative left-[53.5rem] m-1 mt-2 px-[0.5rem] py-[0.1rem] bg-red-600 bg-opacity-90 text-white rounded-full hover:bg-opacity-70'
                        onClick={handleCloseButton}
                    >
                        <FontAwesomeIcon icon={faClose} />
                    </Button>
                </div>
                <div className='absolute top-0 -z-10'>
                    <h1 className='absolute m-2 px-2 font-bold bg-purple-800 text-white'>
                        1/2
                    </h1>
                    <div className="flex justify-center">
                        <img
                            className='relative h-[31.5rem] -z-10'
                            src={Img_CDN_URL + posterPath}
                            alt={alt}
                        />
                    </div>
                    <h1 className='absolute m-2 px-2 font-bold bg-purple-800 text-white'>
                        2/2
                    </h1>
                    <img
                        className='relative w-full h-[31.5rem] -z-10'
                        src={Img_CDN_URL + backdropPath}
                        alt={alt}
                    />
                </div>
            </div>
        </Modal>
    );

    return {modal, cardStyle, handleClick};
}