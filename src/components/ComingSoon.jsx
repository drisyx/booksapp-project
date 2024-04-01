import React from 'react'
import BookNavbar from './BookNavbar'

const ComingSoon = () => {
    return (
        <div>
            <BookNavbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">


                                <div class="card" >
                                    <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQso8_15kYgKMPemhCZ4QrYU8vEshDXdMOb30gOryqYHOlJfr-F" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Middlemarch</h5>
                                        <p class="card-text">George Eliot</p>
                                        <a href="#" class="btn btn-primary">Pre-order</a>
                                    </div>
                                </div>

                            </div>
                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">

                                <div class="card" >
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDUbv_5rNNcag-ylnJYDGLvVzNmPs_wjIjAkNjsqEgrb8Dr4Y-" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">Persuasion</h5>
                                        <p class="card-text">Jane Austen</p>
                                        <a href="#" class="btn btn-primary">Pre-order</a>
                                    </div>
                                </div>



                            </div>
                            <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">

                                <div class="card" >
                                    <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQz6HOArKDJfD3vgK6TZ8ITIITnrPfGhcdaG3QqWnu9rD497z9X" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">The Time Machine</h5>
                                        <p class="card-text">H. G. Wells</p>
                                        <a href="#" class="btn btn-primary">Pre-order</a>
                                    </div>
                                </div>




                            </div>
                        </div>

                    </div>
                </div>
            </div>







        </div>
    )
}

export default ComingSoon