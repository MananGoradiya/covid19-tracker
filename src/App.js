import React, { useState,useEffect } from "react";
import{
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";
import './App.css';
import Map from './Map';
//import InfoBox from './InfoBox';
import InfoBox from './InfoBox';
function App() {
const [countries,setCountries]=useState([]);
const [country,setCountry]=useState('Worldwide');
const [countryInfo,setCountryInfo]=useState({});

/*
useEffect(()=>{ 

  const getCountriesData=async()=>{
    await fetch("https://disease.sh/v3/covid-19/countries")
    .then((response)=>response.json())
    .then(data)=>{
      const countries = data.map((country) => ({
        name: country.country,
        value: country.countryInfo.iso2,
      }));
      let sortedData = sortData(data);
          setCountries(countries);
          setMapCountries(data);
          setTableData(sortedData);
        });
    };

    getCountriesData();

}, []);

*/


useEffect(() => {
  const getCountriesData = async () => {
    

    
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        
        const countries = data.map((country) => ({
        
          name: country.country,
          value: country.countryInfo.iso2,
        }));
        
        setCountries(countries);
       // let sortedData = sortData(data);
       // setCountries(countries);
        //setMapCountries(data);
        //setTableData(sortedData);




        
      });
      
  };

  getCountriesData();
}, []);


const onCountryChange= async(event)=>{
const countryCode=event.target.value;
console.log(countryCode);
setCountry(countryCode);


/*
const url=countryCode==="worldwide"
?"https://disease.sh/v3/covid-19/all"
:`https://disease.sh/v3/covid-19/countries/${countryCode}`;

await fetch(url)
.then((response)=>response.json())
.then((data)=>{
  setCountry(countryCode);
  setcountryInfo(data);

}); 

};
*/
const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
       // setInputCountry(countryCode);
        setCountryInfo(data);
       // console.log(countryInfo +" mm");
       // setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        //setMapZoom(4);
        //console.log(countryInfo);
      });
  };

console.log(countryInfo);
  return (
    <div className="app">
      <div className="app__left">
      <div className="app__header">
      <h1>
        COVID-19 TRACKER
      </h1>
<FormControl className="app__dropdown">
<Select variant="outlined" onChange={onCountryChange} value={country}>
  <MenuItem value="Worldwide">Worldwide</MenuItem>
{
  countries.map((country)=>(
    <MenuItem value={country.value}>{country.name}</MenuItem>
  ))
}
</Select>
</FormControl>
</div>
  <div className="app__stats">
    <InfoBox title="Coronavirus cases" cases={123} total={2000}></InfoBox>
    <InfoBox title="Recovered" cases={123} total={3000}></InfoBox>
    <InfoBox title="Deaths" cases={123} total={4000}></InfoBox>
      {/*header*/}
      {/*Title + Select input dropdow n field*/}
      { /*info boxs */}
      { /*info boxs */}
      { /*info boxs */}
  </div>
      
      {/*  Map*/}
      <Map></Map>
</div>
<Card className="app_right">
  <CardContent>
    <h3>live cases by country</h3>
    <h3>World wide new cases</h3>
  </CardContent>
      {/* Table */}
      {/*graph */}

</Card>

    </div>
  );
}

export default App;
