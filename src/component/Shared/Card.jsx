import propTypes from 'prop-types'

function Card({children,reverse}) {
  //return (
 //   <div className="card reverse">{children}</div>
 // )

    return <div className="card" style={{
        backgroundColor : reverse ? 'rgba(0,0,0,0.4)' : '#fff',
        color : reverse ? '#fff' : 'rgba(0,0,0,0.9)',
    }}>{children}</div>
}

Card.defaultProps = {
    reverse : false,
}

Card.prototypes = {
    children: propTypes.node.isRequired,
    reverse : propTypes.bool,
} 

export default Card