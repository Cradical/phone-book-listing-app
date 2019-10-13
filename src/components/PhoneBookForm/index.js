import React from 'react'

const PhoneBookForm = props => {
  return (
    <div>
      <h2>Phone Book Listing Form</h2>
      <form onSubmit={props.createListing}>
        <label>
          First Name:
          <input type='text' placeholder='First Name' />
        </label>
        <label>
          Last Name:
          <input type='text' placeholder='Last Name' />
        </label>
        <label>
          Phone Number:
          <input type='text' placeholder='Last Name' />
        </label>
        <input type='submit' value='submit' />
      </form>
    </div>
  )
}

export default PhoneBookForm
