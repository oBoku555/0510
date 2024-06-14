/*
* @author 蘇新宇 <gmail.com>
*/
import Image from "next/image";

export default function CustomCard({item}){
    return(
        <div className="border" >
            <img fill={true} src = {item.Picture.PictureUrl1} alt={item.Picture.PictureDescription1} ></img>
            <div>{item.ScenicSpotName}</div>
        </div>
    )

}