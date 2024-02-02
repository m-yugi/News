import { Component } from 'react';
import PropTypes from 'prop-types'
import Datafetch from './Datafetch';
import Loading from './Loading'
export default class NewsHeader extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      error: '',
      currentpage: 0,
      newsurl: '',
      maxpages: 10,
      title: 'something went wrong',
      description: 'something went wrong',
      backgroundImage:
        'https://images.unsplash.com/photo-1702957954496-8bba5d73a390?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    };
    this.nextnews = this.nextnews.bind(this);
    this.prevnews = this.prevnews.bind(this);
  }
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };
  static defaultProps = {
    country: 'us',
    category: 'general'
  };
  async componentDidMount() {
    try {
      this.setState({ loading: true })
      let parsedData = await Datafetch(this.state.maxpages, this.props.country, 1, this.props.category);
      if (parsedData.articles && parsedData.articles.length > 0) {
        this.setState({
          articles: parsedData.articles,
          title: parsedData.articles[0].title,
          description: parsedData.articles[0].description,
          newsurl: parsedData.articles[0].url,
          backgroundImage: parsedData.articles[0].urlToImage,
          loading: false,
        });
      } else {
        this.setState((prevState) => {
          return { ...prevState, loading: false };
        });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      this.setState({ loading: false, error: error.message });
    }
  }

  nextnews() {
    this.setState({ loading: true })
    if (this.state.currentpage + 1 < this.state.maxpages) {
      let article = this.state.articles[this.state.currentpage + 1];
      this.setState({
        currentpage: this.state.currentpage + 1,
        title: article.title,
        description: article.description,
        newsurl: article.url,
        backgroundImage: article.urlToImage,
        loading: false
      });
    }
  }

  prevnews() {
    this.setState({ loading: true })
    if (this.state.currentpage - 1 >= 0) {
      let article = this.state.articles[this.state.currentpage - 1];
      this.setState({
        currentpage: this.state.currentpage - 1,
        title: article.title,
        description: article.description,
        newsurl: article.url,
        backgroundImage: article.urlToImage,
        loading: false
      });
    }
  }

  render() {
    let style = {};
    if (this.state.backgroundImage) {
      style = {
        backgroundImage: `url(${this.state.backgroundImage})`,
      };
    } else {
      style = {
        backgroundImage: `url(https://images.unsplash.com/photo-1702957954496-8bba5d73a390?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
      };
    }
    if (this.state.loading) {
      return <Loading />
    }
    else {
      return (
        <>
          <div
            className="container-fluid newshead-height newshead-background-image"
            style={style}
          >
            <div className="conatiner-fluid background-overlay newshead-height ">
              <h2 className="text-center pt-2 text-light">International Headlines</h2>
              <a rel="noreferrer" target='_blank' href={this.state.newsurl} className='new-link'><div className="tite-description-div">
                <h5 className="text-light">
                  <strong>{this.state.title}</strong>
                </h5>
                <p className="text-light">{this.state.description}</p>
              </div></a>
              <div className=" prev-next d-flex justify-content-around">
                <button
                  type="button"
                  className="btn btn-outline-light"
                  disabled={this.state.currentpage === 0}
                  onClick={this.prevnews}
                >
                  &larr; previous
                </button>
                <button
                  type="button"
                  className="btn btn-outline-light"
                  disabled={this.state.currentpage >= `${this.state.maxpages}` - 1}
                  onClick={this.nextnews}
                >
                  next &rarr;
                </button>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}
