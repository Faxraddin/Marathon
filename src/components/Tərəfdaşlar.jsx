import React from 'react'
import pasha from '../assets/pasha.png'
import spotify from '../assets/spotify.png'
import airbnb from '../assets/airbnb.png'
import yelobank from '../assets/yelobank.png'
import socar from '../assets/socar.png';

const Tərəfdaşlar = () => {
  return (
    <div name='about' className='w-full my-32'>
        <div className='md:px-14 px-2 py-16 max-w-screen-2xl mx-8'>
            <div className='text-center my-8'>
                <h2 className='text-4xl text-neaturalDGrey font-medium mb-2'>Tərəfdaşlar</h2>
                <div className='my-14 flex flex-wrap justify-between items-center gap-8 cursor-pointer'>
                    <img src={pasha} alt='pasha' />
                    <img src={airbnb} alt='' />
                    <img src={socar} alt='' />
                    <img src={yelobank} alt='' />
                    <img src={spotify} alt='spotify' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tərəfdaşlar