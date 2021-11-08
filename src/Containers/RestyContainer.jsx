import React, { Component } from 'react';
import RestyForm from '../components/resty/RestyForm';
import RestyHistory from '../components/resty/RestyHistory';
import RestyDisplay from '../components/resty/RestyDisplay';
import RestyHeader from '../components/resty/RestyHeader';
import { fetchRequest } from '../services/fetchUtils';
import style from './styles/RestyContainer.css';

export default class RestyCage extends Component {
  state = {
    loading: true,
    urlInput: '',
    methodSelection: '',
    history: [],
    response: [],
    jsonInput: '',
  };

  componentDidMount() {
    this.setState({ loading: false });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { urlInput, methodSelection, jsonInput, history } = this.state;
    this.setState({
      loading: true,
      methodSelection,
      history: [...history, { url: urlInput, method: methodSelection }],
    });
    const response = await fetchRequest(methodSelection, urlInput, jsonInput);
    this.setState({ response, loading: false });
  };

  render() {
    const { urlInput, methodSelection, jsonInput, history, response } =
      this.state;
    return (
      <section className={style.container}>
        <RestyHeader className={style.header} />
        <RestyForm
          className={style.form}
          urlInput={urlInput}
          methodSelection={methodSelection}
          jsonInput={jsonInput}
          onInput={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <RestyHistory className={style.history} history={history} />
        <RestyDisplay className={style.display} response={response} />
      </section>
    );
  }
}
