import React from 'react';
import { styled } from '@storybook/theming';

const Button = styled.button`
  outline: none;
  color: #999;
  background: none;
  font-size: 12px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  
  &:hover {
    color: #1EA7FD;
  }
`;

class TextDirectionSwitcher extends React.Component {
  constructor(props) {
    super(props);

    this.options = [{
      name: 'LTR',
      value: 'ltr',
    }, {
      name: 'RTL',
      value: 'rtl',
    }];

    this.state = {
      activeOptionIndex: 0,
    };

    props.api.on('storyRendered', () => {
      const { value } = this.options[this.state.activeOptionIndex];
      this.setActiveDir(value);
    });
  }

  setActiveDir(value) {
    const iframeTargetElement = document.getElementById('storybook-preview-iframe').contentWindow.document.body.parentNode;
    iframeTargetElement.setAttribute('dir', value);
  }

  toggleDirection = () => {
    const optionIndex = this.state.activeOptionIndex === 0 ? 1 : 0;
    const { value } = this.options[optionIndex];
    this.setState({
      activeOptionIndex: optionIndex,
    });
    this.setActiveDir(value);
  };

  render() {
    const { name } = this.options[this.state.activeOptionIndex];

    return (
      <Button type="button" onClick={this.toggleDirection}>{name}</Button>
    );
  }
}

export default TextDirectionSwitcher;
