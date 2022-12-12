import SingleCard from '../components/SingleCard'
import productdata from '../data/productdata'

 const ProductList =()=> {
    return (
      <div className='row'>
        {productdata.map((fd,i)=>(
            <SingleCard 
            title={fd.title}
            image={fd.image}
            desc = {fd.description}
            key={i}
            id={fd.id}
            />
        ))}
      </div>
    )
}

export default ProductList