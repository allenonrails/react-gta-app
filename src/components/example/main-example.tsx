import React from 'react';
import WebViewType from 'src/constants/enums/WebViewType';
import WebViewTriggers from 'src/constants/events/webView-triggers';
import ExampleButton from 'src/constants/pages/ExampleButton';
import ExampleInterface from 'src/constants/pages/interfaces/ExampleInterface';
import EventManager from 'src/EventManager';

interface ExampleState {
  show: boolean;
  path: string;
}

class MainExample extends React.Component<any, ExampleState>{
  private exampleButtons: ExampleInterface[];

  public constructor(props: any) {
    super(props);

    this.state = {
      show: false,
      path: '/'
    }

    this.exampleButtons = [
      { name: 'Test', isActive: false },
    ]
  }

  componentDidMount() {
    EventManager.addHandler(WebViewTriggers.ExampleWebViewTrigger, (value: any) => {
      switch (value.type) {
        case WebViewType.show:
          return this.setState({ show: true });
        case WebViewType.hide:
          return this.setState({ show: false });
      }
    });
  }

  componentWillUnmount(){
    EventManager.removeHandler(WebViewTriggers.ExampleWebViewTrigger);
  }

  render(){
    if(!this.state.show) return null;
    return(
      <React.Fragment>
        Some of HTML code
        {
          this.exampleButtons.map((value: ExampleInterface, index: number) => {
            return(<ExampleButton name={value.name} isActive={value.isActive} key={index}/>)
          })
        }
      </React.Fragment>
    )
  }
}

export default MainExample;