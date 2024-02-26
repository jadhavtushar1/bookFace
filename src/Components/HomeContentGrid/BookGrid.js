import './BookGrid.css'
import BookCard from '../BookCard/BookCard'
const BookGrid = ()=>{
    return(
    <div className='picksParentContainer'>
        <div className='bookGridarent wrapCards'>
        {Array.from({ length: 6 }).map((_, index) => (
             <BookCard key={index} />
         ))}
    </div>
    <div className='todaysPick'>

    </div>
    </div>
    )
}
export default BookGrid