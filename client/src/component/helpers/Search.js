import React, { useEffect, useState } from 'react'

const Search = ({ cities, setFilteredCities }) => {

  const [ filters, setFilters ] = useState({ searchTerm: '' })

  useEffect(() => {
    const regexSearch = new RegExp(filters.searchTerm, 'i')
    setFilteredCities(cities.filter(city => {
      return regexSearch.test(city.name)
    }))
  }, [setFilteredCities, filters, cities])

  const handleFilterChange = (event) => {
    const newObj = { ...filters, [event.target.name]: event.target.value }
    console.log('New Obj', newObj)
    setFilters(newObj)
  }

  return (
    <>
      <input onChange={handleFilterChange} name="searchTerm" value={filters.searchTerm} placeholder='Search City 🔎' className='filter-type'/>
    </>
  )
}

export default Search