import React, { Component } from 'react';
import Newsitems from '../components/Newsitems';
import Datafetch from './Datafetch';
import Loading from './Loading';
import PropTypes from 'prop-types'
export default class Newsbody extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      maxPages: 0,
      currentPage: 1,
      pageSize: 9,
    };
    this.nextnews = this.nextnews.bind(this);
    this.prevnews = this.prevnews.bind(this);
  }
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  }
  static defaultProps = {
    country: 'in',
    category: 'general'
  }
  async componentDidMount() {
    this.setState({ loading: true });
    let parsedData = await Datafetch(
      this.state.pageSize,
      this.props.country,
      this.state.currentPage,
      this.props.category
    );
    let maxpages = Math.ceil(parsedData.totalResults / this.state.pageSize);
    this.setState({ maxPages: maxpages });
    this.setState({ articles: parsedData.articles, loading: false });
  }
  async nextnews() {
    if (this.state.currentPage + 1 <= this.state.maxPages) {
      this.setState({ currentPage: this.state.currentPage + 1, loading: true });
      let parsedData = await Datafetch(
        this.state.pageSize,
        this.props.country,
        this.state.currentPage + 1,
        this.props.category
      );
      this.setState({ articles: parsedData.articles, loading: false });
    }
  }
  async prevnews() {
    if (this.state.currentPage - 1 >= 1) {
      this.setState({ currentPage: this.state.currentPage - 1, loading: true });
      let parsedData = await Datafetch(
        this.state.pageSize,
        this.props.country,
        this.state.currentPage - 1,
        this.props.category
      );
      this.setState({ articles: parsedData.articles, loading: false });
    }
  }
  render() {
    if (this.state.loading) {
      return <Loading />;
    } else {
      return (
        <>
          <h1 className="barath-headline-h2">Barath Headlines</h1>
          <div className="container-fluid main-news-box row row-cols-3 justify-content-center">
            {this.state.articles.map((element) => {
              return (
                <div key={element.url}>
                  <Newsitems
                    title={element.title}
                    newsUrl={element.url}
                    backgroundUrl={element.urlToImage}
                  />
                </div>
              );
            })}
          </div>
          <div className=" prev-next d-flex justify-content-evenly mt-2 mb-4">
            <button
              type="button"
              className="btn btn-outline-dark"
              disabled={this.state.currentPage === 1}
              onClick={this.prevnews}
            >
              &larr; previous
            </button>
            <button
              type="button"
              className="btn btn-outline-dark"
              disabled={this.state.currentPage >= `${this.state.maxPages}`}
              onClick={this.nextnews}
            >
              next &rarr;
            </button>
          </div>
        </>
      );
    }
  }
}
