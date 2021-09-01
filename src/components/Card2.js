import React from 'react'
import skater2 from "../images/bg.png"
import image7 from "../images/image7.png"
import image5 from "../images/image5.png"

function Card2() {
    return (
        <section className="">
            <div className='edit'>
                <div className="with ml card-image">
                    <img src={skater2} alt='skater 2'/>
                </div>
                <div className="with card-image">
                    <img src={skater2} alt='skater 2'/>
                </div>
            </div>
            {/* <div className="col card-image">
                <img src={skater2} alt='skater 2'/>
            </div> */}
            <h6 className="mt-4">Most Watched</h6>

            <div className='edit'>
                <div className="row mr-1 with">
                    <div className="col align-self-center">
                        <img src={image7} alt=""/>
                    </div>
                    <div className="col align-self-center p-0">
                        <p className="row m-0 top">Prepare your first skateboard jump</p>
                        <p className="row m-0 pt-3 pb-1 mid">Jordan Wise</p>
                        <p className="row m-0 bot">25,908 views ~ 2 days ago</p>
                    </div>
                </div>
                {/*  */}
                <div className="row with my-4">
                    <div className="col align-self-center">
                        <img src={image5} alt=""/>
                    </div>
                    <div className="col align-self-center p-0">
                        <p className="row m-0 top">Prepare your first skateboard jump</p>
                        <p className="row m-0 pt-3 pb-1 mid">Jordan Wise</p>
                        <p className="row m-0 bot">25,908 views ~ 2 days ago</p>
                    </div>
                </div>
            </div>
            {/*  */}

            <div className="edit">
                <div className="row mr-1 with my-4">
                    <div className="col align-self-center">
                        <img src={image5} alt=""/>
                    </div>
                    <div className="col align-self-center p-0">
                        <p className="row m-0 top">Prepare your first skateboard jump</p>
                        <p className="row m-0 py-3 mid">Jordan Wise</p>
                        <p className="row m-0 bot">25,908 views ~ 2 days ago</p>
                    </div>
                </div>

                <div className="row with">
                    <div className="col align-self-center">
                        <img src={image7} alt=""/>
                    </div>
                    <div className="col align-self-center p-0">
                        <p className="row m-0 top">Prepare your first skateboard jump</p>
                        <p className="row m-0 pt-3 pb-1 mid">Jordan Wise</p>
                        <p className="row m-0 bot">25,908 views ~ 2 days ago</p>
                    </div>
                </div>
            </div>
            <div className="edit">
                <div className="row mr-1 with my-4">
                    <div className="col align-self-center">
                        <img src={image5} alt=""/>
                    </div>
                    <div className="col align-self-center p-0">
                        <p className="row m-0 top">Prepare your first skateboard jump</p>
                        <p className="row m-0 py-3 mid">Jordan Wise</p>
                        <p className="row m-0 bot">25,908 views ~ 2 days ago</p>
                    </div>
                </div>

                <div className="row with">
                    <div className="col align-self-center">
                        <img src={image7} alt=""/>
                    </div>
                    <div className="col align-self-center p-0">
                        <p className="row m-0 top">Prepare your first skateboard jump</p>
                        <p className="row m-0 pt-3 pb-1 mid">Jordan Wise</p>
                        <p className="row m-0 bot">25,908 views ~ 2 days ago</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Card2
