import React, { Component } from "react";

class Transaction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            from: "",
            to: "",
            amount: "",
        };
    }

    getData = () => {
        fetch("https://acb-api.algoritmika.org/api/transaction")
            .then((res) => res.json())
            .then((data) => {
                if (data && data.length > 0) {
                    this.setState({
                        from: data[0].from,
                        to: data[0].to,
                        amount: data[0].amount,
                    });
                }
            })
            .catch((error) => console.error("Error fetching data:", error));
    };

    componentDidMount() {
        this.getData();
    }

    render() {
        const { from, to, amount } = this.state;

        return (
            <div>
                <div>
                    <p>From:{from} </p>
                </div>
                <div>
                    <p>To:{to} </p>
                </div>
                <div>
                    <p>Amount:{amount} </p>
                </div>
            </div>
        );
    }
}

export default Transaction;