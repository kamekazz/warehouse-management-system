import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { styleColor } from '../../../Styles/styleThem';
import { connect } from 'react-redux';
import { acGetWebData } from '../../../redux/cubiData/cubiData.action';
class FormUpcContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { upc: '075877252562' };
  }
  onSubmitFrom = e => {
    if (this.state.upc) {
      e.preventDefault();
      this.props.acGetWebData(this.state.upc);
      this.setState({ upc: '' });
    }
  };
  render() {
    return (
      <PaperEl elevation={12}>
        <FormEl onSubmit={e => this.onSubmitFrom(e)}>
          <UpcTextEl
            autoFocus={true}
            label="UPC"
            name="upc"
            margin="normal"
            type="text"
            value={this.state.upc}
            onChange={e => this.setState({ upc: e.target.value })}
          />
          <ButtonEl
            onClick={this.onSubmitFrom}
            variant="contained"
            color="secondary"
          >
            <i className={'fas fa-search'} style={{ fontSize: '30px' }}></i>
          </ButtonEl>
        </FormEl>
      </PaperEl>
    );
  }
}
const mapStateToProps = state => ({});

const mapDispatchToProps = { acGetWebData };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormUpcContainer);

const PaperEl = styled(Paper)`
  grid-area: FormUpcContainer;
  padding: 8px 18px;
  display: flex;
  align-items: center;
  height: 100px;
`;

const FormEl = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: space-evenly;
  margin: 0 0 0 0;
`;

const UpcTextEl = styled(TextField)`
  flex-grow: 1;
  input {
    margin-right: 20px;
    letter-spacing: 3px;
    font-size: 25px;
    color: ${styleColor.error.main};
    text-transform: uppercase;
  }
`;

const ButtonEl = styled(Button)`
  transform: translate(0, 10px);
  span {
    color: ${({ cancel }) => (cancel ? styleColor.error.main : 'white')};
    &:hover{
        color: ${styleColor.primary.main}
  }
`;
