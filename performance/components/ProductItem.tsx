import { memo } from 'react'

interface ProductItemProps {
    product:{
        id:number
        price: number
        title: string
    }
}

function ProductItemComponent ({product}: ProductItemProps) {
    return(
        <div>
            {product.title} - <strong>{product.price}</strong>
        </div>
    )
}

export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
    // tomar cuidado ao usar o Object.is, pois é necessário processamento e se tiver dados complexos não é uma boa opção
    return Object.is(prevProps.product, nextProps.product)
})