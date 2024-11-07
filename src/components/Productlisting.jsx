import React from "react";

function Productlisting(){
    let Products= [
        {name: "Bat", price:"70000", link:"https://www.alisports.pk/products/ca-pro-8000-cricket-bat", src:"https://www.alisports.pk/cdn/shop/files/202312271044441728218105.jpg?v=1707646195&width=1445"},
        {name: "Ball", price:"60000", link:"https://www.britannica.com/sports/ball-sports", src:"https://cdn.britannica.com/68/195168-050-BBAE019A/football.jpg"},
        {name: "Gloves", price:"50000", link:"https://alpinebear.net/products/leather-gloves", src:"https://alpinebear.net/cdn/shop/files/shopifydressglove.jpg?v=1699698616"},

    ];
    return (
        <div className='container'>
            {
                Products.map((p)=>{
                    return <Products {...p} />
                })
            }
        </div>
    )
}

export default Productlisting