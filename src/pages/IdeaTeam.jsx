import React from 'react'
import NavBarSudents from '../component/NavBarSudents'
function IdeaTeam() {
  return (
      <>
      <div className="h-screen bg-gray-200 flex flex-col items-center justify-start">
        <div className="w-screen">
          <NavBarSudents />
        </div>
       <h1 className="text-2xl font-bold text-gray-800">IdeaTeam</h1>
        </div>
        </>
  )
}

export default IdeaTeam