import Wrapper from "../assets/wrappers/SearchForm";
import { Form, useNavigation } from "react-router-dom";

const SearchForm = ({ setSearchTerm, searchTerm }) => {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <Wrapper>
      <Form className="form">
        <select
          name="ingred"
          className="form-input"
          data-selected={searchTerm}
          onChange={handleChange}         
        >
          <option value="">-Válassz összetevőt-</option>
          <option value="Vodka">Vodka</option>
          <option value="Gin">Gin</option>
          <option value="Tequila">Tequila</option>
          <option value="Triple sec">Triple sec</option>
          <option value="Brandy">Brandy</option>
          <option value="Tea">Tea</option>
          <option value="Champagne">Pezsgő</option>
          <option value="Red wine">Vörös bor</option>
          <option value="Rum">Rum</option>
          <option value="Milk">Tej</option>
          <option value="Yoghurt">Yoghurt</option>
          <option value="Ouzo">Ouzo</option>
          <option value="Coffee">Kávé</option>
          <option value="Egg">Tojás</option>
          <option value="Whiskey">Whiskey</option>
        </select>
      </Form>
    </Wrapper>
  )
}
export default SearchForm;