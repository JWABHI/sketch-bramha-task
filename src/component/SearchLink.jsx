import {NavLink} from 'react-router-dom';



const SearchLink = ({link}) => {
    return <div>
        <NavLink className="btn btn-primary" to={`/search/${link}`}>
                            <i className="fa fa-search"></i>
                            </NavLink>
    </div>
}
export default SearchLink;