export default class AppController {
    constructor(appService, weatherApiService) {
        // console.log(appService);
        appService.greeting();
        this.weatherApiService = weatherApiService;
        // weatherApiService.getWeatherByCityName('London')
        //     .then(data => console.log(data))
        //     .catch(err => console.log(err))
    }

    searchWeather() {
        this.weatherApiService.getWeatherByCityName(this.cityName)
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }
}