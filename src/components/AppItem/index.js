// Write your code here
import './index.css'

const AppItem = props => {
  const {eachList} = props
  const {appName, imageUrl} = eachList

  return (
    <li className="appImageContainer">
      <img src={imageUrl} alt={appName} className="appImages" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
