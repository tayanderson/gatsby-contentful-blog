import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/*
  ⚠️ This is an example of a contact form powered with Netlify form handling.
  Be sure to review the Netlify documentation for more information:
  https://www.netlify.com/docs/form-handling/
*/

const Form = styled.form`
  flex-flow: row wrap;
  input,
  textarea {
    padding: 1em;
    &::placeholder {
      color: black;
    }
    &::-webkit-input-placeholder {
      color: black;
    }
    &::-moz-placeholder {
      color: black;
    }
    &:-ms-input-placeholder {
      color: black;
    }
    &:-moz-placeholder {
      color: black;
    }
    &:required {
      box-shadow: none;
    }
    &:focus {
      outline: none;
    }
  }
  &::before {
    content: '';
    background: black;
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    transition: 0.2s all;
    opacity: ${props => (props.overlay ? '.8' : '0')};
    visibility: ${props => (props.overlay ? 'visible' : 'hidden')};
  }
`

const Message = styled.textarea`
  min-height: 200px;
`

const Submit = styled.input`
  transition: 0.2s;
`

const Modal = styled.div`
  padding: 2em;
  min-width: 75%;
  transform: translate(-50%, -50%);
  flex-flow: column;
  transition: 0.2s all;
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
  @media screen and (min-width: 640px) {
    min-width: inherit;
    max-width: 400px;
  }
`

const Button = styled.div`
  background: transparent;
  font-size: 1em;
  display: inline-block;
  margin: 0 auto;
  border: 1px solid #ff001f;
  outline: none;
  cursor: pointer;
  color: white;
  padding: 1em;
  border-radius: 2px;
  text-decoration: none;
  transition: 0.2s;
`

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      showModal: false,
    }
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    fetch('/?no-cache=1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(this.handleSuccess)
      .catch(error => alert(error))
    event.preventDefault()
  }

  handleSuccess = () => {
    this.setState({
      name: '',
      email: '',
      message: '',
      showModal: true,
    })
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <Form
        name="contact"
        onSubmit={this.handleSubmit}
        data-netlify="true"
        data-netlify-honeypot="bot"
        overlay={this.state.showModal}
        onClick={this.closeModal}
        className="max-w-centered my-0 mx-auto flex flex-wrap justify-between items-start font-body"
      >
        <input type="hidden" name="form-name" value="contact" className="bg-gray-200 text-primary border-2 p-2"/>
        <p hidden>
          <label>
            Don’t fill this out:{' '}
            <input name="bot" onChange={this.handleInputChange} />
          </label>
        </p>

        <input
          name="name"
          type="text"
          placeholder="Full Name"
          value={this.state.name}
          onChange={this.handleInputChange}
          required
          className="mb-3 w-full bg-gray-200"
        />
      <input
          name="email"
          type="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleInputChange}
          required
          className="mb-3 w-full bg-gray-200"
        />
      <Message
          name="message"
          type="text"
          placeholder="Message"
          value={this.state.message}
          onChange={this.handleInputChange}
          required
          className="w-full mb-10 leading-relaxed resize-y bg-gray-200"
        />
      <Submit name="submit" type="submit" value="Send Message" className="bg-transparent text-primary border-2 border-primary cursor-pointer my-0 mx-auto hover:bg-primary hover:text-white"/>

        <Modal visible={this.state.showModal} className="bg-white p-8 fixed top-1/2 left-1/2 mx-auto my-0 z-50 items-start sm:max-w-sm">
          <p className="leading-relaxed mb-6 text-center">
            Thanks for reaching out! I will get back to you as soon as I can.
          </p>
          <div className="bg-transparent border-2 border-primary text-primary text-base block my-0 mx-auto cursor-pointer p-2 z-50 focus:outline-none hover:bg-primary hover:text-white w-20 text-center" onClick={this.closeModal}>Okay</div>
        </Modal>
      </Form>
    )
  }
}

ContactForm.propTypes = {
  data: PropTypes.object,
}

export default ContactForm
