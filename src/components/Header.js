// import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {  
  return (
    <header className='header'>
      {/* <h1 style={headingSytle}>
        &nbsp;ReactAdmin&reg;&nbsp; 
      </h1> */}
      {/* <p>&nbsp;—&nbsp;An efficient way to CRUD</p> */}
      {/* <h1 style={headingSytle}>{title}</h1> //dynamic styling*/}
      <Button 
        color='var(--add-button-color)' 
        text={showAdd ? 'Close' : 'Add Member'} 
        onClick={onAdd} 
      />
      
    </header>
  )
}

// Header.defaultProps = {
//     title: 'An efficient way to CRUD —&nbsp;ReactAdmin&reg;',
// }

// Header.propTypes = {
//     title: PropTypes.string.isRequired,
// }

// const headingSytle = {
//   color:'#80c5c5',
//   backgroundColor:'#576e6a',
// }

export default Header
