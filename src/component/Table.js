import React from 'react'
import Thead from './Thead';

function Table({head, todos, editTodo, deleteTodo}) {
  return (
    <div>        
        <table className="table">
            <Thead head={head}></Thead>
            <tbody>
            {todos.map((data, index) => {
                return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{data.content}</td>
                    <td>{data.date}</td>
                    <td>{data.state.toString()}</td>
                    <td className="flex justify-center">
                    <div className="text-center">
                        <button className="btn btn-danger w-20 mx-1" value={index} onClick={deleteTodo}>Sil</button>
                        <button className="btn btn-warning w-20 " value={index} onClick={editTodo}>Düzenle</button>
                    </div>
                    </td>
                </tr>
                );
            })}
            </tbody>
        </table>
  </div>
  )
}

export default Table