import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    state = {
        key: "4bc8087bf7f5434a8a6aa6ca444a441c",
        lat: this.props.lat,
        lon: this.props.lon,
        data: null
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.setData()
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    render() {
        const { data } = this.state;
        console.log("render");
        if (data) {
            return (
                <section>
                    <h1>Informacje o pogodzie:</h1>
                    {this.renderWeatherInfo()}
                </section>
            )
        }
        return (
            <section>
                <h1>Informacje o pogodzie:</h1>
            </section>
        )
    }

    setData() {
        const { key, lat, lon } = this.state;
        const url = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${key}&lang=pl`;


        this.fetchData(url)
    }

    fetchData(url) {
        fetch(url)
            .then(resp => resp.json())
            .then(resp => resp.data[0])
            .then(resp => this.setState({
                data: resp
            }))
    }

    renderWeatherInfo() {
        const { data } = this.state;
        return (
            <>
                <h3>Nazwa miasta: {data.city_name}</h3>
                <h4>Zachmurzenie: {data.clouds} %</h4>
                <h4>Wschód Słońca: {data.sunrise}</h4>
                <h4>Zachód Słońca: {data.sunset}</h4>
                <h4>Temperatura: {data.temp} C</h4>
                <h4>Ciśnienie: {data.pres} HPa</h4>
                <h4>Strefa Czasowa: {data.timezone}</h4>
                <h4>Kierunek Wiatru: {data.wind_cdir_full}</h4>
                <h4>Indeks UV: {data.uv}</h4>
            </>
        )
    }

}

ReactDOM.render(<App lat={52.232222} lon={21.008333} />, document.querySelector('#root'));