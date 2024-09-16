import Wrapper from "../assets/wrappers/SearchForm";
import { Form, useNavigation } from "react-router-dom";

const SearchForm = ({searchTerm}) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <Wrapper>
       <h2>Ital keresése név alapján</h2>
      <Form className="form">      
        <input type="search" name="search" className="form-input" defaultValue={searchTerm} placeholder=''/>
        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? 'Ital keresése...' : 'Keresem'}
        </button>
        <span>Ha ismered a coctail nevét, vagy kezdőbetűjét itt írd be</span>
      </Form>    
    </Wrapper>
  )
}
export default SearchForm;