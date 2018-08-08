import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchProduct } from '../../reducers/manageFetchData'

class Home extends Component {
    componentDidMount() {
        this.load()
    }
    load() {
        this.props.dispatch(fetchProduct())
    }
    render() {
        var carsElements = this.props.allProduct.map((element, index) => {
            return index === 0 ?
                <li data-target="#carousel-id" data-slide-to={index} className="active" /> :
                <li data-target="#carousel-id" data-slide-to={index} className="" />
        })
        var carsProducts = this.props.allProduct.map((product, index) => {
            return <div key={index} className={index === 0 ? 'item active' : 'item'}>
                <img
                    alt={"Slide " + index}
                    src={product.imageUrl === "" ? "http://via.placeholder.com/300x300" : product.imageUrl}
                    style={{ width: 500, height: 500 }}
                />
                <div className="container">
                    <div className="carousel-caption">
                        {/* <h1>{product.name === null ? 'N/A' : product.name}</h1> */}

                    </div>
                </div>
            </div>
        })
        return (
            // <div id="carousel-id" className="carousel slide" data-ride="carousel">
            //     <ol className="carousel-indicators">
            //         <li data-target="#carousel-id" data-slide-to={0} className />
            //         <li data-target="#carousel-id" data-slide-to={1} className />
            //         <li data-target="#carousel-id" data-slide-to={2} className />
            //         <li data-target="#carousel-id" data-slide-to={3} className />
            //         <li data-target="#carousel-id" data-slide-to={4} className />
            //         <li data-target="#carousel-id" data-slide-to={5} className />
            //         <li data-target="#carousel-id" data-slide-to={6} className="active" />
            //     </ol>
            //     <div className="carousel-inner">
            //         <div className="item">
            //             <img data-src="holder.js/900x500/auto/#777:#7a7a7a/text:First slide" alt="First slide" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5MDAiIGhlaWdodD0iNTAwIj48cmVjdCB3aWR0aD0iOTAwIiBoZWlnaHQ9IjUwMCIgZmlsbD0iIzc3NyI+PC9yZWN0Pjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjQ1MCIgeT0iMjUwIiBzdHlsZT0iZmlsbDojN2E3YTdhO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjU2cHg7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+Rmlyc3Qgc2xpZGU8L3RleHQ+PC9zdmc+" />
            //             <div className="container">
            //                 <div className="carousel-caption">
            //                     <h1>so mot</h1>
            //                     <p>Note: If you're viewing this page via a <code>file://</code> URL, the "next" and "previous" Glyphicon buttons on the left and right might not load/display properly due to web browser security rules.</p>
            //                     <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
            //                 </div>
            //             </div>
            //         </div>
            //         <div className="item">
            //             <img data-src="holder.js/900x500/auto/#777:#7a7a7a/text:First slide" alt="First slide" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5MDAiIGhlaWdodD0iNTAwIj48cmVjdCB3aWR0aD0iOTAwIiBoZWlnaHQ9IjUwMCIgZmlsbD0iIzc3NyI+PC9yZWN0Pjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjQ1MCIgeT0iMjUwIiBzdHlsZT0iZmlsbDojN2E3YTdhO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjU2cHg7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+Rmlyc3Qgc2xpZGU8L3RleHQ+PC9zdmc+" />
            //             <div className="container">
            //                 <div className="carousel-caption">
            //                     <h1>so 2</h1>
            //                     <p>Note: If you're viewing this page via a <code>file://</code> URL, the "next" and "previous" Glyphicon buttons on the left and right might not load/display properly due to web browser security rules.</p>
            //                     <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
            //                 </div>
            //             </div>
            //         </div>
            //         <div className="item">
            //             <img data-src="holder.js/900x500/auto/#777:#7a7a7a/text:First slide" alt="First slide" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5MDAiIGhlaWdodD0iNTAwIj48cmVjdCB3aWR0aD0iOTAwIiBoZWlnaHQ9IjUwMCIgZmlsbD0iIzc3NyI+PC9yZWN0Pjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjQ1MCIgeT0iMjUwIiBzdHlsZT0iZmlsbDojN2E3YTdhO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjU2cHg7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+Rmlyc3Qgc2xpZGU8L3RleHQ+PC9zdmc+" />
            //             <div className="container">
            //                 <div className="carousel-caption">
            //                     <h1>so 3</h1>
            //                     <p>Note: If you're viewing this page via a <code>file://</code> URL, the "next" and "previous" Glyphicon buttons on the left and right might not load/display properly due to web browser security rules.</p>
            //                     <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
            //                 </div>
            //             </div>
            //         </div>
            //         <div className="item">
            //             <img data-src="holder.js/900x500/auto/#777:#7a7a7a/text:First slide" alt="First slide" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5MDAiIGhlaWdodD0iNTAwIj48cmVjdCB3aWR0aD0iOTAwIiBoZWlnaHQ9IjUwMCIgZmlsbD0iIzc3NyI+PC9yZWN0Pjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjQ1MCIgeT0iMjUwIiBzdHlsZT0iZmlsbDojN2E3YTdhO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjU2cHg7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+Rmlyc3Qgc2xpZGU8L3RleHQ+PC9zdmc+" />
            //             <div className="container">
            //                 <div className="carousel-caption">
            //                     <h1>so 4</h1>
            //                     <p>Note: If you're viewing this page via a <code>file://</code> URL, the "next" and "previous" Glyphicon buttons on the left and right might not load/display properly due to web browser security rules.</p>
            //                     <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
            //                 </div>
            //             </div>
            //         </div>
            //         <div className="item">
            //             <img data-src="holder.js/900x500/auto/#666:#6a6a6a/text:Second slide" alt="Second slide" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5MDAiIGhlaWdodD0iNTAwIj48cmVjdCB3aWR0aD0iOTAwIiBoZWlnaHQ9IjUwMCIgZmlsbD0iIzY2NiI+PC9yZWN0Pjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjQ1MCIgeT0iMjUwIiBzdHlsZT0iZmlsbDojNmE2YTZhO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjU2cHg7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+U2Vjb25kIHNsaWRlPC90ZXh0Pjwvc3ZnPg==" />
            //             <div className="container">
            //                 <div className="carousel-caption">
            //                     <h1>so 5</h1>
            //                     <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
            //                     <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
            //                 </div>
            //             </div>
            //         </div>
            //         <div className="item active">
            //             <img data-src="holder.js/900x500/auto/#555:#5a5a5a/text:Third slide" alt="Third slide" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5MDAiIGhlaWdodD0iNTAwIj48cmVjdCB3aWR0aD0iOTAwIiBoZWlnaHQ9IjUwMCIgZmlsbD0iIzU1NSI+PC9yZWN0Pjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIHg9IjQ1MCIgeT0iMjUwIiBzdHlsZT0iZmlsbDojNWE1YTVhO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjU2cHg7Zm9udC1mYW1pbHk6QXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+VGhpcmQgc2xpZGU8L3RleHQ+PC9zdmc+" />
            //             <div className="container">
            //                 <div className="carousel-caption">
            //                     <h1>so 6.</h1>
            //                     <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
            //                     <p><a className="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            //     <a className="left carousel-control" href="#carousel-id" data-slide="prev"><span className="glyphicon glyphicon-chevron-left" /></a>
            //     <a className="right carousel-control" href="#carousel-id" data-slide="next"><span className="glyphicon glyphicon-chevron-right" /></a>
            // </div>

            <div className="container">

                <div className="jumbotron">
                    <div className="container text-center">
                        <h1>New Arrival</h1>
                    </div>
                </div>

                <div className="jumbotron">
                    <div className="container text-center">
                        <div id="carousel-id" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                {carsElements}
                                {/* <li data-target="#carousel-id" data-slide-to={0} />
                                <li data-target="#carousel-id" data-slide-to={1} />
                                <li data-target="#carousel-id" data-slide-to={2} /> */}
                            </ol>
                            <div className="carousel-inner">
                                {carsProducts}
                                {/* <div className="item">
                                    <img alt="First slide" src="http://mediad.publicbroadcasting.net/p/kunm/files/styles/x_large/public/201801/Anonymous.jpg" />
                                    <div className="container">
                                        <div className="carousel-caption">
                                            <h1>Example headline.</h1>
                                            <p>Note: If you're viewing this page via a <code>file://</code> URL, the "next" and "previous" Glyphicon buttons on the left and right might not load/display properly due to web browser security rules.</p>
                                            <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
                                        </div>
                                    </div>
                                </div> */}

                            </div>
                            <a className="left carousel-control" href="#carousel-id" data-slide="prev"><span className="glyphicon glyphicon-chevron-left" /></a>
                            <a className="right carousel-control" href="#carousel-id" data-slide="next"><span className="glyphicon glyphicon-chevron-right" /></a>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        allProduct: state.manageProduct
    }
}
export default connect(mapStateToProps)(Home);