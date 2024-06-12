import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            queryText: "",
            country: "",
        };
    }

    COUNTRIES = [
        'in',
        'sa',
        'us'
    ];

    handleSearchClick = (e) => {
        e.preventDefault();
        console.log("Search Clicked:" + this.state.queryText);
        // console.log("e.target.value:" + e.target.value);
        this.props.onSearchChange(this.state.queryText);
    };

    handleCountrySelect = (e) => {
        e.preventDefault();
        console.log("Country Selected:" + e.target.value);
        this.setState({ country: e.target.value });
        this.props.onCountryChange(e.target.value);
    }
    render() {
        // const [queryText, setQueryText] = useState('');

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            Miss Monkey
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                
                                <li className="nav-item">
                                    <Link
                                        className="nav-link active"
                                        aria-current="page"
                                        to="/"
                                    >
                                        Home
                                    </Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link className="nav-link" to="/">
                                        Link
                                    </Link>
                                </li> */}

                                <li className="nav-item">
                                    <Link className="nav-link" to="/business">
                                        business
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/entertainment">
                                        entertainment
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/general">
                                        general
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/health">
                                        health
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/science">
                                        science
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/sports">
                                        sports
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/technology">
                                        technology
                                    </Link>
                                </li>
                            </ul>

                            <form className="d-flex">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                    value={this.state.queryText}
                                    onChange={(e) => {
                                        this.setState({
                                            queryText: e.target.value,
                                        });
                                    }}
                                />
                                <button
                                    className="btn btn-outline-success"
                                    onClick={this.handleSearchClick}
                                >
                                    Search
                                </button>
                            </form>
                            <select value={this.state.country} onChange={this.handleCountrySelect} >
                                {this.COUNTRIES.map((country) => (
                                    <option key={country} value={country}>{country}</option>
                                ))}
                            </select>
                            
                        </div>
                    </div>
                </nav>

                {/* {this.state.queryText} */}
            </div>
        );
    }
}
