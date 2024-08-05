import './index.css'

const TabItem = props => {
  const {tabDetails, updatTab, isActive} = props
  const {displayText, tabId} = tabDetails

  const onPressed = () => {
    updatTab(tabId)
  }

  const isActiveClass = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${isActiveClass}`}
        onClick={onPressed}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
