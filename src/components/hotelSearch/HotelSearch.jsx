import "./hotelsearch.css"

const HotelSearch = () => {
  return (
    <div className="searchItem">
        <img src="https://cf.bstatic.com/xdata/images/hotel/square200/374987469.webp?k=eafd5002014e1644d433538500779bf2bd283e1ca7e58d3455eb156adea480ed&o=" 
        alt="" 
        className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle"> Tower Street Apartments</h1>
            <span className="siDistance">500m from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">Studio Apartment with Air conditioning</span>
            <span className="siFeatures">Entire studio | 1 bathroon | 210 sqft full bed</span>
            <span className="siCancelOp">Free cancellation</span>
            <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailText">
                <span className="siPrice">$ 112</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button>Compare Price</button>
            </div>
        </div>
    </div>
  )
}

export default HotelSearch