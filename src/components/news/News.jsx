import React, { Component } from "react";
import SpinnerByCSS from "../loader/SpinnerByCSS";
import NewsItem from "./NewsItem";

export default class News extends Component {
    
    articles = [];
    //  BASE_URL = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d57055dba1d3424f900469ec8526dd71`;
    BASE_URL = `https://newsapi.org/v2/top-headlines?apiKey=d57055dba1d3424f900469ec8526dd71`;

    // constructor is called when a new instance of the class is created
    constructor(props) {
        super(props);
        // console.log("constructor is called from News component");
        // console.log(this.props);
        this.state = {
            articles: this.articles,
            page: 1,
            pagesize: 20,
            maxPage: 10,
            country: "us",
            category: "business",
            // Set the initial value of the queryText state from the props, or if no prop is provided, set it to an empty string.
            queryText: this.props?.searchValue || "",
            is_loading: true,
        };
    }

    updateNews = async ({ page = 1, queryText = "" } = {}) => {
        console.log("updateNews is called from News component");
        let url = `${this.BASE_URL}&q=${queryText}&country=${this.state.country}&category=${this.props?.categeory || ""}&page=${page}&pagesize=${this.state.pagesize}`;
        console.log(url);
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({ articles: parseData.articles });
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
            this.updateNews({queryText: this.props.searchValue });
        }
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
        this.updateNews(page);
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
        this.updateNews(page);
    };

    render() {
        console.log("Search Value:", this.props.searchValue); // Debugging
        // console.log("Received Props in News:", this.props); // Debugging
        console.log("Query Text:", this.state.queryText); // Debugging

        return (
            <div className="container ">
                <h2 className="my-3">Miss Monkey - Top Headlines</h2>
                {this.state.is_loading && <SpinnerByCSS />}

                {!this.state.is_loading && (
                    <div className="row">
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
                                        />
                                    </div>
                                );
                            }
                            return null;
                        })}
                    </div>
                )}

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
