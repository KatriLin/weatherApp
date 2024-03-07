import styled from 'styled-components';
import colors from './color';

const DropdownMenu = ({cities, handleCitySelect, selectedCity}) => {

    const handleChange = (event) => {
      event.preventDefault()
        const selectedCity = event.target.value;
        handleCitySelect(selectedCity);

      };
       
    return(
      
            <DropdownLabel>
                <DropdownSelect onChange={handleChange} value={selectedCity}>
            <option value="allCities">Kaikki kaupungit</option>
      {cities?.map((city) => (
        <option key={city.id} value={city?.id}>{city?.name}</option>
      ))}
    </DropdownSelect>
            </DropdownLabel>
      
    )
}



const DropdownLabel =styled.label`
height: 40px;
margin: 0 15px 0 15px;
display: flex;
justify-content: left;
align-items: center;
background-color: ${colors.whiteBackground};
border: 1px solid ${colors.greyBorderColor};
border-radius: 5px;

@media (min-width: 768px) { /* styles for tablet*/
  margin: 0 auto;
  max-width: 400px;
  } 

`;
const DropdownSelect =styled.select`
background-color: ${colors.whiteBackground};
width: 100%;
margin: 0 10px 0 10px;
border:none;
font-size: 13px;
color: ${colors.primaryTextColor};
outline: none;
`;


export default DropdownMenu;