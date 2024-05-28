async function getData()
{

     try{
        const data = await fetch('https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=4ed2494724e508791c9517109c19590c');
        const response = await data.json();
        // console.log(response);
        const {temp}=response.main;
        const {main:mood}=response.weather[0];
        console.log(mood);

     }
     catch(err)
     {
        console.log(err);
     }

}


getData();

export default getData;
