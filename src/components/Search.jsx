import { SearchOutlined } from '@material-ui/icons'
import { useEffect, useState } from 'react'
import '../styles/search.scss'

const Search = ({ inView }) => {
  const [classes, setClasses] = useState("appear")
  useEffect(() => {
    if (!inView) setClasses('float')
    else {
      setClasses('appear')
    }
  }, [inView])



  return (
    <div className='search'>
      <div className='search-container'>
        <div className={`search-input ${inView && 'appear'}`}></div>
        <div className={`search-icon ${classes}`}>
          <SearchOutlined fontSize='large' />
        </div>
      </div>
    </div>
  )
}

export default Search