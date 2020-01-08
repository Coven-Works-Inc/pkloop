import React, { useState } from 'react';
import HeaderFooter from '../headerFooter'
// import {
//   ThemeProvider,
//   TextComposer,
//   Row,
//   IconButton,
//   AddIcon,
//   TextInput,
//   EmojiIcon,
//   SendButton,
//   Message,
//   MessageList,
//   MessageText,
//   FixedWrapper
// } from '@livechat/ui-kit'
import './chat.css'
import Button from '../common/button'

const Chat = (props) => {
  const [state, setState] = useState({
    headerText: 'Sender details'
  })

  console.log(props.location)

  const theme = {
    vars: {
      'primary-color': '#427fe1',
      'secondary-color': '#fbfbfb',
      'tertiary-color': '#fff',
      'avatar-border-color': 'blue',
    },
    AgentBar: {
      Avatar: {
        size: '42px',
      },
      css: {
        backgroundColor: 'var(--secondary-color)',
        borderColor: 'var(--avatar-border-color)',
      }
    },
    Message: {
      css: {
        fontWeight: 'bold',
        backgroundColor: '#e4e9f2'
      },
      radiusType: 'first'
    },
  }

  const changeHeader = text => {
    setState({
      headerText: text
    })
  }
  return (
    <div className='chat'>
      <div className='chat-details'>
        <div>
          <h3>
            <span className='gray'>From</span> Texas,USA
                        <br />
            <span className='gray'>To</span> London,UK
                    </h3>
          <h5>
            <span className='gray'>Traveller</span> Sheldon Cooper
                      <br />
            <span className='gray'>Arrival date</span> Nov 13, 2019
                      <br />
            <span className='gray'>Means of transportation</span> Flight
                      <br />
            <span className='gray'>Size of parcel</span> Large
                      <br />
            <span className='gray'>Weight of parcel</span> 0-5lbs
                    </h5>
          <Button color='white' backgroundColor="#0071bc">ENTER RECEIVER'S DETAILS</Button>
          <Button modal={props.modal} type='tip' color='white' backgroundColor="#0071bc">ADD A TIP(OPTIONAL)</Button>
          <Button modal={props.modal} type='insurance' color='white' backgroundColor="#abcc71">ADD INSURANCE(OPTIONAL)</Button>
          <Button color='white' backgroundColor="#00bdbe">MARK AS COMPLETED</Button>
          <Button color='red' backgroundColor="white">CANCEL TRANSACTION</Button>
        </div>
      </div>
      <div className='chat-board'>
        {/* <ThemeProvider theme={theme}>
          <div style={{ width: '100%', background: 'white' }}>
            <MessageList active>
              <Message authorName="Jon Smith" date="21:37" showMetaOnClick style={{ borderRadius: '1em', padding: '5px 10px', height: 'max-content' }}><MessageText>Hello</MessageText></Message>
            </MessageList>
            <Row reverse>
              <Message isOwn radiusType='single' showMetaOnClick style={{ backgroundColor: '#00bdbe', borderRadius: '1em', padding: '5px 10px', height: 'max-content' }}>
                <MessageText>Hi!</MessageText>
              </Message>
            </Row>
            <TextComposer>
              <Row align="center">
                <IconButton fit>
                  <AddIcon />
                </IconButton>
                <TextInput fill />
                <SendButton fit />
              </Row>

              <Row verticalAlign="center" justify="right">
                <IconButton fit>
                  <EmojiIcon />
                </IconButton>
              </Row>
            </TextComposer>
          </div>
        </ThemeProvider> */}
      </div>
    </div>
  )
}
export default Chat;