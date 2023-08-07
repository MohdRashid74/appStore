import './index.css'

const AppItem = props => {
  const {Name, imageUrl} = props

  return (
    <li className="small-bg-container">
      <img src={imageUrl} className="image" />
      <h1 className="heading2">{Name}</h1>
    </li>
  )
}
export default AppItem
