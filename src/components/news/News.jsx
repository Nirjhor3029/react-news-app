import React, { Component } from "react";
import NewsItem from "./NewsItem";

import InfiniteScroll from "react-infinite-scroll-component";


import "./news.css";

export default class News extends Component {
    articles = [];
    //  BASE_URL = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d57055dba1d3424f900469ec8526dd71`;
    BASE_URL = `https://newsapi.org/v2/top-headlines?apiKey=d57055dba1d3424f900469ec8526dd71`;

    // constructor is called when a new instance of the class is created
    constructor(props) {
        super(props);
        console.log("constructor is called from News component");
        console.log(this.props);
        this.state = {
            articles: this.articles,
            page: 1,
            pagesize: 20,
            maxPage: 10,
            country: "in",
            category: "business",
            totalResults: 0,
            // Set the initial value of the queryText state from the props, or if no prop is provided, set it to an empty string.
            queryText: this.props?.searchValue || "",
            is_loading: true,
        };
    }

    updateNews = async ({ page = 1, queryText = "" } = {}) => {
        console.log("updateNews is called from News component");
        let url = `${this.BASE_URL}&q=${queryText}&country=${
            this.state.country
        }&category=${this.props?.categeory || ""}&page=${page}&pagesize=${
            this.state.pagesize
        }`;
        console.log(url);
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            totalResults: parseData.totalResults,
            articles: parseData.articles,
        });
        this.setState({
            maxPage: Math.ceil(parseData.totalResults / this.state.pagesize),
            is_loading: false,
        });
    };

    // Update the state when new props are received
    async componentDidUpdate(prevProps) {
        // Check if the searchValue prop has changed
        if (prevProps.searchValue !== this.props.searchValue) {
            this.setState({
                queryText: this.props.searchValue,
            });
            console.log("componentDidUpdate");
            this.updateNews({ queryText: this.props.searchValue });
        }

        document.title = `${this.props?.categeory || "general"} - Miss Monkey`;
    }

    async componentDidMount() {
        this.updateNews();
    }

    handlePrevClick = async () => {
        // console.log("previous");
        let page = this.state.page - 1;
        // console.log(`previous page: ${page}`);
        this.setState({
            page: page,
            is_loading: true,
        });
        // console.log(`Page: ${this.state.page}`);
        this.updateNews({ page: page });
    };
    handleNextClick = async () => {
        // console.log("next");
        let page = this.state.page + 1;
        // console.log(`next page: ${page}`);
        this.setState({
            page: page,
            is_loading: true,
        });
        // console.log(`Page: ${this.state.page}`);
        this.updateNews({ page: page });
    };

    fetchData = async () => {
        let page = this.state.page+1;
        let queryText = "";
        console.log("fetchData");
        let url = `${this.BASE_URL}&q=${queryText}&country=${
            this.state.country
        }&category=${this.props?.categeory || ""}&page=${page}&pagesize=${
            this.state.pagesize
        }`;
        console.log(url);
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            totalResults: parseData.totalResults,
            articles: this.state.articles.concat(parseData.articles),
            maxPage: Math.ceil(parseData.totalResults / this.state.pagesize),
            is_loading: false,
            page: page,
        });

        // Fetch data from an API or any data source
        // const response = await fetch(
        //     `https://api.example.com/data?page=${page}`
        // );
        // const newData = await response.json();
        // setData([...data, ...newData]);
        // setPage(page + 1);
    };

    capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    render() {
        // console.log("Search Value:", this.props.searchValue); // Debugging
        // console.log("Received Props in News:", this.props); // Debugging
        // console.log("Query Text:", this.state.queryText); // Debugging

        return (
            <div className="container ">
                <h2 className="my-3">{this.props?.categeory?.charAt(0).toUpperCase() + this.props?.categeory?.slice(1) || "General"} - Top Headlines</h2>
                {this.state.country}
                {/* {this.state.is_loading && <SpinnerByCSS />} */}

                {/* <div className="row"> */}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchData}
                    hasMore={
                        this.state.articles.length < this.state.totalResults
                    } // Set to false when there is no more data to load
                    // loader={<h4>Loading...</h4>}
                    loader={<h4>Loading...</h4>}
                >
                    <div className="row">
                        {/* Render your data */}
                        {this.state.articles.map((element) => {
                            // console.log(element);
                            if (
                                element.author != null &&
                                element.urlToImage != null &&
                                element.title != null &&
                                element.description != null
                            ) {
                                return (
                                    <div
                                        className="col-md-4 my-2"
                                        key={element.url}
                                    >
                                        <NewsItem
                                            title={element.title.slice(0, 45)}
                                            description={element.description.slice(
                                                0,
                                                88
                                            )}
                                            newsUrl={element.url}
                                            imgUrl={element.urlToImage}
                                            date={element.publishedAt}
                                            author={element.author}
                                        />
                                    </div>
                                );
                            }
                            return null;
                        })}
                    </div>
                </InfiniteScroll>
                {/* </div> */}

                <div className="d-flex justify-content-between my-3">
                    <button
                        disabled={this.state.page <= 1}
                        className="btn btn-dark"
                        onClick={this.handlePrevClick}
                    >
                        &larr; Previous
                    </button>
                    <span>Current-page: {this.state.page}</span>
                    <span>Max-page: {this.state.maxPage}</span>
                    <span> {this.state.is_loading && "loading.."}</span>

                    <button
                        disabled={this.state.page >= this.state.maxPage}
                        className="btn btn-dark"
                        onClick={this.handleNextClick}
                    >
                        Next &rarr;
                    </button>
                </div>
            </div>
        );
    }
}
