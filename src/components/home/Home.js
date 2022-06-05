import { useState,} from 'react'
import decorationBar from '../resources/Bar.png'
import '../home/Home.css'


function HomePage(props) {
    const [ logBar , setLogBar ] = useState(false)

    function plusElem () {
        setLogBar(!logBar)
    }

    function logOut () {
        window.location.assign('/login')
    }

    return (
        <div>
            <header>
                <img className="decorationBar" src={decorationBar} alt="Bar"/>
                <div className='userName'>
                    <h2 onClick={plusElem} className='userNameText'>OS</h2>
                    {logBar? <ul onClick={logOut} className='logOutMenu'>Logout</ul> : null}
                </div>

            </header>;
        </div>
    )
}

export default HomePage;