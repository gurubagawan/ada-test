import React, { useState, useEffect } from 'react';

const SideItem = ({ title, id, expanded, onClick }) => {
  const [loading, setLoaded] = useState(true);
  const [subItems, setSubs] = useState([
    {
      id: 5,
      title: 'Maybe Data with Beard',
      content: [
        {
          type: 'text',
          body: "<img src='' onerror='alert(7)'/>",
        },
        {
          type: 'text',
          body: "><img src='' onerror='alert(7)'/><",
        },
        {
          type: 'text',
          body: ' To seek out new life and new civilizations',
        },
        {
          type: 'text',
          body: ' To boldly go where no one has gone before',
        },
        {
          type: 'text',
          body:
            'Lorem Ipsum is simply {9926d7be6bb44850bf34d1f7cc3c2018|something} text of the printing and typesetting industry. Lorem Ipsum has been the {74c695031a554c2ebfdb2ee123c8b4f6|} standard dummy text ever since the {6b0f3753e17d42598a6b2b8468e3c20f|SOMETHING}, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        },
      ],
      connections: [7],
    },
  ]);

  // const displayAllPosts = postIDs.map((id, i) => {
  //   if (i == 0) return <BlogItem key={i} itemID={id} mainPost={true} />;
  //   else if (i < 30 * page) return <BlogItem key={i} itemID={id} />;

  // });

  const displaySubs = subItems.map((item, i) => {
    return <div>test</div>;
  });
  // console.log(expanded);

  return (
    <div onClick={onClick}>
      {title}
      {expanded && displaySubs}
    </div>
  );
};

export default SideItem;
