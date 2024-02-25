import "./footer.css"

const Footer = () => {
  return (
    <div className="footer">
        <div className="fLists">
            <ul className="fList">
                <li className="fListItem">Flights</li>
                <li className="fListItem">Stay</li>
                <li className="fListItem">Hotel</li>
            </ul>

            <ul className="fList">
                <li className="fListItem">Outing</li>
                <li className="fListItem">Car Rental</li>
                <li className="fListItem">Taxi</li>
            </ul>

            <ul className="fList">
                <li className="fListItem">Parks</li>
                <li className="fListItem">Flight finder</li>
                <li className="fListItem">Careers</li>
            </ul>

            <ul className="fList">
                <li className="fListItem">Homes</li>
                <li className="fListItem">Apartments</li>
                <li className="fListItem">Guest Houses</li>
            </ul>

            <ul className="fList">
                <li className="fListItem">Privacy Policy</li>
                <li className="fListItem">Disclaimer</li>
                <li className="fListItem">Refund Policy</li>
                <li className="fListItem">Refund Terms and Conditions</li>
            </ul>
        </div>
        <div className="fText">Copyright &copy; 2024 Hotel Booking</div>
    </div>
  )
}

export default Footer