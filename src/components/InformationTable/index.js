import React from 'react'

const InformationTable = props => {
  return (
    <div>
      <h2>Listing</h2>
      {props.listings.map((person, index) => {
        return (
          <div key={index}>
            <ul>
              <li>
                {`${person.lastName}, ${person.firstName}`}
                <p>{person.phoneNumber}</p>
              </li>
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default InformationTable
