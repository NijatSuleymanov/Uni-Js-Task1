import React from 'react'
 const SingleCard =(props)=> {
    return (
<div className="col-12 col-sm-6 col-md-3">
<div className="card" >
  <img src={props.image} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.desc.substr(0,30)}...</p>
    <a href={`/products/${props.id}`} className="btn btn-primary">read more</a>
  </div>
</div>
</div>

    )
}

export default SingleCard