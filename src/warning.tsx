import React from 'react'

export const Warning: React.FC = () => {
  return (
    <div className="Warning">
      <div className="WarningText">
        WARNING
      </div>
      <div>
        This page contains intentionally unsafe code.
      </div>
      <br />
      <div>
        If anyone sent you to this website with any path or query params (anything after https://noxssinreact.com),
      </div>
      <div>
        then they are trying to ruin your day and they are not your friend.
      </div>
    </div>
  )
}

