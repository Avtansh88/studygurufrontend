import React from 'react'
import "./paymentsuccess.css"
import { Link, useParams } from 'react-router-dom'
const PaymentSuccess = ({user}) => {
    const params=useParams()
  return (
    <div className="payment-success-page">
      {user && <div className="success-message">
        <h2>Payment Successful</h2>
        <p>Your Course Subscription has been activated</p>
        <p>Refrence no. - {params.id}</p>
        <Link to={`/${user._id}/dashboard`} className="common-btn">Go To DashBoard</Link>
        </div>}
    </div>
  )
}

export default PaymentSuccess
