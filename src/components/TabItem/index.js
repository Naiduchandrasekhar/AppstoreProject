// Write your code here
import './index.css'

const TabItem = props => {
  const {eachItem, onPressTab, isActive} = props
  const {tabId, displayText} = eachItem

  const tabBtnClassName = isActive ? 'tab-button active' : 'tab-button'

  const onClickTab = () => {
    onPressTab(tabId)
  }

  return (
    <li className="tab-item">
      <button className={tabBtnClassName} onClick={onClickTab} type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
