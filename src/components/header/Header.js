import './Header.scss';
import SearchForm from './search/SearchForm';

export default function Header (){
    return( <div className= "top-container">
              <SearchForm/>
            </div>
    )
}
