import React from 'react';
import {Button} from 'antd';
import ImageCollection from './ImageCollection';
import CommentContainer from '../container/CommentContainer';

class Display extends React.Component {
  state = {
    image : [
              'https://d1e2wseyxx8ugp.cloudfront.net/page/2d1be43b5c7124505fe3a558180afbf0/61072359/800x500.jpg',
              'https://image.slidesharecdn.com/mindtickle2-170215093250/95/the-secret-to-building-a-sales-enablement-powerhouse-1-638.jpg?cb=1487151340',
              'https://i.ytimg.com/vi/aRWnfVd6YU8/maxresdefault.jpg'
            ]
  };
  render() {
    const {index,dispatch} = this.props;
    return (
      <div>
        <div style={{width : '100%', height : '80px', backgroundColor : '#ffc266', fontSize : '35px', textAlign : 'left',  borderBottomRightRadius : '25px'}}>
        <font color='black'><b>Mind</b></font><font color='white'><b><i>T!ckle</i></b></font>
        </div>
        <div style={{display: 'flex', margin : 'auto', marginLeft : '130px', marginTop : '25px' }}>
          <Button type='primary' onClick={ ()=> {
              dispatch({
                  type : 'DECREMENT',
                  index : (index + 2)%3
              })
          }}>Prev</Button>
          <ImageCollection image = {this.state.image[index]} />
          <Button type='primary' onClick={ ()=> {
              dispatch({
                  type : 'INCREMENT',
                  index : (index + 1 )%3
              })
          }}>Next</Button>
        </div>
        <div style={{marginTop : '40px'}}>
            <CommentContainer/>
        </div>
          
      </div>
     
    );
  }
}

export default Display;