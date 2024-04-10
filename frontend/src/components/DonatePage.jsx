import  '../styles/DonatePage.scss';
import TopNavigation from '../components/TopNavigation';

const DonatePage = () => {
  return (
    
    <div className="donate-page">
      <TopNavigation />
      <div className="donate-form">
      <h2 className="donate-header">Donate</h2>
      <div className="donation-amount">
  <h2>Donation Amount</h2>
  <input type="radio" id="amount2" name="donationAmount" value="2" />
  <label htmlFor="amount2">$2</label>

  <input type="radio" id="amount5" name="donationAmount" value="5" />
  <label htmlFor="amount5">$5</label>

  <input type="radio" id="amount10" name="donationAmount" value="10" />
  <label htmlFor="amount10">$10</label>

  <input type="radio" id="amount20" name="donationAmount" value="20" />
  <label htmlFor="amount20">$20</label>

  <input type="radio" id="amount50" name="donationAmount" value="50" />
  <label htmlFor="amount50">$50</label>

  <input type="radio" id="amount100" name="donationAmount" value="100" />
  <label htmlFor="amount100">$100</label>

  <input type="radio" id="customAmount" name="donationAmount" value="custom" />
  <label htmlFor="customAmount">Custom Amount $</label>
  <input type="number" id="customAmountInput" name="customAmount" />
</div>
<div className='personal-details'>
      <form>
      <h2>Personal Details</h2>
  <input type="text" placeholder="Name" />
  <input type="text" placeholder="Street Address" />
  <input type="text" placeholder="Address Line 2" />
  <input type="text" placeholder="Town/City" />
  <select>
    <option value="" disabled selected>Select Province</option>
    <option value="AB">Alberta</option>
    <option value="BC">British Columbia</option>
    <option value="MB">Manitoba</option>
    <option value="NB">New Brunswick</option>
    <option value="NL">Newfoundland and Labrador</option>
    <option value="NS">Nova Scotia</option>
    <option value="NT">Northwest Territories</option>
    <option value="NU">Nunavut</option>
    <option value="ON">Ontario</option>
    <option value="PE">Prince Edward Island</option>
    <option value="QC">Quebec</option>
    <option value="SK">Saskatchewan</option>
    <option value="YT">Yukon</option>
  </select>
  <input type="text" placeholder="Postal Code" />
  <input type="text" placeholder="Country" />

</form>
</div>

<div className="payment-details">
  <h2>Payment Details</h2>
  <input type="text" placeholder="Card Number" />
  <input type="text" placeholder="Expiry (MM/YY)" />
  <input type="text" placeholder="CVV" />
  <input type="text" placeholder="Name On Card" />
</div>
<button className="donate-button" type="submit">Confirm Donation</button>

      </div>
    </div>
  );
}

export default DonatePage;