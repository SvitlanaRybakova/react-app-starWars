function About(props) {
  console.log(props);
  return (
    <div className="about">
      <p>
        <strong>
          <i>
            About Star Wars Wiki
        </i>
        </strong>

        {props.desc}
      </p>
    </div>
  )
}
 export default About;