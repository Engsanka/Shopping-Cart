import React, { useEffect, useState } from "react";

function Payment() {
  const initialPayment = {
    evc: false,
    zaad: false,
    sahal: false,
  };
  const [payment, setPayment] = useState(initialPayment);
  const [updated, setUpdated] = useState(false);
  useEffect(() => {},[updated]);
  return (
    <div>
      <h2>Pay with </h2>
      <div className="payment-cards">
        <div
          className={`payment-card ${payment.evc && "selected"}`}
          onClick={() => setPayment({...initialPayment, evc: true })}
        >
          <h3>EVC Plus</h3>
        </div>
        <div
          className={`payment-card ${payment.zaad && "selected"}`}
          onClick={() => setPayment({ ...initialPayment, zaad: true })}
        >
          <h3>Zaad Service</h3>
        </div>
        <div
          className={`payment-card ${payment.sahal && "selected"}`}
          onClick={() => setPayment({ ...initialPayment, sahal: true })}
        >
          <h3>Sahal</h3>
        </div>
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="+2526....."
          />
          <button className="btn-procced">Procced</button>
        </form>
      </div>
    </div>
  );
}

export default Payment;
