function Home(props) {
  

  const getRandomQuote = () => {

    let randomQuote =
      props.quotes[Math.floor(Math.random() * props.quotes.length)];
    return `${randomQuote.quote} - ${randomQuote.character}`;
  };

  return (
    <div className="home">
      <h1>{getRandomQuote()}</h1>
    </div>
  )
}

export default Home;