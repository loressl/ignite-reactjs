import { memo, useState } from 'react'
import { AddProductToWishlistProps } from './AddProductToWishlist'
import dynamic from 'next/dynamic'

// react => lazy
const AddProductToWishlist = dynamic<AddProductToWishlistProps>(() => {
    return import('./AddProductToWishlist').then(mod => mod.AddProductToWishlist)
}, {
    loading: () => <span>Loading...</span>
})

interface ProductItemProps {
    product:{
        id:number
        price: number
        title: string
        priceFormatted: string
    }
    onAddToWishList: (id:number) => void
}

function ProductItemComponent ({product, onAddToWishList}: ProductItemProps) {
    const [isAddingToWishlist, setIsAddingToWishlist] = useState(false)

    /**
     * lazy load para funções e só importa tal lib qdo for realmente utilizar
     * async function showFormated (){
     *  const {formatted} = await import('date-fns')
     *  formatted()
     * }
     */
    return(
        <div>
            {product.title} - <strong>{product.priceFormatted}</strong>
            <button onClick={() => setIsAddingToWishlist(true)}>Adicionar aos favoritos</button>
            {isAddingToWishlist && <AddProductToWishlist 
                onAddToWishlist={() => onAddToWishList(product.id)}
                onRequestClose={() => setIsAddingToWishlist(false)}
            />}
        </div>
    )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
    // tomar cuidado ao usar o Object.is, pois é necessário processamento e se tiver dados complexos não é uma boa opção
    return Object.is(prevProps.product, nextProps.product)
})