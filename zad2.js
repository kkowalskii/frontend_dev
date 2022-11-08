const data = {
    image: 'https://i.ytimg.com/vi/kHjzuqq3b44/maxresdefault.jpg',
    cardTitle: 'Bob Dylan',
    cardDescription:
      'Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer/songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.',
    button: {
      url: 'https://en.wikipedia.org/wiki/Bob_Dylan',
      label: 'Go to wikipedia',
    },
  };
  
  const image = React.createElement('img', { src: data.image });
  const paragraph = React.createElement(
    'p',
    { class: 'card-text' },
    data.cardDescription
  );
  
  const h5 = React.createElement('h5', { class: 'card-title' }, data.cardTitle);
  
  const a = React.createElement(
    'a',
    { class: 'btn btn-primary', href: data.button.url },
    data.button.label
  );
  
  const div = React.createElement('div', { class: 'card-body' }, [
    h5,
    paragraph,
    a,
  ]);
  const cardDiv = React.createElement('div', { class: 'card m-5' }, [image, div]);
  
  ReactDOM.render(cardDiv, document.getElementById('root'));
  