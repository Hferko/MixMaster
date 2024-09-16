import axios from 'axios';
import CocktailList from '../components/CocktailList';
import Select from '../components/Select';
import { useState } from "react";
import { useNavigation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';


const searchCocktailQuery = (searchTerm) => {
  const navigation = useNavigation();
  navigation.state = 'loading';
  return {
    queryKey: [searchTerm || ''],
    queryFn: async () => {
      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);  
      return response.data.drinks
    }   
  }
}

export const loader = async ({ request }) => {
  const searchTerm = 'gin';  
  return { searchTerm };
};


const Ingredients = () => {
  const [searchTerm, setSearchTerm] = useState('gin');
  const { data: drinks } = useQuery(searchCocktailQuery(searchTerm));
  
  const navigation = useNavigation(); 
  if (drinks) {
    navigation.state = 'idle';
  }  
  const isPageLoading = navigation.state === 'loading';
 
  return (
    <>
      <Select setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      {isPageLoading ?
        <div className='loading' />
        : <CocktailList drinks={drinks} />}
    </>
  )
}
export default Ingredients;