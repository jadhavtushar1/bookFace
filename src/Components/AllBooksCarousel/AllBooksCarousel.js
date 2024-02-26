import BookCard from '../BookCard/BookCard'
import './AllBooksCarousel.css'
const AllBooksCarousel=()=>{
    return(
        <div className='allBooksParentContainer'>
        <div className='d-flex'>
        {Array.from({ length: 6 }).map((_, index) => (
             <BookCard key={index} />
         ))}
        </div>
        </div>
    )
}

export default AllBooksCarousel