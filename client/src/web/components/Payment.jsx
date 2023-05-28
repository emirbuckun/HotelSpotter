import React, { useState } from "react";

function Payment() {
  const [cardName, setCardName] = useState("");
  const [cardNum, setCardNum] = useState("");
  const [cardExp, setCardExp] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ödeme işlemlerini burada gerçekleştirin veya sunucuya gönderin
  };

  return (
    <div className="container">
      <div className="py-5 text-center">
        <h2>Payment</h2>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <form className="needs-validation" onSubmit={handleSubmit}>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between">
                <span>Total price(USD)</span>
                <strong>$200</strong>
              </li>
            </ul>

            <hr className="mb-4" />

            <div className="mb-3">
              <label htmlFor="cardName">Name on the card</label>
              <input
                size="25"
                type="text"
                name="name"
                id="cardName"
                value={cardName}
                placeholder="Name"
                className="form-control"
                onChange={(e) => setCardName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="cardNum">Card Number</label>
              <input
                type="text"
                id="cardNum"
                minLength="19"
                maxLength="19"
                value={cardNum}
                className="form-control"
                placeholder="0000 0000 0000 0000"
                pattern="^(?=(\D*\d){16}\D*$)[\d ]*$"
                onChange={(e) => setCardNum(e.target.value)}
                required
              />
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="cardExp">Expiration Date</label>
                <input
                  type="text"
                  id="cardExp"
                  minLength="5"
                  maxLength="5"
                  value={cardExp}
                  placeholder="MM/YY"
                  className="form-control"
                  pattern="^(0[1-9]|[12][0-9]|3[01])[\/][0-9]{2}$"
                  onChange={(e) => setCardExp(e.target.value)}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="cvv">CVV</label>
                <input
                  type="text"
                  className="form-control"
                  id="cvv"
                  placeholder=""
                  value={cvv}
                  minLength="3"
                  maxLength="3"
                  pattern="\d{3}"
                  onChange={(e) => setCvv(e.target.value)}
                  required
                />
              </div>
            </div>

            <hr className="mb-4" />

            <div className="py-2 text-center">
              <button className="btn btn-primary btn-lg" type="submit">
                Pay
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;
