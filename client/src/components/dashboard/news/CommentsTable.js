import React, {Component} from 'react';
import CommentsCell from './CommentsCell';


let counter = 0;

function createData(name, desc, image) {
  counter += 1;
  return {id: counter, name, desc, image};
}

class PopularAuthorsTable extends Component {
  state = {
    data: [
      createData('John Smith commented on 4 keys to make your business unique', 'Thank you for posting such a wonderful content. The writing was outstanding. Subscribed to latest from you as well :)', 'https://via.placeholder.com/150x150', '45'),
      createData('Alex Dolgove commented on 4 keys to make your business unique', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making ', 'https://via.placeholder.com/150x150', '73'),
      createData('Domnic Brown commented on 4 keys to make your business unique', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form', 'https://via.placeholder.com/150x150', '13'),
    ],
  };

  render() {
    const {data} = this.state;
    return (

      <div className="jr-comments">
        {data.map(data => {
          return (
            <CommentsCell key={data.id} data={data}/>
          );
        })}
      </div>
    );
  }
}

export default PopularAuthorsTable;