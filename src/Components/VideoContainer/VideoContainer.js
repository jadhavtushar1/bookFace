import './VideoContainer.css'
const VideoContainer = ()=>{
    return (
        <div className="videoParentContainer ">
            <div className='d-flex align-items-center'>
            <iframe width="560" height="315" 
            src="https://www.youtube.com/embed/F63h3v9QV7w?si=jXrZay8mwQF0lH-c" 
            title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    )
}

export default VideoContainer