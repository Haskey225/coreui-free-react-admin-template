import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="/#" target="_blank" rel="noopener noreferrer">
          COFEDALCI - DASHBOAD
        </a>
        <span className="ms-1">&copy; Copyright 2023.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="/#" target="_blank" rel="noopener noreferrer">
          Cofedalci Soffware Enginer.
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
