import React from 'react'
import { DiScriptcs } from 'react-icons/di';

const Pic = () => {
    const picData = [
        { id: 1, name: 'First', price: 25000, description: 'Coffi', image: '/1.jpg' },
        { id: 2, name: '2nd', price: 20000, description: 'Flower', image: '/2.jpg' },
        { id: 3, name: '3rd', price: 15000, description: 'Volcano', image: '/3.jpg' },
        { id: 4, name: '4th', price: 10000, description: 'Dog', image: '/4.jpg' },
        { id: 5, name: '5th', price: 5000, description: 'Hight', image: '/5.jpg' },
        { id: 6, name: '6th', price: 5000, description: 'Cellebrat', image: '/6.jpg' },
    ]
    return (

        <div>
            <div className="pics">
                {picData.map((pic) => (
                    <div key={pic.id} className="pic-card">
                        <img src={pic.image} alt={pic.name} />
                        <h3>{pic.name}</h3>
                        <p>{pic.description}</p>
                        <div className="price">${pic.price}</div>
                        <button>Add to cart</button>
                    </div>
                ))}
            </div>
        </div>


    );
}

export default Pic