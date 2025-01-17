import { useState } from "react";

function Card({id,name,info,image,price, removeTour}){
    const [readMore,setReadMore] = useState(false);
    const description = `${info.substring(0,200)}...`

    function readMoreHandler(){
        setReadMore(!readMore);
    }

    return(
        <div className="card">
            <img src={image} className="image" alt="place"></img>
            <div className="div-info">
                <div className="tour-details">
                    <h4 className="tour-price">{price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div>
                    {description}
                    <span className="read-more" onClick={readMoreHandler}>
                        {readMore ? 'Show Less' : 'Read More'}
                    </span>
                </div>
            </div>
            <button className="btn-red" onClick={()=>removeTour(id)}>
                Not Interested
            </button>
        </div>
    );
}

export default Card;