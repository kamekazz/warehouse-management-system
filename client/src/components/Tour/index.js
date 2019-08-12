import React from 'react';
import Joyride from 'react-joyride';

class Tour extends React.PureComponent {

  static defaultProps = {
    joyride: {
      autoStart: false,
      resizeDebounce: false,
      run: false,
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      autoStart: false,
      running: false,
      steps: [
        {
          text: 'Shows logged-in user\'s info with dropdown context menu.',
          textAlign: 'center',
          selector: '.app-container .app-sidebar .user-profile',
          position: 'right',
          isFixed: true,
        },
        {
          title: 'Notifications',
          text: 'Keep yourself notified with the upcoming alerts and announcements',
          textAlign: 'center',
          selector: '.app-container .app-main-container .app-main-header .app-tour',
          position: 'top',
          isFixed: true,
        },
        {
          title: 'Messages',
          text: 'Check your recent messages from your connections.',
          textAlign: 'center',
          selector: '.app-container .app-main-container .app-main-header .mail-tour',
          position: 'top',
          isFixed: false,
        }
      ],
      step: 0,
    };

    this.handleNextButtonClick = this.handleNextButtonClick.bind(this);
    this.handleJoyrideCallback = this.handleJoyrideCallback.bind(this);
  }

  handleNextButtonClick() {
    if (this.state.step === 1) {
      this.joyride.next();
    }
  }

  handleJoyrideCallback(result) {
    const {joyride} = this.props;

    if (result.type === 'step:before') {
      // Keep internal state in sync with joyride
      this.setState({step: result.index});
    }

    if (result.type === 'finished' && this.state.running) {
      // Need to set our running state to false, so we can restart if we click start again.
      this.setState({running: false});
    }

    if (result.type === 'error:target_not_found') {
      this.setState({
        step: result.action === 'back' ? result.index - 1 : result.index + 1,
        autoStart: result.action !== 'close' && result.action !== 'esc',
      });
    }

    if (typeof joyride.callback === 'function') {
      joyride.callback();
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        running: true,
        step: 0,
      });
    }, 1000);
  }

  render() {
    const {joyride} = this.props;
    const joyrideProps = {
      autoStart: joyride.autoStart || this.state.autoStart,
      callback: this.handleJoyrideCallback,
      debug: false,
      disableOverlay: this.state.step === 1,
      resizeDebounce: joyride.resizeDebounce,
      run: joyride.run || this.state.running,
      scrollToFirstStep: joyride.scrollToFirstStep || true,
      stepIndex: joyride.stepIndex || this.state.step,
      steps: joyride.steps || this.state.steps,
      type: joyride.type || 'continuous'
    };
    return (<Joyride
        {...joyrideProps}
        ref={c => (this.joyride = c)}/>

    )

  }
}

export default Tour;

