import React from 'react'

export default function Button(props) {
    const {text, liste, varriant} = props;
    const {name, id} = props.user;

    // 2. YÖNTEM
    const selectVarriant = () => {
        switch(varriant) {
            case 'warning':
                return(            
                    <button
                        type="button"
                        className="hover:bg-yellow-800 flex flex-col m-1 p-1 
                        rounded font-medium cursor-pointer bg-yellow-400 text-white"
                        >
                        {text} {varriant} {liste === undefined ? "" : liste[0]} {name}
                    </button>);
                
            case 'danger':
                return(            
                <button
                        type="button"
                        className="hover:bg-red-800 flex flex-col m-1 p-1 
                        rounded font-medium cursor-pointer bg-red-400 text-white"
                        >
                        {text} {varriant} {liste === undefined ? "" : liste[0]} {name}
                    </button>);
            case 'success':
                return(            
                    <button
                        type="button"
                        className="hover:bg-green-800 flex flex-col m-1 p-1 
                        rounded font-medium cursor-pointer bg-green-400 text-white"
                        >
                        {text} {varriant} {liste === undefined ? "" : liste[0]} {name}
                    </button>);
            default:
                return(            
                    <button
                        type="button"
                        className="hover:bg-gray-800 flex flex-col m-1 p-1 
                        rounded font-medium cursor-pointer bg-gray-400 text-white"
                        >
                        {text} {varriant} {liste === undefined ? "" : liste[0]} {name}
                    </button>);                    
        }
    }

    // 3.YÖNTEM
    const selectVarriant2 = () => {
        switch(varriant) {
            case 'warning':
                return 'hover:bg-yellow-800 bg-yellow-400';
            case 'danger':
                return 'hover:bg-red-800 bg-red-400';
            case 'success':
                return 'hover:bg-green-800 bg-green-400';
            default:
                return 'hover:bg-gray-800 bg-gray-400';
        }
    }
    const classValues = selectVarriant2() + ' flex flex-col m-1 p-1 rounded font-medium cursor-pointer text-white';
  return (
 /*   1.YÖNTEM
    <div>
        {
            props.varriant === 'warning' ?
            <button
            type="button"
            className="hover:bg-yellow-800 flex flex-col m-1 p-1 
            rounded font-medium cursor-pointer bg-yellow-400 text-white"
            >
            {text} {varriant} {liste === undefined ? "" : liste[0]} {name}
            </button>
            :
            <button
            type="button"
            className="hover:bg-red-800 flex flex-col m-1 p-1 
            rounded font-medium cursor-pointer bg-red-400 text-white"
            >
            {text} {varriant} {liste === undefined ? "" : liste[0]} {id}
            </button>                        
        }
        
    </div>
*/
/*
// 2.YÖNTEM
       <div>{selectVarriant()}</div>

*/

//  3. YÖNTEM
    <button
    type="button"
    className = {classValues}
    >
    {text} {varriant} {liste === undefined ? "" : liste[0]} {name} {id}
    </button>
  )
}
