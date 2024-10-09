import React from 'react'
import ShowcaseElement from './ShowcaseElement'

const products = [
    {
        img: 'assets/img/coats.webp',
        name: 'Coats',
    },
    {
        img: 'assets/img/duffers.webp',
        name: 'Puffers',
    },
    {
        img: 'assets/img/bombers.webp',
        name: 'Bombers',
    },
    {
        img: 'assets/img/jackets.webp',
        name: 'Jackets',
    }
]

const CollectionShowcase: React.FC = () => {
    return (
        <div className='flex flex-wrap'>
            {products.map((item, i) => <ShowcaseElement key={i} item={item} />)}
        </div>
    )
}

export default CollectionShowcase