import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Divider } from "@material-ui/core";

function Demo() {
  return (
    <Autocomplete
      id='combo-box-demo'
      options={countries}
      getOptionLabel={
        (option) =>
          option.state !== " "
            ? option.place + " , " + option?.state + " , " + option.country_name
            : option.place + "," + option.country_name
        // <Divider />
      }
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label='Location' variant='outlined' />
      )}
    />
  );
}

export default Demo;

const countries = [
  {
    country_code: "AD",
    country_name: "Andorra",
    state: " ",
    place: "Pic de Font Blanca",
    latitude: "42.64991",
    longitude: "1.53335",
  },
  {
    country_code: "AD",
    country_name: "Andorra",
    state: " ",
    place: "Roc Mele",
    latitude: "42.58765",
    longitude: "1.74028",
  },
  {
    country_code: "AD",
    country_name: "Andorra",
    state: " ",
    place: "Pic des Langounelles",
    latitude: "42.61203",
    longitude: "1.47364",
  },
  {
    country_code: "AD",
    country_name: "Andorra",
    state: " ",
    place: "Pic de les Abelletes",
    latitude: "42.52535",
    longitude: "1.73343",
  },
  {
    country_code: "AD",
    country_name: "Andorra",
    state: " ",
    place: "Estany de les Abelletes",
    latitude: "42.52915",
    longitude: "1.73362",
  },
  {
    country_code: "AD",
    country_name: "Andorra",
    state: " ",
    place: "Port Vieux de la Coume d'Ose",
    latitude: "42.62568",
    longitude: "1.61823",
  },
  {
    country_code: "AD",
    country_name: "Andorra",
    state: " ",
    place: "Port de la Cabanette",
    latitude: "42.6",
    longitude: "1.73333",
  },
  {
    country_code: "AD",
    country_name: "Andorra",
    state: " ",
    place: "Costa de Xurius",
    latitude: "42.50692",
    longitude: "1.47569",
  },
  {
    country_code: "AD",
    country_name: "Andorra",
    state: " ",
    place: "Font de la Xona",
    latitude: "42.55003",
    longitude: "1.44986",
  },
  {
    country_code: "AD",
    country_name: "Andorra",
    state: " ",
    place: "Xixerella",
    latitude: "42.55327",
    longitude: "1.48736",
  },
  {
    country_code: "AD",
    country_name: "Andorra",
    state: " ",
    place: "Riu Xic",
    latitude: "42.57165",
    longitude: "1.67554",
  },
  {
    country_code: "AD",
    country_name: "Andorra",
    state: " ",
    place: "Pas del Xic",
    latitude: "42.49766",
    longitude: "1.57597",
  },
  {
    country_code: "AD",
    country_name: "Andorra",
    state: " ",
    place: "Roc del Xeig",
    latitude: "42.56068",
    longitude: "1.4898",
  },
  {
    country_code: "AD",
    country_name: "Andorra",
    state: " ",
    place: "Collada del Xeig",
    latitude: "42.57512",
    longitude: "1.49009",
  },
  {
    country_code: "AD",
    country_name: "Andorra",
    state: " ",
    place: "Fonts Vives",
    latitude: "42.49829",
    longitude: "1.56428",
  },
  {
    country_code: "AD",
    country_name: "Andorra",
    state: " ",
    place: "Roc de Vista",
    latitude: "42.49922",
    longitude: "1.48118",
  },
  {
    country_code: "AD",
    country_name: "Andorra",
    state: " ",
    place: "Obaga de Vista",
    latitude: "42.47935",
    longitude: "1.44621",
  },
  {
    country_code: "AD",
    country_name: "Andorra",
    state: " ",
    place: "Visanseny",
    latitude: "42.57488",
    longitude: "1.61616",
  },
  {
    country_code: "AD",
    country_name: "Andorra",
    state: " ",
    place: "Roc de la Vinya",
    latitude: "42.52776",
    longitude: "1.56446",
  },
  {
    country_code: "AD",
    country_name: "Andorra",
    state: " ",
    place: "Canal de la Vinya",
    latitude: "42.52232",
    longitude: "1.52319",
  },
  {
    country_code: "AD",
    country_name: "Andorra",
    state: " ",
    place: "Bosc de Villar",
    latitude: "42.60135",
    longitude: "1.5434",
  },
  {
    country_code: "AD",
    country_name: "Andorra",
    state: " ",
    place: "Torrent de Vila",
    latitude: "42.53414",
    longitude: "1.56678",
  },
];
// ("AD", "Andorra", " ", "Pic des Langounelles", "42.61203", "1.47364"),
// ("AD", "Andorra", " ", "Pic de les Abelletes", "42.52535", "1.73343"),
// ("AD", "Andorra", " ", "Estany de les Abelletes", "42.52915", "1.73362"),
// ("AD", "Andorra", " ", "Port Vieux de la Coume d'Ose", "42.62568", "1.61823"),
// ("AD", "Andorra", " ", "Port de la Cabanette", "42.6", "1.73333"),
// ("AD", "Andorra", " ", "Costa de Xurius", "42.50692", "1.47569"),
// ("AD", "Andorra", " ", "Font de la Xona", "42.55003", "1.44986"),
// ("AD", "Andorra", " ", "Xixerella", "42.55327", "1.48736"),
// ("AD", "Andorra", " ", "Riu Xic", "42.57165", "1.67554"),
// ("AD", "Andorra", " ", "Pas del Xic", "42.49766", "1.57597"),
// ("AD", "Andorra", " ", "Roc del Xeig", "42.56068", "1.4898"),
// ("AD", "Andorra", " ", "Collada del Xeig", "42.57512", "1.49009"),
// ("AD", "Andorra", " ", "Fonts Vives", "42.49829", "1.56428"),
// ("AD", "Andorra", " ", "Roc de Vista", "42.49922", "1.48118"),
// ("AD", "Andorra", " ", "Obaga de Vista", "42.47935", "1.44621"),
// ("AD", "Andorra", " ", "Visanseny", "42.57488", "1.61616"),
// ("AD", "Andorra", " ", "Roc de la Vinya", "42.52776", "1.56446"),
// ("AD", "Andorra", " ", "Canal de la Vinya", "42.52232", "1.52319"),
// ("AD", "Andorra", " ", "Bosc de Villar", "42.60135", "1.5434"),
// ("AD", "Andorra", " ", "Torrent de Vila", "42.53414", "1.56678"),
// ("AD", "Andorra", " ", "Vila", "42.53176", "1.56654"),
// ("AD", "Andorra", " ", "Basers de Vicenc", "42.47669", "1.4829"),
// ("AD", "Andorra", " ", "Pla de Vias", "42.59001", "1.65996"),
// ("AD", "Andorra", " ", "Vial del Cardaire", "42.56372", "1.50503"),
// ("AD", "Andorra", " ", "Font del Vi", "42.52342", "1.47698"),
// ("AD", "Andorra", " ", "Font Verda", "42.5557", "1.55859"),
// ("AD", "Andorra", " ", "Serrat de Ventader", "42.49157", "1.43183"),
// ("AD", "Andorra", " ", "Bony de Vellatocina", "42.61246", "1.50594"),
// ("AD", "Andorra", " ", "Pleta Vella", "42.51143", "1.60976"),
// ("AD", "Andorra", " ", "Sola Vell", "42.46645", "1.47647"),
// ("AD", "Andorra", " ", "Port Vell", "42.65315", "1.55207"),
// ("AD", "Andorra", " ", "Port Negre del Pallars", "42.56799", "1.44412"),
// ("AD", "Andorra", " ", "Bancal Vedeller", "42.60103", "1.45896"),
// ("AD", "Andorra", " ", "Vedat del Xeig", "42.56223", "1.48785"),
// ("AD", "Andorra", " ", "Vedat dels Plans", "42.53983", "1.50408"),
// ("AD", "Andorra", " ", "Vedat de Coll de les Cases", "42.57491", "1.49849"),
// ("AD", "Andorra", " ", "Serra del Vedat", "42.46836", "1.48497"),
// ("AD", "Andorra", " ", "Planades del Vedat", "42.53939", "1.50116"),
// ("AD", "Andorra", " ", "Veda de Sorteny", "42.62075", "1.55042"),
// ("AD", "Andorra", " ", "Veda del Castellar", "42.62578", "1.50914"),
// ("AD", "Andorra", " ", "Canal de les Veces", "42.52405", "1.52124"),
// ("AD", "Andorra", " ", "Coma de Varilles", "42.63797", "1.52599"),
// ("AD", "Andorra", " ", "Portella de les Vaques", "42.56734", "1.44421"),
// ("AD", "Andorra", " ", "Pas de les Vaques", "42.58129", "1.70146"),
// ("AD", "Andorra", " ", "Collada de les Vaques", "42.56354", "1.56884"),
// ("AD", "Andorra", " ", "Roc del Vaquer", "42.63442", "1.47968"),
// ("AD", "Andorra", " ", "Valls de la Coma", "42.60079", "1.63691"),
// ("AD", "Andorra", " ", "Vall d'Incles", "42.58386", "1.66331"),
// ("AD", "Andorra", " ", "Vall de Soldeu", "42.56103", "1.68234"),
// ("AD", "Andorra", " ", "Riu de la Vall del Riu", "42.57178", "1.61415"),
// ("AD",
// "Andorra",
// " ",
// "Estany Gran de la Vall del Riu",
// "42.60065",
// "1.59278"),
// ("AD", "Andorra", " ", "Cascada de la Vall del Riu", "42.57326", "1.61423"),
// ("AD", "Andorra", " ", "Canals de la Vall del Riu", "42.59059", "1.60713"),
// ("AD", "Andorra", " ", "Cami de la Vall del Riu", "42.58421", "1.61129"),
// ("AD", "Andorra", " ", "Bosc de la Vall del Riu", "42.58333", "1.61667"),
// ("AD", "Andorra", " ", "Vall del Riu", "42.59499", "1.60747"),
// ("AD", "Andorra", " ", "Coll de Vall Civera", "42.48818", "1.66373"),
// ("AD", "Andorra", " ", "Obac de la Vall", "42.46602", "1.50498"),
// ("AD", "Andorra", " ", "Riu Valira d'Orient", "42.51123", "1.53686"),
// ("AD", "Andorra", " ", "Riu Valira del Nord", "42.34645", "1.44271"),
// ("AD", "Andorra", " ", "Estanys de la Val del Riu", "42.60398", "1.59622"),
// ("AD", "Andorra", " ", "Vaca Morta", "42.5681", "1.76256"),
// ("AD", "Andorra", " ", "Riu d'Urina", "42.5594", "1.58998"),
// ("AD", "Andorra", " ", "Serrat de la Uina", "42.55975", "1.52393"),
// ("AD", "Andorra", " ", "Obaga de la Tuta", "42.48885", "1.44734"),
// ("AD", "Andorra", " ", "Cova de la Tuta", "42.48678", "1.44548"),
// ("AD", "Andorra", " ", "Roca del Tut", "42.54941", "1.45701"),
// ("AD", "Andorra", " ", "Coll de Turer", "42.55784", "1.46979"),
// ("AD", "Andorra", " ", "Font del Tudo", "42.44205", "1.53489"),
// ("AD", "Andorra", " ", "Estany de les Truites", "42.57705", "1.44801"),
// ("AD", "Andorra", " ", "Serra de Tristaina", "42.65048", "1.47705"),
// ("AD", "Andorra", " ", "Riu de Tristaina", "42.615", "1.53707"),
// ("AD", "Andorra", " ", "Pic de Tristaina", "42.65265", "1.49242"),
// ("AD", "Andorra", " ", "Clot de Tres Torrents", "42.54063", "1.53382"),
// ("AD", "Andorra", " ", "Bony de Tres Corts", "42.52911", "1.53538"),
// ("AD", "Andorra", " ", "Canal dels Tremols", "42.49814", "1.49076"),
// ("AD", "Andorra", " ", "Travenc", "42.60215", "1.69377"),
// ("AD", "Andorra", " ", "Pleta de la Trava", "42.48464", "1.62251"),
// ("AD", "Andorra", " ", "Coll de la Trava", "42.47973", "1.47555"),
// ("AD", "Andorra", " ", "Canal de la Trava", "42.57395", "1.52496"),
// ("AD", "Andorra", " ", "Bosc de la Trava", "42.4844", "1.63007"),
// ("AD", "Andorra", " ", "Font dels Traginers", "42.43156", "1.52845"),
// ("AD", "Andorra", " ", "Pla de les Toves", "42.46355", "1.45008"),
// ("AD", "Andorra", " ", "Torrent del Tossalroi", "42.47256", "1.51244"),
// ("AD", "Andorra", " ", "Tossal Gran", "42.47986", "1.4892"),
// ("AD", "Andorra", " ", "Tossalet i Vinyals", "42.48597", "1.49025"),
// ("AD",
// "Andorra",
// " ",
// "Bosc del Tossal de les Poselles",
// "42.53331",
// "1.50326"),
// ("AD", "Andorra", " ", "Tossal", "42.45927", "1.49176"),
// ("AD", "Andorra", " ", "Tosquers", "42.56587", "1.48763"),
// ("AD", "Andorra", " ", "Canal del Tosquer", "42.57114", "1.52067"),
// ("AD", "Andorra", " ", "Bosc de la Tosca", "42.43912", "1.45592"),
// ("AD", "Andorra", " ", "Tosa d'Incles", "42.58675", "1.68935"),
// ("AD", "Andorra", " ", "Cap de Tosa d'Entor", "42.60016", "1.65212"),
// ("AD", "Andorra", " ", "Tosa de les Mussoles", "42.62199", "1.68087"),
// ("AD", "Andorra", " ", "Pic de la Tosa de Juclar", "42.60199", "1.72093"),
// ("AD", "Andorra", " ", "Collada de la Tosa de Caraup", "42.60371", "1.6548"),
// ("AD", "Andorra", " ", "Planell de la Tosa", "42.52916", "1.45614"),
// ("AD", "Andorra", " ", "Canals de la Tosa", "42.59186", "1.69687"),
// ("AD", "Andorra", " ", "Canal de la Tosa", "42.50878", "1.56601"),
// ("AD", "Andorra", " ", "Bosc de la Tosa", "42.54986", "1.57558"),
// ("AD", "Andorra", " ", "Torrent Tort", "42.53072", "1.58053"),
// ("AD", "Andorra", " ", "Torretinya", "42.45175", "1.51486"),
// ("AD", "Andorra", " ", "Prat d'en Torres", "42.59851", "1.51773"),
// ("AD", "Andorra", " ", "Canals de Torrent Prego", "42.49176", "1.49157"),
// ("AD", "Andorra", " ", "Canal de Torrentinya", "42.45323", "1.51176"),
// ("AD", "Andorra", " ", "Torrentill", "42.47221", "1.49478"),
// ("AD", "Andorra", " ", "Cami de Torrent Forcat", "42.45736", "1.51341"),
// ("AD", "Andorra", " ", "Canal del Torrent Cauber", "42.60095", "1.52226"),
// ("AD", "Andorra", " ", "Torre dels Soldats", "42.45021", "1.58341"),
// ("AD", "Andorra", " ", "Torrapuis", "42.53573", "1.52558"),
// ("AD", "Andorra", " ", "Pic de Torradella", "42.59369", "1.62372"),
// ("AD", "Andorra", " ", "Pala de la Torradella", "42.59144", "1.62356"),
// ("AD", "Andorra", " ", "Obaga de Torradella", "42.5952", "1.62615"),
// ("AD", "Andorra", " ", "Canals de Torradella", "42.59343", "1.63686"),
// ("AD", "Andorra", " ", "Borda del Torner", "42.5815", "1.48657"),
// ("AD", "Andorra", " ", "Planell de la Tora", "42.55261", "1.61504"),
// ("AD", "Andorra", " ", "Clots de la Tora", "42.46131", "1.5772"),
// ("AD", "Andorra", " ", "Prat del Toni", "42.5595", "1.6221"),
// ("AD", "Andorra", " ", "Moli del Tomas", "42.57774", "1.6505"),
// ("AD", "Andorra", " ", "Cortals de Tolse", "42.44734", "1.47787"),
// { city: "Jedlová", state: "", country: "Czech Republic" },
// { city: "Cotmon", state: null, country: "Philippines" },
// { city: "Beraim", state: null, country: "Indonesia" },
// { city: "Lugo", state: "Galicia", country: "Spain" },
// { city: "Magong", state: null, country: "China" },
// { city: "Penanggapan", state: null, country: "Indonesia" },
// { city: "Zlynka", state: null, country: "Ukraine" },
// { city: "Kumbo", state: null, country: "Cameroon" },
// { city: "Dongpu", state: null, country: "China" },
// { city: "Candoso", state: "Bragança", country: "Portugal" },
// { city: "Lenakapa", state: null, country: "Indonesia" },
// { city: "Korolevo", state: null, country: "Ukraine" },
