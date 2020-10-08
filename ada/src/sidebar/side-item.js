import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

const SideItemContainer = ({
  node,
  node: { title, id },
  expanded,
  onClick,
}) => {
  // console.log(title);
  const [loading, setLoaded] = useState(true);
  const [nodeData, setData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/nodes/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setData(result[0]);
      });
  }, []);

  async function getSubNode(item) {
    let response = await fetch(`http://localhost:5000/nodes/${item}`);
    let data = await response.json();
    // console.log(response[0].title);
    return data;
  }

  let displaySubs = nodeData.connections
    ? nodeData.connections.map((item, i) => {
        // console.log(item);
        return getSubNode(item).then((data) => console.log(data[0].title));
        // let showdiv;
        // fetch(`http://localhost:5000/nodes/${item}`)
        //   .then((res) => res.json())
        //   .then((result) => {
        //     // subs.push(<div>{result[0].title}</div>);
        //     console.log(result[0].title);
        //     return <div>{result[0].title}</div>;
        //     // console.log(showdiv);
        //   });
        // console.log('ran');
        // return showdiv;
      })
    : '';

  console.log(displaySubs);

  return (
    <Card style={{ marginBottom: 5 }} onClick={onClick}>
      {title}
      {expanded && displaySubs}
    </Card>
  );
};

export default SideItemContainer;
