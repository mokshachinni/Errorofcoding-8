
import {Component} from 'react'

import "./index.css"

class BrowserHistoryItems extends Component {

const {initialHistoryList} = this.props 
const {timeAccessed, logoUrl, title, domainUrl} = initialHistoryList

  render() {
    return (
      <div className="container">
        <div className="top-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="app-logo"
          />

          <div className="input-box">
            <button type="button" className="search-icon">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
              />
            </button>
            <input
              type="search"
              placeholder="Search history"
              className="input"
            />
          </div>
        </div>
        <div className="history-card-container">
          <ul>
            <initialHistoryList />
          </ul>
        </div>
      </div>
    )
  }
}

export default BrowserHistoryItems