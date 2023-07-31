import { useState } from "react";


const Section =({title,description,isVisible,setIsVisible})=>{

return(
    <div className="border border-black p-2 m-2">
    <h3 className="font-bold text-xl">{title}</h3>
    {isVisible ? (
        <button
        on onClick={()=>setIsVisible(false)}
        className ="cursor-pointer underline"
    >Hide</button> 
    ):(
<button
        on onClick={()=>setIsVisible(true)}
        className ="cursor-pointer underline"
    >Show</button>
    )}
{ isVisible && <p>{description}</p>}
</div>
    )};

const Instamart = () =>{
    const [visibleSection,setIsVisibleSection] = useState("Instamart");

return(
<div>
<h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
<Section
title ={"About instamart"}
description ={"The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum."}
isVisible={ visibleSection === "about"}
setIsVisible ={()=>setIsVisibleSection("about")}

></Section>
<Section
title ={"Team instamart"}
description ={"The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum."}
isVisible={ visibleSection === "team"}
setIsVisible ={()=>setIsVisibleSection("team")}

></Section>

<Section
title ={"Careers"}
description ={"The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum."}
isVisible={ visibleSection === "career"}
setIsVisible ={()=>setIsVisibleSection("career")}

></Section>

</div>


);
};
export default Instamart;