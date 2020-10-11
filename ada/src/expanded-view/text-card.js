import React from 'react';
import { Button, Card } from 'react-bootstrap';

const TextCard = ({ bodyText, searchVal }) => {
  // This function looks for all instances of a char in a string. Running this twice will given the start and end indexes in two arrays
  //  Given that we know the object is surrounded by { }, I'm assuming that the indexes between the two arrays will match. IE startindex/endindex[0] surround the first object
  function indexOfAll(string, searchItem) {
    var i = string.indexOf(searchItem),
      indexes = [];
    while (i !== -1) {
      indexes.push(i);
      i = string.indexOf(searchItem, ++i);
    }
    return indexes;
  }

  let newString = bodyText;
  let startingIndexes = indexOfAll(bodyText, '{');
  let endIndexes = indexOfAll(bodyText, '}');

  let stringObjects = [];
  if (startingIndexes.length) {
    for (let i = 0; i < startingIndexes.length; i++) {
      let thisObject = newString.substring(
        startingIndexes[i],
        endIndexes[i] + 1
      );

      // In the string, | always shows the break between key and value, so that will be what I look for when searching for the value
      let objectValueStart = thisObject.indexOf('|');
      let objectValue = thisObject.slice(
        objectValueStart + 1,
        thisObject.length - 1
      );

      // Keeping the uncut object as a string so it's easy to look for and slice out, and then the value of the object so I can easily access it
      stringObjects.push({
        object: thisObject,
        objectValue: objectValue,
        index: startingIndexes[i],
      });
    }
    // Even though this is the same loop
    // I Have to seperate this part of the function from the rest of the loop out because after the first run,
    // it messes up the index values if there is more than one object
    for (let i = 0; i < stringObjects.length; i++) {
      newString = newString.replace(stringObjects[i].object, '');
    }
  }

  const textArray = newString.split(searchVal);
  return (
    <Card
      style={{ marginBottom: 10, color: '#21313C' }}
      body
      border="secondary"
    >
      {textArray.map((item, index) => (
        <>
          {item}
          {index !== textArray.length - 1 && <b>{searchVal}</b>}
        </>
      ))}
      <div style={{ marginTop: 5 }}>
        {stringObjects.map((item, i) => {
          // I wasn't totally sure what was required for the variables from the instructions, and didn't get clarification before submitting. Going with my best guess from the image
          // I'm outputting the variable values as a small tag

          // Operating under the assumption that an empty tag is an api issue, or that it was mistakenly entered, I am filtering out empty objects here, otherwise they will show an empty tag
          if (item.objectValue == '') return null;
          return (
            <Button
              disabled
              style={{ marginRight: 5, width: 100, fontSize: 12 }}
              variant="outline-info"
            >
              {item.objectValue}
            </Button>
          );
        })}
      </div>
    </Card>
  );
};

export default TextCard;
