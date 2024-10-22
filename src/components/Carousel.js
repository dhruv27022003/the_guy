import React from 'react';
// import '../../public/static/1.avif';
const Carousel = () => {
  return (
    <div style={{ height: '400px' }}>
      <div id="myCarousel" className="carousel slide h-100" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-label="Slide 1"
            aria-current="true"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner h-100">
          <div className="carousel-item active h-100">
            <img
              src="/static/1.avif"
              alt="First slide"
              className="d-block w-100 h-100"
            />
            <div className="container p-3">
              <div className="carousel-caption text-start">
                <h1>Example headline.</h1>
                <p>
                  <a className="btn btn-lg btn-primary" href="#">
                    ADD YOUR PROFILE
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="carousel-item h-100">
            <img
              src="/static/2.jpg"
              alt="Second slide"
              className="d-block w-100 h-100"
            />
            <div className="container">
              <div className="carousel-caption">
                <h1>Another example headline.</h1>
                <p>
                  <a className="btn btn-lg btn-primary" href="#">
                    Learn more
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="carousel-item h-100">
            <img
              src="/static/3.webp"
              alt="Third slide"
              className="d-block w-100 h-100"
            />
            <div className="container">
              <div className="carousel-caption text-end">
                <h1>One more for good measure.</h1>
                <p>
                  <a className="btn btn-lg btn-primary" href="#">
                    Browse gallery
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
