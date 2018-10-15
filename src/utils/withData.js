import React from 'react';
import { Loading, Empty, Errors } from '../components/ViewStates';
import isEmpty from './isEmpty';

export default function withData(dataLoader = () => Promise.resolve({})) {
  return (Component, others) => class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {}, 
        loading: true,
        empty: false,
        err: null,
      };
      this.getData = this.getData.bind(this);
    }

    componentDidMount() {
      this.getData();
    }

    getData() {
      this.setState({ loading: true })
      dataLoader(this.props)
        .then(data => {
          const empty = isEmpty(data);
          // catch falsy data
          // const err = (data == undefined || Number.isNaN(data));
          this.setState({ data, empty, loading: false })
        })
        .catch(err => this.setState({ err, loading: false }))
    }

    render() {
      const { LoadingView, ErrorView, EmptyView } = Object.assign({}, {
        LoadingView: Loading,
        ErrorView: Errors,
        EmptyView: Empty,
      }, others);
      const { data, loading, empty, err } = this.state;
      if (loading) return <LoadingView />;
      if (err) return <ErrorView err={err} />;
      if (empty) return <EmptyView />;
      return <Component data={data} getData={this.getData} {...this.props} />;
    }
  }
};