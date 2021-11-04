import React, { Component } from 'react';
import RestyForm from '../components/resty/RestyForm';
import RestyHistory from '../components/resty/RestyHistory';
import RestyDisplay from '../components/resty/RestyDisplay';
import RestyHeader from '../components/resty/RestyHeader';

export default class RestyCage extends Component {
  // state:
  // urlInput, selectedMethod, history, response, loading, jsonHeader
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
