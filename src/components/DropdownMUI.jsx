import React, {useRef, useState } from "react";
import {MdKeyboardArrowDown} from "react-icons/md";
import { IconContext } from "react-icons";
import "./dropdownMUI-style.css"

const TitleSelect =(props)=>{
    const {klik,nilai, title} = props;
    return(
        <>
             <div className={nilai?"select-btn":"select-btn-false"} onClick={klik}>{title}
                {nilai?<IconContext.Provider  value={{ size:"25px", style:{} }}>
                <MdKeyboardArrowDown/>
                </IconContext.Provider>:null}
             </div>
        </>
    )}



const DropdownDestination =(props)=> {
    const {borderRadiusx} = props;
    const data = ["Pekanbaru", "Indragiri Hulu", "Kuansing", "Batam"]
    const [value,setValue] = useState("");
    const [option,setOption] = useState(true) 
    const itemOption = useRef();
    const titleSelect = useRef();
    const selectContainer = useRef();
    const z = useRef()


    const hideOption =()=>{
        //untuk sembunyikan title Select ketika diklik pertama kali
        if (option) {   
            setOption(false)
        }
        else if (value) {
             titleSelect.current.remove()
        }
        else {
            itemOption.current.prepend();
            setOption(true)
            selectContainer.current.append(titleSelect.current)
        }}

    return (
        <>
            <div className="bod">
                <div className="select-container-style">
                    <fieldset ref={selectContainer} onClick={()=>hideOption()} className="select-menu" style={{borderRadius:borderRadiusx}}>
                        <div className="select-title-style" ref={titleSelect}>
                            <TitleSelect title={option?"Destination":"Choose place"} nilai="true"/>
                        </div>
                       
                        {option?null:<legend ref={z} className="legend-style">Destination</legend>}
                        <div className={value?"select-value-style":"hidden"} onClick={()=>setOption(true)} >
                            <TitleSelect  title={value} nilai={value}/>
                        </div>
                    </fieldset>
                    <ul ref={itemOption} className={option?"hidden":"option-menu"}>
                        {data.map((e)=>{
                            return(
                                <li key={e.toString()} className={option?"hidden":"option-list"} onClick={()=>{setValue(e);setOption(!option);option?itemOption.current.remove():itemOption.current.prepend();titleSelect.current.remove()}}>{e}</li>   
                            )  
                        })}
                    </ul>
                    {console.log(value)}
                </div>
            </div>
            </>
    )
}



export default DropdownDestination;