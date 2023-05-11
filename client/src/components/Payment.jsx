import React, { useState } from "react";

function Payment() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [ccName, setCcName] = useState("");
  const [ccNumber, setCcNumber] = useState("");
  const [ccExpiration, setCcExpiration] = useState("");
  const [ccCvv, setCcCvv] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ödeme işlemlerini burada gerçekleştirin veya sunucuya gönderin
  };

  return (
    <div className="container">
      <div className="py-5 text-center">
        <h2>Payment form</h2>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <form className="needs-validation" noValidate onSubmit={handleSubmit}>
            <ul className="list-group mb-3">
              <li className="list-group-item d-flex justify-content-between">
                <span>Total price(USD)</span>
                <strong>$200</strong>
              </li>
            </ul>

            <hr className="mb-4" />

            <div className="mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="example@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="cc-name">Name on card</label>
              <input
                type="text"
                className="form-control"
                id="cc-name"
                placeholder=""
                value={ccName}
                onChange={(event) => setCcName(event.target.value)}
                required
              />

              <div className="invalid-feedback">Name on card is required.</div>
            </div>
            <div className="mb-3">
              <label htmlFor="cc-number">Credit card number</label>
              <input
                type="text"
                className="form-control"
                id="cc-number"
                placeholder=""
                value={ccNumber}
                onChange={(event) => setCcNumber(event.target.value)}
                required
              />
              <div className="invalid-feedback">
                Credit card number is required.
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="cc-expiration">Expiration Date</label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-expiration"
                  placeholder=""
                  value={ccExpiration}
                  onChange={(event) => setCcExpiration(event.target.value)}
                  required
                />
                <div className="invalid-feedback">
                  Expiration date required.
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="cc-cvv">CVV</label>
                <input
                  type="text"
                  className="form-control"
                  id="cc-cvv"
                  placeholder=""
                  value={ccCvv}
                  onChange={(event) => setCcCvv(event.target.value)}
                  required
                />
                <div className="invalid-feedback">Security code required.</div>
              </div>
            </div>
            <hr className="mb-4" />

            <div className="py-2 text-center">
              <button
                className="btn btn-secondary btn-lg btn-block "
                type="submit"
              >
                Continue to Payment
              </button>
            </div>
          </form>
        </div>
      </div>

      <footer className="my-5 pt-5 text-muted text-center text-small">
        <p className="mb-1">&copy; 2023-HotelSpotter</p>
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#">Privacy</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Payment;
