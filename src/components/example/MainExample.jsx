import React from 'react';
import WebViewType from '../../constants/enums/WebViewType';
import WebViewTriggers from '../../constants/events/webView-triggers';
import ExampleButton from '../../constants/pages/ExampleButton';
import EventManager from '../../EventManager';

import './styles/mainExample.less';

class MainExample extends React.Component {
  exampleButtons;

  constructor(props) {
    super(props);

    this.state = {
      show: true,
      path: '/'
    }

    this.exampleButtons = [
      { name: 'Test', isActive: false },
      { name: 'Test2', isActive: true },
    ]
  }

  componentDidMount() {
    EventManager.addHandler(WebViewTriggers.ExampleWebViewTrigger, (value) => {
      switch (value.type) {
        case WebViewType.show:
          return this.setState({ show: true });
        case WebViewType.hide:
          return this.setState({ show: false });
      }
    });
  }

  componentWillUnmount() {
    EventManager.removeHandler(WebViewTriggers.ExampleWebViewTrigger);
  }

  render() {
    if (!this.state.show) return null;
    return (
      <React.Fragment>
        <div className='main-example-box'>
          Some of HTML code
          {
            this.exampleButtons.map((value, index) => {
              return (<ExampleButton name={value.name} isActive={value.isActive} key={index} />)
            })
          }
        </div>
      </React.Fragment>
    )
  }
}

export default MainExample;