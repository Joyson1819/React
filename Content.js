
import React from 'react';
const Content=()=>{
    function handdleContent()
    {
    const content=["first", "second", "third", "fourth"];
     const randomIndex = Math.floor(Math.random() * content.length);
    return(content[randomIndex]);
}
return(
        <div>
            <h1> you are login into the page{handdleContent()}</h1>
        </div>
    )

};
export default Content;