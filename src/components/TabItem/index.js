import './index.css'

const TabItem = props => {
  const {keyId, Tabdetails, TabButtonFilter} = props

  const onCLickTab = () => {
    TabButtonFilter()
  }

  return (
    <li className="list" onClick={onCLickTab}>
      <h1>{Tabdetails}</h1>
    </li>
  )
}
export default TabItem
