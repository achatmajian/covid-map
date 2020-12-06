import React from "react";

export default class FetchRandomUser extends React.Component {

    state = {
        loading: true,
        usaState: null,
    };

    async componentDidMount() {
        const url = "https://api.covidtracking.com/v1/states/current.json";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ usaState: data[0], loading: false })
        // console.log(data.results[0]);
    }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }

        if (!this.state.usaState) {
            return <div>didn't get a person</div>;
        }

        return (
            <div>
                <strong>This State's Name Is:</strong>
                <div>{this.state.usaState.state}</div>
            </div>
        );
    }
}
