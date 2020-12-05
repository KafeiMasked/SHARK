import React, {Component} from 'react'

const TableHeader = () => {
  return (
    <thread>
      <tr>
        <th>Name</th>
        <th>Talent</th>
      </tr>
    </thread>
  )
}

const TableBody = (props) => {
  const rows = props.teamPartyData.map(((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.talent}</td>
        <td>
          <button onClick={() => props.removeTeamParty(index)}>Delete</button>
        </td>
      </tr>
    )
  }))
  return <tbody>{rows}</tbody>
}

const Table = (props) => {
  const {teamPartyData, removeTeamParty} = props
  return (
    <table>
      <TableHeader />
      <TableBody teamPartyData={teamPartyData} removeTeamParty={removeTeamParty}/>
    </table>
  )
}

export default Table