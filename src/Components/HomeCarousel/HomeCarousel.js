import './HomeCArousel.css'
import React from 'react';
// import leftArrowIcon from '../../Assets/MainCarouselArrow.svg'
import RightArrowIcon from '../../Assets/MainCarouselArrow2.svg'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CircleIcon from '@mui/icons-material/Circle';
import { colors } from '@mui/material';
import SampleImage from '../../Assets/image 1.svg'

const HomeCarousel = ()=>{
    return(
        <div className='carousel-parent'>
            <div>
                {/* <div>
                    <ArrowBackIosIcon className='arrowIcon arrowLeftPos'/>
                    <ArrowForwardIosIcon className='arrowIcon arrowRightPos'/>
                    <div className='indicatorDots'>
                        <CircleIcon sx={{color:'#544242'}}/>
                        <CircleIcon sx={{color:'#544242'}}/>
                        <CircleIcon sx={{color:'#928181'}}/>
                        <CircleIcon sx={{color:'#544242'}}/>
                    </div>

                </div> */}
                <div className='carouselContentParent'>
                    <div className='imageContainer'>
                        <img src={SampleImage} className='carouselImage'/>
                    </div>
                    <div className='contentContainer'>
                        <h2 className='bookTitle'>Crime And Punishment Hardcover – 20 May 1993</h2>
                        <h3 className='bookAuthor'>by Fyodor Dostoevsky (Author), Larissa Volokhonsky (Translator),
                            Richard Pevear (Translator)</h3>
                        <h3 className='bookDesc'>Crime and Punishment follows the mental anguish and moral dilemmas of 
                            Rodion Raskolnikov, an impoverished ex-student in Saint Petersburg who 
                            plans to kill an unscrupulous pawnbroker, an old woman who stores money and
                            valuable objects in her flat. He theorises that wth the money he could liberate 
                            himself from poverty and go on to perform great deeds, and seeks to convince 
                            himself that certain crimes are justifiable if they are committed in order to 
                            remove obstacles to the higher goals of 'extraordinary' men...</h3>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default HomeCarousel