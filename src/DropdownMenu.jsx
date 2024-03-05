

const DropdownMenu = ({cities, handleCitySelect, selectedCity}) => {

    const handleChange = (event) => {
      event.preventDefault()
        const selectedCity = event.target.value;
        handleCitySelect(selectedCity);

      };
       
    return(
        <div>
            <label>
                <select onChange={handleChange} value={selectedCity}>
            <option value="allCities">Kaikki kaupungit</option>
      {cities?.map((city) => (
        <option key={city.id} value={city?.id}>{city?.name}</option>
      ))}
    </select>
            </label>
        </div>
    )
}


export default DropdownMenu;