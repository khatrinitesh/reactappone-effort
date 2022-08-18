import React from 'react';



export default function CustomApp() {
  return (
    <div>
        <Example/>
    </div>
  )
}



function Example(){
    const user = [
        {
            name:'nitesh',school:{name:'fellowship school',location:'gowalia tank',},        
        },
        {
            name:'sameet',school:{name:'bharda school',location:'fort',},        
        },
    ]
    return(
        <>
        ss
         {user.map((item,i) => {
            return(
                <div className="box__box1" key={i}>
                    <h3>{item.name}</h3>
                    <p>{item.school?.name}</p>
                </div>
            )
         })}
        </>
    )
}