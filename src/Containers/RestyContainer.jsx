import React, { Component } from 'react';
import RestyForm from '../components/resty/RestyForm';
import RestyHistory from '../components/resty/RestyHistory';
import RestyDisplay from '../components/resty/RestyDisplay';
import RestyHeader from '../components/resty/RestyHeader';

export default class RestyCage extends Component {
  // state:
  // urlInput, selectedMethod, history, response, loading, jsonHeader
  state = {
    loading: true,
    urlInput: '',
    method: '',
    history: [],
    response: {}, //string maybe? array?
    jsonInput: '',
  };

  // compdidmount
  // set state loading false
  // componentDidMount() {
  //   this.setState({ loading: false });
  // }

  // handle input
  // set state to target value

  // handle submit async passing urlInput, method, jsonInput
  // prevent default
  // set state loading true
  // await fetchRequest passing urlInput, method, jsonInput
  // set state loading false,
  render() {
    return (
      <>
        <RestyHeader />
        <h1>RestyCageComponent</h1>
        <RestyForm />
        <RestyHistory />
        <RestyDisplay />
      </>
    );
  }
}
