function Footer() {

  // Replace links with social media profiles
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/gmtz0794"
    },
    {
      name: "fab fa-linkedin",
      link: "https://linkedin.com/in/gustavo-martínez-197745193"
    }
  ]

  return (
    <footer className="flex-row px-1">
      {icons.map(icon =>
      (
        <a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>
      )
        )}
    </footer>
  );
}

export default Footer;
