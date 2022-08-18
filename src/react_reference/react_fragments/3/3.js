import React from "react";

export default function CustomApp() {
  return (
    <div>
      <RenderItem />
    </div>
  );
}

const ItemRenderer = ({ item, title, desc }) => {
  return (
    <div>
      <p>rendering item:</p>
      <p>{item}</p>
      <p>{title}</p>
      <p>{desc}</p>
    </div>
  );
};

const RenderItem = () => {
  const user = [
    {
      item: "item1",
      title: "title1",
      body: "lorem ipsum",
    },
    {
      item: "item2",
      title: "title2",
      body: "lorem ipsum",
    },
    {
      item: "item3",
      title: "title3",
      body: "lorem ipsum",
    },
  ];
  return (
    <>
      {user.map((item, index) => (
        <ItemRenderer
          key={index}
          item={item.item}
          title={item.title}
          body={item.body}
        />
      ))}
    </>
  );
};
