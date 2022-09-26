import { SearchOutlined } from '@material-ui/icons'
import { useEffect, useState } from 'react'
import '../styles/search.scss'

const Search = ({ inView }) => {
  const [classes, setClasses] = useState("search-container")
  useEffect(() => {
    if (!inView) setClasses('search-container float')
    else setClasses('search-container')
  }, [inView])

  return (
    <div className='search'>
      <div className={classes}>
        <div className='search-input'></div>
        <div className='search-icon'>
          <SearchOutlined fontSize='large' />
        </div>
      </div>
    </div>
  )
}

export default Search