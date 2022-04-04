import React, { useState, useEffect } from 'react';

export const SearchBox: React.FC<{getSearchInput: any}> = ({getSearchInput}) => {
  const [searchInput, setSearchInput] = useState<string>('')
  useEffect(() => {
    // getSearchInput(searchInput)
  })

  const userInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value)
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    getSearchInput(searchInput)
  }

  return(
    <>
      <input type='search' name='search-input' onChange={userInput} />
      <button className="" type="button" onClick={handleClick}>Click</button>
    </>
  )
}