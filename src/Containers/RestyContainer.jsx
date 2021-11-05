import React, { Component } from 'react';
import RestyForm from '../components/resty/RestyForm';
import RestyHistory from '../components/resty/RestyHistory';
import RestyDisplay from '../components/resty/RestyDisplay';
import RestyHeader from '../components/resty/RestyHeader';
import { fetchRequest } from '../services/fetchUtils';
import './styles/RestyContainer.css';

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
    const { urlInput, selectedMethod, jsonInput } = this.state;
    this.setState({ loading: true });
    const response = await fetchRequest(selectedMethod, urlInput, jsonInput);
    this.setState({ response, loading: false });
  };

  render() {
    const { urlInput, selectedMethod, jsonInput, history, response } =
      this.state;
    return (
      <section className="container">
        <RestyHeader />
        <h1>RestyCageComponent</h1>
        <RestyForm
          urlInput={urlInput}
          selectedMethod={selectedMethod}
          jsonInput={jsonInput}
          onInput={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <RestyHistory history={history} />
        <RestyDisplay response={response} />
      </section>
    );
  }
}
