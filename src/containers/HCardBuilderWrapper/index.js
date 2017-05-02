import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import styles from './styles.css';
import AddressFields from '../../components/AddressFields';
import HCardActions from '../../components/HCardActions';
import Section from '../../components/Section';
import PersonalDetailsFields from '../../components/PersonalDetailsFields';
import HCard from '../../components/HCard';
import HCardBuilderForm from '../../components/HCardBuilderForm';
import LoadingContent from '../../components/LoadingContent';
import HCardBuilder from '../../components/HCardBuilder';
import blankAvatar from '../../../assets/images/blankAvatar.jpg';

class HCardBuilderWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      givenName: '',
      surname: '',
      email: '',
      phone: '',
      houseNameOrNumber: '',
      street: '',
      suburb: '',
      state: '',
      postcode: '',
      country: '',
      photo: blankAvatar,
    };

    this.fieldUpdate = this.fieldUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.fieldUpdate = this.fieldUpdate.bind(this);
    this.fieldUpdate = this.fieldUpdate.bind(this);
  }

  componentDidMount() {
    this.setState({loading: true});
  }

  componentWillUnmount() {
    if (this.state.photo !== blankAvatar) {
      window.URL.revokeObjectURL(this.state.photo);
    }
  }

  fieldUpdate(key, value) {
    this.setState({[key]: value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const xmlSerializer = new XMLSerializer();

    const content = '<html><head></head><body>' + xmlSerializer.serializeToString(
      document.getElementById('hcard-preview')
    ) + '</body></html>';

    /* eslint-disable no-console*/
    console.log(
      'Please copy this content and add into the hCard ' +
      'validator: http://hcard.geekhood.net'
    );
    /* eslint-enable no-console*/

    window.open('data:application/octet-stream;charset=utf-8,' + encodeURI(content));
  }

  handleFile(event) {
    const file = event.target.files[0];

    if (!/^image\//.test(file.type)) {
      alert('Has to be an image');
      return;
    }

    window.URL = window.URL || window.webkitURL;
    if (window.URL) {
      this.setState({photo: window.URL.createObjectURL(file)});
    }
  }

  render() {
    if (!this.state.loading) {
      return <LoadingContent />;
    }

    const streetAddress = `${this.state.houseNameOrNumber} ${this.state.street}`;
    return (
      <HCardBuilder>
        <HCardBuilderForm>
          <PersonalDetailsFields
            givenName={this.state.givenName}
            surname={this.state.surname}
            email={this.state.email}
            phone={this.state.phone}
            onFieldUpdate={this.fieldUpdate}
          />
          <AddressFields
            houseNameOrNumber={this.state.houseNameOrNumber}
            street={this.state.street}
            suburb={this.state.suburb}
            state={this.state.state}
            postcode={this.state.postcode}
            country={this.state.country}
            onFieldUpdate={this.fieldUpdate}
          />
          <HCardActions
            onUploadFile={this.handleFile}
            onSubmit={this.handleSubmit}
          />
        </HCardBuilderForm>
        <Section styleName="hcard-preview">
          <HCard
            givenName={this.state.givenName}
            familyName={this.state.surname}
            email={this.state.email}
            tel={this.state.phone}
            streetAddress={`${streetAddress}`}
            locality={this.state.suburb}
            region={this.state.state}
            postalCode={this.state.postcode}
            countryName={this.state.country}
            photo={this.state.photo}
          />
        </Section>
      </HCardBuilder>
    );
  }
}

export default cssModules(HCardBuilderWrapper, styles);
