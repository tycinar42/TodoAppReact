import React from 'react'

function Thead({head}) {
  return (
    <thead>
        <tr>
            {
                head.map((data, index) => (
                    <th key = {index} scope="col">{data}</th>
                ))
            }
        </tr>
    </thead>        
  )
}

export default Thead