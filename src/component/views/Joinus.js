import ReactPlayer from 'react-player'
import './styles/joinus.css'

const Joinus = () => {
    return (
        <div className="joinus">
            <div className='player-wrapper'>
                <ReactPlayer
                    className='react-player'
                    url='https://youtu.be/HG68Ymazo18'
                    width='100%'
                    height='100%'
                    controls={true}
                    muted={true}
                    playing={true}
                    style={{opacity:'0.9'}}
                />
            </div>
            <div className="text-over">
                <p>Helping fast-moving innovators scale with purpose </p>
                <form>
                    <button type="submit" className='btns'>JOIN US</button>
                </form>
            </div>
        </div>
    );
}

export default Joinus;